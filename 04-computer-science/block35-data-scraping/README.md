# Block 35 - Network & Data Scraping

<details>
<summary>Network & Protocols</summary>

## Protocols & Models

### OSI Model (Open Systems Interconnection)

This is a network **model** that serves as an **interface** for a concrete model. It defines **7** layers to be implemented by a protocol:

**Application, Presentation, Session, Transport, Network, Data link and Physical**

### TCP/IP (Transmission Control Protocol / Internet Protocol)

This is an **implementation** of the OSI Model, compilating those **7 layers into only 4**:

- **Application**
    
    This layer is what gives meaning to the information. It is in close contact with the final client.
    
    Examples: SMTP (Simple Mail Transfer Protocol), FTP (File TP) and HTTP (Hypertext TP)
    
- **Transport**
    
    TCP and UDP are the most commonly used protocols:
    TCP provides **higher reliability.** If part of the data was lost during transmission, it will make another request.
    UDP provides **higher speed.** It allows for some data loss in exchange for speed in live transmissions for example.
    
- **Network**
    
    These are used to give addresses to each device so they can communicate. The most known protocol is the **IP (Internet Protocol)**, but there are others such as **ICMP, NAT and ARP.**
    
- **Interface**
    
    Last but not least this is the hardware related protocol. The one that prevails for TCP/IP is the **Ethernet Protocol**. These regulate electronic signals, conectors, tension level, dimensions, etc.
    

## Security Layers

Some security related protocols are also used in application levels. These are **SSL (Secure Sockets Layer), TLS (Transport Layer Security) and HTTPS (HTTP Secure).**

Most of these operate over a **pair of keys** to encrypt data and send to the transport application not the raw data, but the encrypted data that only the receptor can decrypt.

