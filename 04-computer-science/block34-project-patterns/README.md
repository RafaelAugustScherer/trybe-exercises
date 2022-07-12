# Block 34 - Project Patterns

<details>
<summary>OOP in Python</summary>
`class` is the representation of an object in Python. To create an object and even assign some values to it, take a look at the piece of code below:

```python
class Car:
	def __init__(self, brand, name, color):
		self.__brand = brand
		self.__name = name
		self.__color = color
		self.__speed = 0
```

The class above represents a Car. The `def __init__` is called whenever a new instance is created. The first parameter is the object itself in the memory (`this` in JS) and the rest of the parameters are given when the instance is created.

Below is a line that creates an instance of this class:

```python
golf = Car('Volkswagen', 'Golf', 'Blue')
```

### Named Arguments (/, *)

A quick parentheses in the explanation for something that might be useful:

```python
def start_rocket(pilot, **/**, destination): # Pilot cannot be named
	print(f'Rocket starting up.{pilot}, you are now officially in control of the mission. Take us to {destination}')

start_rocket('Jeff', destination='The Moon') # OK
start_rocket(pilot='Jeff', destination='Mars') # TypeError

class Rocket:
	def __init__(self, company, name, *****, materials, options): # Materials and options need to be named
		self.__name = name
		[...]

falconNine = Rocket('SpaceX', 'Falcon 9', materials=['Rubber', 'Aluminium'], options=[]) # OK
falconNine = Rocket('StarShip', 'Falcon 9', ['Rubber', 'Aluminium'], []) # TypeError
```

## Access Object Properties

To make a property available in the outer scope, we need to create a `def` for it:

```python
class Car:
	def __init__(self, brand, name, color):
		self.__brand = brand
		self.__name = name
		self.__color = color

	def brand(self):
		return self.__brand

golf = Car('Volkswagen', 'Golf', 'Blue')
golf.brand() # 'Volkswagen'
```

Or we can also use the default `def __str__` that is called whenever the object itself is printed:

```python
class Car:
	[...]
	def __str__(self):
		return f'''
			- Brand: {self.__brand}
			- Name: {self.__name}
			- Color: {self.__color}
		'''
golf = Car('Volkswagen', 'Golf', 'Blue')
print(golf) # Print anything that is returned in **__str__**
```

## Heritage

We can use heritage to create subclasses that will have the parent properties, but also customized properties:

```python
class Automobile:
	# Automobile implementation

class Car(Automobile):
	# Car Implementation
	def __init__(self, brand, name, color):
		super().__init__() # Automobile()

class Motorcycle(Automobile):
	# Motorcycle implementation
	def __init__(self, brand, name, color):
		super().__init__()
```
</details>
<details>
<summary>Design Patterns</summary>
According to the official book released in 1994, design patterns are divided in three categories:

- **Creational** - Factory, Abstract Factory, Builder, Prototype and Singleton
- **Structural** - Adapter, Bridge, Composite, Decorator, Facade, Flyweight and Proxy
- **Behavioral** - Chain of Responsibility, Command, Iterator, Mediator, Memento, Observer, State, Strategy, Template Method and Visitor

