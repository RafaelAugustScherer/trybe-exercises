# Block 3 - Introduction to HTML & CSS

# What is HTML

**HTML**: Hyper Text Markup Language

> It is **not** a programming language, it is a markup language.

HTML was designed to be an effective way of sharing information through Internet. It can be interpreted as the skeleton of a web page. Each part of the skeleton is a `tag <>`.

The tags make all the difference when compared to a normal plain/text, because just pure text could not be effectively interpreted by the Browsers to properly mount the page.

# Tags & Attributes

**Structure**: <**tagName** *attributes*>tagContent</**tagName**>

## Common Tags

```html
<!DOCTYPE html> # Tell the browser what is in the file
<html lang="language"> # Specifies the root of the web page
<head> # Detailed page information (title, icon, meta charset, etc)
<body> # Content of the web page
```

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

## Common Attributes

```html
id="" # Assign unique identifier to the tag
class="" # Similar to id, but it doesn't need to be unique and can be applied to multiple elements
height="" & width="" # Defines the size of the object in 'px' or 'rem' 
alt="" # Description of the object in text format. Used for accessibility or when the object cannot be loaded
```

## Common Combinations

```html
<meta charset=""> # Define language pattern used in the page
# Charset is the character set. Ex: UTF-8, ISO-8859-1

<img src=""> # Image tag with source attribute.
# Source can be a link to the image.

<a href="" target=""> # Converts the content into a clickable link.
# Href is where the user is directed. Can be an external link or a local tag
# Target is defined to "_blank" when you want to open the link in a new tab
```