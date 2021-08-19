# Form

A Form `<form></form>` is an HTML Tag that contain inner input elements that are filled by the user.

## Form Properties

`action="[url]"` - Where the form data is sent

`method="GET || POST"` - HTTP Method to use when data is sent

`enctype="multipart/form-data"` - Used when sending files + text through the form

## Input Elements

`<input type="text">` - Text input

`<textarea cols="[num]" rows="[rows]"></textarea>` - Text input, but allows for multiple lines

`<input type="checkbox" name="[checkboxGroupName]>` - Common checkbox

`<input type="radio" name="[radioGroupName]>` - Just like the checkbox, but only allows for one selected element

`<input type="file">` - File input

`<label for="[inputID]">[Label]</label>` - Recommended text element for any `input` item.

---

## **Complete list of Form input tags:**

[- HTML: Linguagem de Marcação de Hipertexto | MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input)

## preventDefault()

When press a `<button type="submit">` inside a form, the form triggers the `action` attribute even if it is empty. This causes the page to reload, and any JS function that would be executed is canceled.

To avoid that in the function of the `addEventListener` insert the following:

```jsx
function calledFunction(event) {
event.preventDefault()
// Rest of function
}
submitButton.addEventListener('click', calledFunction)
```