<aside>
👉 You can find more info about them [here!](https://refactoring.guru/design-patterns)

</aside>

There are more patterns created and used by many companies and may not be listed here. Those were probably created after the book was released.

---

## Iterator

Let us dive into one of the Behavioral patterns using Python. The Iterator is used to define an iteration pattern over an object. The code below creates a `DatabaseIterator` class that is responsible to return paginated user lists.

### Code

```python
from collections.abc import Iterable, Iterator

db = [
	{"name": "Morgana", "age": "22"},
  {"name": "Sarah", "age": "24"},
  {"name": "Will", "age": "33"},
  {"name": "Rick", "age": "23"},
  {"name": "John", "age": "22"},
  {"name": "Peter", "age": "35"},
  {"name": "Groove", "age": "48"},
  {"name": "Sam", "age": "19"},
];

class DatabaseIterator(Iterator):
    def __init__(self, db):
        self.db = db
        self.query = query
        self.current_page = 1

    def get_page(self, page):
				per_page = 3
				first = (self.current_page * per_page) - per_page
				last = self.current_page * per_page
        return self.db[first:last]

    **def __next__(self):
        data = self.get_page(page=self.current_page)

        if not data:
            raise StopIteration()

        self.current_page += 1
        return data**
```

The `__next__` is called whenever there is an iteration request over the object. Like in the example below:

```python
record_paginator = DatabaseIterable(db)

for page in record_paginator:
		# page = [{...}, {...}, {...}]
    for record in page:
				# record = { "name": "Morgana", "age": "22" }
        print(record["name"])
```

---

## Adapter

This is a structural pattern and it is exactly as the name suggests. It adapts a data brought by a third-party program to the internal project’s pattern. Check the adapter below, that converts **separated headers and data** to a `dict` object.

### Code

```python
# project/adapters.py
class ProgramLoaderAdapter:
	def __init__(self, loader):
        self.loader = loader

    def load_data(self):
        # zip(['nome', 'idade'], ['Juliana', 27])
        # {'nome': 'Juliana', 'idade': 27}
        return [zip(self.loader.headers, row) for row in self.loader.rows]

#project/index.py
from programExample import ReportLoader
from project.loaders import ProgramLoaderAdapter

program_loader = ReportLoader(...)
loader = ProgramLoaderAdapter(program_loader)

# Manipulate loader data
```

---

## Strategy

Another behavioral pattern that has a simple objective. Reduce responsibilities of classes and size of classes. Strategies are created when a different implementation of a method is needed and we don’t want to create an “if hell”. Check the example:

### Code

```python
from abc import ABC, abstractmethod

# Create Abstract Method
class BankStrategy(ABC):
    @classmethod
    @abstractmethod
    def debit(cls):
        raise NotImplementedError

class BankOneStrategy(BankStrategy):
    @classmethod
    def debit(cls, account, value):
        # Process BankOne debit transaction

class BankTwoStrategy(BankStrategy):
    @classmethod
    def debit(cls, account, value):
        # Process BankTwo debit transaction

class BankThreeStrategy(BankStrategy):
    @classmethod
    def debit(cls, account, value):
        # Process BankThree debit transaction

class Bank:
		def __init__(self, bank_strategy):
        self.__bank_strategy = bank_strategy

    def debit(self, account, value):
        self.__bank_strategy.debit(account, value)

Bank(BankOneStrategy).debit(120, 123)
Banco(BankTwoStrategy).debit(110, 456)
Banco(BankThreeStrategy).debit(120, 789)
```

---

## Decorator

Decorator is another pattern for creating new implementations of an object that does not override the original one, in fact it might as well use the original object to do the operations. Check this `Calculator` and `DecoratedCalculator` example:

### Code

```python
# This is a simple calculator with sum function
class Calculator:
	def sum(self, x, y):
		return x + y

# Now if we want to convert text numbers to actual numbers to do the operation,
# we can create a new calculator
class DecoratedCalculator:
	def __init__(self, calculator):
		self.calculator = calculator

	def convertNumber(self, number):
		if not isinstance(number, str):
			return number
		return {
			'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
			'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
		}.get(number)

	def sum(self, x, y):
		return self.calculator.sum(
			self.convertNumber(x), self.convertNumber(y)
		)

calculator = Calculator()
calculator.sum(1, 4) # 5

decoratedCalculator = DecoratedCalculator(calculator)
decoratedCalculator.sum('one', 'four') # 5
```

---

## Observer

This is a behavioral pattern that removes the responsibility of an object to update the entire application whenever it updates itself.

**Example: I post something on social media, and that post generates notifications to all of my friends.**

The **Profile** object that was changed when I posted shouldn’t know how to send a notification to another person’s profile. It should do something like this in the flow:

```python
notificationSystem.notifyAll()
```

Then, `notificationSystem`, as the observer, implements the logic of notifying people.
**OR** in a **React App** for example, whenever we change a state method, the entire page is updated. When we are using **React Redux**, it is also implemented as an Observer by default.

## Factory

This is a creational pattern also made to reduce object responsibility. The main goal here is to create “different lines of production” for “different products”. Using a Car Factory as an example, different vehicles require different pieces and processes. 

### Code

First step is to create the pieces that are going to be used by the production lines:

```python
Turbo = { type: 'Gas' }
Engine01 = { type: 'Gas', 'capacity': 1.4 }
Engine02 = { type: 'Diesel', 'capacity': 2.0 }
```

Now we need to create an Interface of what a **Creator** will look like:

```python
from abc import ABC
class ProductionLine(ABC):
		def __init__(self):
			self.piecesUsed = []

		def usePiece(self, piece):
			self.piecesUsed.append(piece)

		def fabricate(self):
			raise NotImplementedError
```

Next we create a **Concrete Creator**:

```python
class MareaProductionLine(ProductionLine):
	def fabricate(self):
		self.usePiece(Engine01)
		self.usePiece(Turbo)

class RenegadeProductionLine(ProductionLine):
	def fabricate(self):
		self.usePiece(Engine02)
```

The concept here is to **avoid using conditionals** and assign all responsibility to one **ProductionLine** only. The advantages are more reliability and a fragmented code so the development team can separate the tasks better without interpolating one another’s code.

### Factory_boy (?)

[Docs!](https://factoryboy.readthedocs.io/en/stable/)

```bash
pip install factory_boy
```

```python
# user.py
class User:
	def __init__(self, name, email, password):
		self.name = name
		self.email = email
		self.password = password

# user_factory.py
from model.user import User
import factory

factory.Faker._DEFAULT_LOCALE = 'pt_BR'

# Creates a random user (mock)
class UserFactory(factory.Factory):
	class Meta:
		model = User

	name = factory.Faker('name')
	email = factory.Faker('email')
	password = factory.Faker('word') # Random word, not necessarly a password
```
</details>