<details>
<summary>Basics & Types</summary>

# Summary

Python is a **programming language** that uses of a more simple syntax to compose its code. It is a very popular language, especially when it comes to **Data Science**. This is due to some of its libraries, that support data manipulation in the popular JSON and CSV formats.

# REPL (Terminal)

*Read-Eval-Print Loop*

This is the terminal that opens up when you type `python3` in your *bash* ****or *cmd.* It is the default python3 terminal, and it is basically a sandbox place where you can test python commands and their outputs.

# Simple Coding

### Assign value to variable

```python
# VAR
counter = 0
counter += 1
a,b = 'c', 'd' # a = 'c', b = 'd'
a,b = 'cd' # a = 'c', b = 'd'

# SET
head, *tail = (1, 2, 3)
# head = 1
# tail = [2, 3]
```

### Math

```python
>>> 1+1
2
>>> 1-1
0
>>> 1*2
2
>>> 1/1
1
>>> 1//2
0 // Division without remainder
>>> 2**3
8 // Power
>>> f'{22/7:.2f} # PI
'3.14'
```

## JS vs Python

- **Python = `and` `or`;**
- **JS = `&&` `||`;**

### Array Validation

```python
//JS
const a = [1, 2, 3]
const b = [1, 2, 3]
a === b # false

// Python
...
a === b # true
```

### Check number value between

```python
//JS
const temp = 28;
if (temp > 20 && temp <=28) {
	console.log('Temps are great today!');
}

//Python
temp = 28
if 20 < temp <= 28:
	print('Temps are great today!')
```

### Check type of variable

```python
//JS
typeof('I am a string!') # string

// Python
type('I am a string!') # str
```

## Arrays | List | Tuples

```python
cars = ['McLaren Senna', 'BMW 440i', 'Toyota Corolla'] # Array

cars[0] // McLaren Senna
cars[-1] // Toyota Corolla

cars.append('Ford Focus')
cars.remove('BMW 440i')
cars.extend(['Ford Mustang', 'Toyota Yaris', 'Honda Fit']) # Append to original list
cars.index('Honda Fit') # 5 (last index)
cars.sort() # Sort alphabetically
```

### Tuples - Similar to array but cannot be modified during execution time

```python
user = ('Will', 'Smithy', 40)
```

### Set - Unordered array, no repeated values

```python
permissions = { 'member', 'group' }
permissions.add('root')
permissions.union({'user'}) # { 'member', 'group', 'root', 'user' }
permissions.intersection({'user', 'member'}) # { 'user', 'member' }
permissions.difference({'user'}) # { 'member', 'group', 'root' }
```

### Frozenset - Imutable Set (Only return operation, doesn’t apply)

### Dict - Dictionary

```python
people_by_id = { 1: 'Maria', 2: 'Fernanda' }
people_by_name = { 'Maria': 1, 'Fernanda': 2 }

people_by_id[2] # Fernanda
people_by_name['Maria'] # 1
```

## Embedded Functions

### range

```python
range(5) # 0, 1, 2, 3, 4
list(range(5)) # [0, 1, 2, 3, 4]
list(range(1, 5)) # [1, 2, 3, 4]
list(range(1, 10, 2)) # [1, 3, 5, 7, 9]
list(range(10, 0, -2)) # [10, 8, 6, 4, 2]
```

### len

```python
len('Adoleta') # 7
```

## Defs (Functions)

```python
def analyze(text):
	count_words = len(text.split(' '))
	char_counter = dict()
	for char in text:
		if char in char_counter:
			char_counter[char] += 1
		else
			char_counter[char] = 0
	return f'Words: {count_words}\nLetters: {char_counter}'

text_to_analyze= 'Why is testing the test the ultimate testing performance of whom test is supposed to be?'
print(analyze(text_to_analyze)) # Words: X (break line) Letters: Y
```

### “Rest” Parameters

```python
def concat(*strings):
    final_string = ''
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ', '
    return final_string

concat('Carlos', 'Cristina')  # 'Carlos, Cristina'

concat('Carlos', 'Cristina', 'Maria')  # 'Carlos, Cristina, Maria'
```

## for..in

```python
restaurants = [
    {'name': 'Restaurant A', 'rating': 4.5},
    {'name': "Restaurant B", 'rating': 2.3},
]
filtered_restaurants = []
for restaurant in restaurants:
    if restaurant['rating'] > 3:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # [{"name": "Restaurant A", "rating": 4.5}]

# OR

filtered_restaurants = [restaurant['name']
                         for restaurant in restaurants
                         if restaurant['rating'] > min_rating]
# ['Restaurant']
```

## ~~map~~ enumerate

```python
languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(languages):
    print(f'{index} - {language}')

# 0 - Python \n 1 - Java \n 2 - JavaScript
```

## while (+ fibonacci)

```python
limit = 10
last, next = 0, 1
while last < limit
	print(last)
	last, next = next, last + next
```
</details>
<details>
<summary>Data Manipulation</summary>

# Requirements

Before we dive deep into data manipulation, it is mandatory that we understand some of the most powerful and popular python libraries available to date.

## Input / Output

```python
const message = input('Type in a message: ')
print(f'message is {message}')
```

