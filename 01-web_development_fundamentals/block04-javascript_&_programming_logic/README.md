# JavaScript's History

- Presented in 1995 as **Mocha** language by Brendan Eich;
- Renamed to **LiveScript** and released in the Netscape 2.0 Beta release;
- Renamed to **JavaScript** because of Java's Hype;
- Re-released by Microsoft in the Internet Explorer as **JScript**;
- In 1997 it was padronized by ECMA international as **ECMAScript**;
- 1997: **ES1**; 1998: **ES2**; 1999: **ES3**; 2009: **ES5**; 2015: **ES6**.

So JavaScript is the Official language name, and ECMAScript is the version protocol.

---

# Coding

## Variables & Constants

- **Cannot** have a number as first character. Ex: let 1one = value;
- **Cannot** contain spaces. Ex: let 1 one = value;
- They are Case Sensitive Ex: one ≠ One;
- It is recommended to use **Case diff** to separate words Ex: let pageOne = value.

```jsx
let [varName] = [value] //Simple variable
const [constName] = [value] //Simple constant
```

---

## Primitive Types

- Can be changed dynamically

```jsx
let test = 'some string' //String literal
let number = 10.5 //Number literal
let isValid = true //Boolean
let bgColor = null //Null
let count //undefined

```

---

## Basic Arithmetic Operations

```jsx
+, -, *, % //Base plus, minus, multiply and divide operation
[num] ** [num] //Power
[num]++, -- //Add or Remove int 1 from value
```

---

## If & Else | Switch Case Operators

```jsx
if [condition] {
	//Do something if operation returns boolean True
}
else if [condition2] {
	//Do another thing if operation2 returns boolean True
}
...
else {
 //Do something if no other operation has returned True
}

switch ([var]) {
case [condition1]:
	//Do something
case [condition2:
	//Do something else
default:
	//If anything else passed
}
```

---

# HTML + JS

## <script> Tag

- Script tag must be placed in the end of the Body tag;
- We can define the `src` attribute to link to an external JavaScript file.

```html
<html>
	<head>
	</head>
	<body>
		<!-- Body Content ->
	<script src="script.js">
		<!-- JavaScript Content ->
	</script>
	</body>
</html>
```