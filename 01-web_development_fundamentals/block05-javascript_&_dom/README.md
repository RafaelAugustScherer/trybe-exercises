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

## DOM Methods

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