### print

```python
--- SEPARATOR ---
print('Maria', 'Johnny', 'Mark') # Maria Johnny Mark
print('Maria', 'Johnny', 'Mark', sep=', ') # Maria, Johnny Mark
print('Maria', 'Johnny', 'Mark', sep='\n')
# Maria
# Johnny
# Mark

--- ERROR ---
import sys
print(f'System Error!', file = sys.stderr)
```

## Arguments

```python
#arg_printer.py
import sys

if __name__ == '__main__':
	for index, argument in enumerate(sys.argv):
		print(f'Argument {index}: ${argument}')
```

```bash
python3 arg_printer.py 2 4 'test'
# Argument 0: 2
# Argument 1: 4
# Argument 2: 'test'
```

## Virtual Environment

[venv](https://docs.python.org/3/library/venv.html) is the library that we use to create “virtual environments” to run multiple versions of the same project. This can happen for multiple reasons, one being the dependencies of the project in a library that is outdated, and a new feature needs a new version of the same library.

To **test the new version of the project**, we create a **virtual environment** and leave the old one as a **backup**.

 

```bash
python3 -m venv .venv # Create a new environment called .venv | "." is used to hide the folder
source .venv/bin/activate # Activate the environment directory as the current working directory
```

## File Manipulation

```python
file = open('file.txt', mode='w') # w = write | r = read

file.write('This is the text to be saved!\n') # Create file and write this line
file.write('Second line text') # Write this as second line
file.close() # Remove from memory

file = open('file.txt', mode='r')
content = file.read() # Save both lines in content variable
# ['This is the text to be saved!\n', 'Second line text']
```

### Close In Context

If we open a file inside a contained context using the `with` keyword, this file will be automatically closed after the context execution.

```python
with open('file.txt', mode='w') as file:
	file.write('Something')

file.closed # True
```

## Try..except

```python
try:
	number = '1' / 0
except ZeroDivisionError:
	print('Cannot divide by zero!')
except TypeError:
	print('Cannot use string as a value')

--- FILE ---
try:
	file = open('file.txt', 'r')
except OSError:
	print('File not found')
else:
	# File opened successfully
```

## JSON

Convert `JSON` object into a python compatible `dict`

```python
import json

with open('mail_list.json') as mail_list:
	mail_dict = json.load(mail_list) # mail_dict is now a python dictionary, just like an object
```

Convert a `dict` into a `JSON`

```python
randomArr = [1: 'I', 3: 'random', 2: 'am']
with open('random.json', mode='w') as file:
	content = json.dumps(randomArr)
	file.write(content)
	# --- OR ---
	json.dump(randomArr, file)
```

- .load() - Load content from file
- .loads() - Load content from variable w/ JSON
- .dump() - Save content in file
- .dumps() - Save content in a variable

## CSV

Convert `CSV` object into a python compatible `dict`

```python
import csv

with open('mail_list.csv') as mail_list:
	mail_dict_with_header = csv.reader(mail_list)
	
	header, *mail_dict = csv.reader(mail_list) # First we need to separate the header
	print(mail_dict) # This will return a proper dictionary, with all the values
```

Convert a `dict` into a `CSV`

```python
with open('department_report.csv', mode='w') as file:
    writer = csv.writer(file)

    headers = ['Address', 'Name']
    writer.writerow(headers)

    for address, name in mail_dict.items():
        row = [address, name]
        writer.writerow(row)
```
</details>
<details>
<summary>Testing</summary>

In Python, one of the most popular ~~libraries~~ **frameworks** is `pytest`, and it is the one used here to do integration tests.

```bash
sudo apt install python3-pip # Linux
python3 -m pip install pytest # pytest local installation
```

## Testing a simple function

For the framework to work properly, we need to append a prefix ‘`test_`’ to the **file and def name**

```python
# code.py
def is_odd(number):
	'''Return True if number is odd, else returns False'''
	return number % 2 != 0

# **test_**code.py
from code import is_odd

def **test_**is_odd_when_number_is_odd_returns_true():
    assert is_odd(3) is True

def **test_**is_odd_when_number_is_even_returns_false():
    assert is_odd(2) is False
```

If a test has gone wrong, it will throw an `AssertionError`. To run the tests, execute:

```bash
python3 -m pytest
```

## Testing an error

This next section will test if a block execution raises an error, the error type and the text content.

```python
#code.py
def divide(a, b):
	'''Return the division between number a and b'''
	return a / b

#test_code.py
import pytest
from code import divide

def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)
```

## Fixture

Fixture is a way to provide context in a python test. This context is provided to the function being tested as a parameter.

```python
@pytest.fixture # [Decorator](https://docs.python.org/pt-br/3/glossary.html#term-decorator)
def mails():
	return [
		{ 'name': 'Alex', 'address': 'Dummy Street, 85' },
		{ 'name': 'Cristina', 'address': '' },
	]

def test_get_list_of_names_in_mail_list(mails):
	assert get_list_of_names_in_mail_list(mails) == ['Alex', 'Cristina']
```

The example above is a very simple implementation, but the resource can be used as a **database connection implementation**, or pretty much anything else!
</details>