# Block 3 - Introduction to HTML & CSS

# What is HTML

**HTML**: Hyper Text Markup Language

> It is **not** a programming language, it is a markup language.

HTML was designed to be an effective way of sharing information through Internet. It can be interpreted as the skeleton of a web page. Each part of the skeleton is a `tag <>`.

The tags make all the difference when compared to a normal plain/text, because just pure text could not be effectively interpreted by the Browsers to properly mount the page.

---

# Tags & Attributes

**Structure**: <**tagName** *attributes*>tagContent</**tagName**>

## Common Tags

```html
<!DOCTYPE html> <!-- Tell the browser what is in the file ->
<html> <!-- Specifies the root of the web page ->
<head> <!-- Detailed page information (title, icon, meta charset, etc) ->
<body> <!-- Content of the web page ->
```

---

## Text Tags

```html
<h1> # Text sections of the page, goes up to <h6>
<p> # Generic paragraph
<br> # Generic break/line
<strong> # Tag content is bold
<i> # Tag content is italic
<ol> or <ul> # (Un)Ordered list | Unordered = * <li> | Ordered = Num. <li>
<li> # List item
```

---

## Common Attributes

```html
id="" <!-- Assign unique identifier to the tag ->
class="" <!-- Similar to id, but it doesn't need to be unique and can be applied to multiple elements ->
height="" & width="" <!-- Defines the size of the object in px, rem or % ->
alt="" <!-- Description of the object in text format. Used for accessibility or when the object cannot be loaded ->
```

---

## Common Combinations

```html
<meta charset=""><!-- Defines language pattern used in the page ->
<!--
**charset** is the character set (UTF-8, ISO-8859-1).
->

<img src=""><!-- Image tag with source attribute. ->
<!--
**src** can be a link to an image (.jpg, .png, .gif).
->

<a href="" target=""> <!-- Converts the content into a clickable link. ->
<!--
**href** is where the user is directed. Can be an external link or a local tag
**target** changes how the link is opened. "_blank" = new tab
->
```

---

# What is CSS?

**CSS**: Cascading Style Sheets

CSS is a styling language for HTML tags. It defines how HTML elements are organized and presented in the Client render interface.

## How to use?

It can be implemented in 3 ways:

1. The following can be added inside the `<head>` tag in the HTML page: `<style> #CSS Code </style>`;
2. `style=" #CSS Code"` can also be used as an attribute of an HTML tag;
3. (Recommended) A separate file *example.css* can be created and the following can be added inside the `<head>` tag: `<link rel="stylesheet" href="pathTo\example.css"`.

---

```css
h1 {
/* Insert properties for <h1> tag here */
}

#exampleId {
/* Insert properties for id="exampleId" here */
}

.exampleClass {
/* Insert properties for class="exampleClass" here */
}
```

---

## Common Properties

```css
color & background-color /* Set foreground and background color (name, rgb, hex) */
width & height /* Set width and height (px, rem, %) */
font-family & font-size /* Set font family and its size (sans-serif, Helvetica)*/
```

---

## Font-family

There is a lot of fonts available to use in our CSS file. Some fonts will also not be available depending on the browser and computer it is executing. Some intersting examples to keep in mind:

- sans-serif: Default font used in the Client's browser/computer, generally simple. Can be used specially as a **backup font**. So you would set Ex: `font-family: Helvetica, sans-serif`;
- monospace: Font similar to the one used in writing machines. Each letter occupies the same space `width` wise;
- cursive: Manuscript like font;
- fantasy: Chronicle book like font.