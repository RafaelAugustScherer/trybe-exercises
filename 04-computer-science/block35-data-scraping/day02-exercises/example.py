import requests
from parsel import Selector

base_url = "https://guru3d.com/"
response = requests.get(base_url)

print("Connection Status: ", response.status_code)

selector = Selector(text=response.text)
news_headers = selector.css('.colmiddle h1::text').getall()
news_resume = selector.css('.colmiddle .content2, .colmiddle .content')


print('\nToday News:\n')
for index, header in enumerate(news_headers):
  print('----------')
  print(header)
  print(f"{base_url}{news_resume[index].css('a::attr(href)').get()}")