The HTTPS also implements the **certificate concept**. These are generated by a **Certification Authority (CA)** and given to website owners to check that their website is safe and not a [phishing website.](https://en.wikipedia.org/wiki/Phishing)

## Cyberattacks

### DDoS (Distributed Denial of Service)

This is an attack that is done by using multiple (infected) computers from any part of the world. For the attacker to not be identified and blocked right away, many requests are done by many computers that are infected with this attacker’s ransomware, these are called “zombie computers”.

The huge amount of traffic occupies all of the resources of the server running the website, so it will become very slow and practically unusable.

### Brute Force

This attack is used to break passwords and access user accounts anywhere. If the website does not require a **strong password or 2FA**, these attacks can be very effective.
What it does is access the website with your email and try all possible combinations of password. If the password is strong enough, this attack can take more than a year running nonstop to finally break it.

## Firewalls & Proxies

Firewall is a **set of rules to control what happens when data is received or sent** to the device. It can operate over IP addresses, communication ports and protocols.

The most common firewall present in Linux distros is **Netfilter**. The rules can be changed using the command `iptables`.

### Fail2ban

This is an **IPS (Intrusion Prevention System)** that operates over iptables. It will detect suspect behavior in the network and can automatically block malicious requests.

### Proxy

Another layer of security is Proxy. It is another kind of feature that operates over a network to prevent access. It can, for example, watch URL keywords and block access to determined websites.
The proxy itself is a device, maybe a computer, that works just like a DNS server.
</details>

<details>
<summary>Data Scraping</summary>

# Requesting Data

To make a request so we can scrap onto some data, we first need the data itself. For this purpose, we have a lib in Python called `requests`! It works almost like Front-end tools such as **axios** or **fetch**. Here’s some code:

```python
import requests

# GET
response = requests.get("https://www.betrybe.com/")
print(response.status_code) # 200 = OK
print(response.headers)  # Request HTTP Headers

# Content Received (PURE HTML!)
print(response.text)

# GET With Custom Headers
response = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})
print(response.text)

# GET Request to binary resource (image)
response = requests.get("http://httpbin.org/image/png")
print(response.content)

# ... JSON
response = requests.get("http://httpbin.org/get")
print(response.json())

# raise_for_status() Will raise an exception in case of error
response = requests.get("http://httpbin.org/status/404")
response.raise_for_status()
```

## Exceptions

### Too Many Requests

When requesting too many times to the same address, the website might block you temporarly for too many requests (**[429](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429)**). A good practice to avoid this problem is to **wait** before doing the next request:

```python
import requests
import time

for _ in range(15):
	response = requests.get("https://cloudfare.com/rate-limit-test")
	time.sleep(5) # Wait 5 seconds before next request
```

### Timeout

Timeout can happen if a service is out. We can handle timeouts so the code doesn’t stop or break:

```python
import requests

try:
		response = requests.get("http://httpbin.org/delay/10", timeout=3)
except (requests.ReadTimeout, requests.HTTPError):
		print('Service unavailable!')
```

# Analyzing Data

To better understand and work with the data received we need to be able to get and iterate over the HTML elements. For that purpose, we will use the `parser` lib:

### Selector

```python
from parsel import Selector
import requests

response = requests.get("http://books.toscrape.com")
selector = Selector(text=response.text)

print(selector.css('img.thumbnail').get()) # First image with class="thumbnail" in page
print(selector.css('img.thumbnail').getall()) # Every image with ...

for book in selector.css(".product_pod"):
		title = book.css("h3 a::attr(title)").get() # Get the attribute value
		price = book.css(".price_color::text").get() # Get the text value
		print(title, price)
```

### Navigating

The Selector code above is going to list the first page books. If we want to list every single book, we can do a loop through next URLs:

```python
BASE_URL = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for book in selector.css(".product_pod"):
        title = book.css("h3 a::attr(title)").get()
        price = book.css(".price_color::text").get()
        print(title, price)

    next_page_url = selector.css(".next a::attr(href)").get() # Get next page button URL
```

### Cleaning Data

If we need to remove some content from the data retrieved, we can apply some data cleaning methods.
First is `re`, we can use it to apply a regular expression in some data. In this example we will remove anything that doesn’t match the regex from every price:

```python
price = book.css(".price_color::text").re(r"£\d+\.\d{2}") # £51.40 = PASS
```

Also, if we want to remove a prefix or suffix from any text, such as a description, we can use something like this:

```python
suffix = "...more"
if description.endswith(suffix):
		description = description[:-len(suffix)]
		description = description.removesuffix("...more") # Python 3.9^
```

# Storing Data - MongoDB

So storing data is also a very important step in data scraping. For that we’ll be using `pymongo`, a powerful integration between python and mongodb.

```python
from pymongo import MongoClient

client = MongoClient("localhost:27017") # Open connection
books = client.books # Access Collection

client.close() # Close connection

# OR

with MongoClient() as client:
		books = client.books

		# [...]
		books = []
		for book in selector.css(".product_pod"):
				title = book.css("h3 a::attr(title)").get()
				price = book.css(".price_color::text").re(r"£\d+\.\d{2}")
				books.append({ title, price })
		db.books.insert_many(books)
		
		for book in books.find():
			print(book['title'])
```

# Xtra

Another powerful tool for scraping data in Python is [**Scrapy**](https://scrapy.org/)

## Selenium

This tool allow us to actually enter and manipulate DOM elements, like inputs and click buttons. 

**To start using this tool, first we need to install the browser drivers for the specific browser we are using:** [LINK](https://www.selenium.dev/documentation/webdriver/getting_started/install_drivers/)

After extracting the driver, we can use it in our code like so:

```python
from selenium.webdriver.chrome.service import Service
from selenium import webdriver

service = Service(executable_path="/path/to/chromedriver")
chrome = webdriver.Chrome(service=service)

response = chrome.get("https://www.google.com")
search_input = chrome.find_element_by_tag_name("input")
search_inpurt.send_keys("Your search here")
```
</details>