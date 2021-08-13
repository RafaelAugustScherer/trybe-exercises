# DOM: Document Object Model

**DOM** is the interface responsible for generating the **representation of the HTML page** to the **Browser Agent**. This structure can also be used to access objects and its properties through **JavaScript**.

## DOM Structure

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1286cb59-6f11-4eed-af22-3d6bbb079eb1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1286cb59-6f11-4eed-af22-3d6bbb079eb1/Untitled.png)

1. **Window:** The DOM wrapping container;
2. **location**: The current document location;
3. **document**: Store the HTML page;
4. **history**: Stores the history of pages previously accessed;
5. **element**: Each HTML tag is one;
6. **text**: Text stored between element tags;
7. **attribute**: Every attribute given to the tags.

## DOM Common Methods

```jsx
/* Common Selectors */
document.getElementById([Id]) // Return HTML Element with Id
				.getElementsByClass([class]) // Return Array of Elements with class
				.getElementsByTag([tag]) // Return Array of Elements with tag
				.querySelector([selector]) // Return NodeList of Element with #Id, .class or tag
				.querySelectorAll([selector]) // Return NodeList with .children Array of Elements

/* Common Element Manipulation */
const Element = document.getElementById('header')
Element.style.[cssProperty] = [value] //Change CSS Property of element
Element.innerHTML = [value] //Change Exact value of **inner <tag> content**
var innerText = Element.innerText // Return just inner text, excluding inner tags
```

---

## Elements & Methods

```jsx
const element = document.getElementById('divExample')

/* Hierarchy Access */
element.parentNode //Return above element in the HTML hierarchy
element.parentElement //Return only the above element, not inner elements
element.children //Return HTMLCollection of below elements
element.firstChild //Only first child
element.lastChild //Only last child

/* Create Elements */
let div = document.createElement('div') //Create an element with any tag
div.id = 'tst'

document.body.appendChild(div) //Append element as child of any tag

/* Modify Elements */
element.id = [id] //Set id to element
element.className = [className] //Set class to element
element.classList.add([className), [...]) //Add class to element
element.classList.remove([className], [...]) //Remove class from element
```

---

## Events & Listeners

```jsx
/* Direct Events - Not Recommended */
[element].onload = () => {} //Execute function when the element is loaded
[element].onclick = () => {} //[...] when the element is clicked

/* JavaScript Listeners - Recommended */
[element].addEventListener([evtType], ([evt]) => {}) //Alternative event method | Listener
[evtType] = 'click', 'mouseover', 'change', 'keyup'
[evt].target = [element]
[evt].type = [evtType]
```

# Web Storage

Data saved locally for **user** identification and custom settings.

## Cookies

Saved in a `key-value` just like an object in the user's computer **and** in the website server. They are limited to **4kb**.

```jsx
document.cookie = '[cookieData]; [cookiesProps]; [...]'
Ex:
document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";
document.cookie //Return values stored in cookies
```

## Local & Session Storage

Stored only in the user's computer, limited from **5 to 10MB**.

**localStorage** - Works just like a cookie, but has no expiration date attribute.

**sessionStorage** - Saves data just for **this session**. After the browser **tab is closed,** every piece of data is **erased**.

```jsx
[storageType] = localStorage, sessionStorage

[storageType].setItem('email', 'isabella@email.com')
[storageType].getItem('email') //Return email value in storage

[storageType].removeItem('email') //Remove specific value from storage
[storageType].clear() //Remove every value from storage
```

Storage data can be saved in the forms of Arrays or Objects as well.

```jsx
sessionStorage.setItem('example', JSON.stringify(['tst1', 'tst2'])
JSON.parse(sessionStorage.getItem('example')) //Return array
```