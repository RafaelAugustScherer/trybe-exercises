# JavaScript's History

---

- Presented in 1995 as **Mocha** language by Brendan Eich;
- Renamed to **LiveScript** and released in the Netscape 2.0 Beta release;
- Renamed to **JavaScript** because of Java's Hype;
- Re-released by Microsoft in the Internet Explorer as **JScript**;
- In 1997 it was padronized by ECMA international as **ECMAScript**;
- 1997: **ES1**; 1998: **ES2**; 1999: **ES3**; 2009: **ES5**; 2015: **ES6**.

So JavaScript is the Official language name, and ECMAScript is the version protocol.

---

# Coding in JS

---

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

## Arrays & For Loops

- Array positioning starts from 0. Ex: **0 = 1st** element; **1 = 2nd** element; etc..
- **For:** Declare **index** value; Define the **condition** to execute; **Increment** index value.
- Why **idx += 1** and **not idx++**? idx++ works but it also returns a value, which means more processing and therefore more time required.

```jsx
/* Array */
let array = [[val], [val2], ...] //Contain multiple elements in one variable
array[2] //Return element in specific position
let array2 = [...array] //Create copy of array

array[2] = [value] //Store element in specific position
array.push([value]) //Store element after the last position
array.unshift([value]) //Store element before the first position, as the zero element

array.pop() //Remove last element
array.shift() //Remove first element

array.length //Return the number of elements stored
array.sort //Return ordered array (snapshot, does not override)
array.indexOf([element]) //Return position where element is stored

/* For */
for (let index = 0; index < array.length; index += 1) {
	//The code inside here is going to be executed until the mid condition above is fullfilled
	//index starts as 0 and goes up to array.length - 1 in this case.

	console.log(array[index] //Return each element stored in array
}

for (element of array) {
	//Iterates over every element of an array
}

for (letter of word) {
	//Iterates over every character in a string
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

---

# Programming Logic

---

## Logic

The computer is dumb. It just understands zeros (0) and ones (1). It **does not understand any logic concept** when we are talking about raw code ~~not considering neural network stuff.~~

So, for a **masterpiece** of code to work properly, it **must** contain every single instruction detailed. The computer will only understand what is a certain word meaning if it is properly **declared**.

---

## Sequence

OK, now that we've got that out of the way we can talk about sequence! Before you start `coding` is almost mandatory that you do some kind of **mental map** (a list) of what the code will do, and if needed, write that down so you don't forget.

Ex:

- [x]  Get the salary;
- [x]  Calculate X tax;
- [ ]  Reduce salary value based on X tax;
- [ ]  Calculate Y tax on the reduced salary;
- [ ]  Reduce salary value based on Y tax;
- [ ]  Print salary value.

---

## Baby Steps

Eaaasy go. It is essencially the application of the **Sequence** method but in a more detailed step-by-step list. Ex:

- [x]  Input user for salary and store it in a variable;
- [x]  Create if condition for salary
    - [x]  If salary is not a number;
        - [x]  Print error message and finish code;
- [x]  Create if condition for the X tax
    - [ ]  Case salary is above condition;
        - [ ]  Reduce salary based on condition and store in salary variable;
    - [ ]  Case salary is below condition;
        - [ ]  Reduce salary based on condition and store in salary variable;
- [ ]  Store Y tax in a variable;
- [ ]  Reduce salary value based on Y tax and store in salary variable;
- [ ]  Print salary value and finish code.