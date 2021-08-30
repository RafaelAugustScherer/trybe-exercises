# 7.2. Object.Methods

- [objName].[key];
- Object.keys([objName]);
- Object.values([objName]);
- Object.entries([objName]);
- Object.assign([objName]).

# [objName].[key]

Method that returns one specific key of an object as **string**. Can be used to **assign** values as well.

```jsx
const JDoe = {
  name: 'John',
};
const foo = JDoe.name;
JDoe.lastName = 'Doe';
```

# Object.keys()

Method that returns every `key` in an object as **array**. Can be used as an **iterator**.

```jsx
const keys = Object.keys([objName]);

keys.forEach((key) => {
  // Do something with each key
});
```

# Object.values()

Method that returns every `value` in an object as **array**. Used similarly to Object.keys()

```jsx
const values = Object.values([objName]);

values.forEach((value) => {
  // Do something with each value
});
```

# Object.entries()

Method that returns every `key & value` in an object as array.

```jsx
const entries = Object.entries([objName]);

entries.forEach((entry) => {
  // Do something with each entry
  // entry[0] = key
  // entry[1] = value
});
```

# Object.assign()

Assign **one or more** objects into one **destination** object.

```jsx
Object.assign([destObj], [copyObj1], [copyObj2], ...)
```

# Complementary Methods

## Object.keys([objName]).includes([string])

Check if the the Object Keys **contains** a specified string.
