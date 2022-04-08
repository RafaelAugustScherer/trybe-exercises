# OOP - Class, Getters & Setters

## Concept

- **Encapsulation** - Information should be contained in an Object (Class) and only selected information should be exposed.
- **Abstraction** - Objects do not reveal unecessary information, so whenever you are using an instance of the Object, you don’t need to worry about the internals.
- **Inheritance** - Classes can be extended to subclasses. Subclasses will use the same Superclass methods but will also add some new operations.
- **Polymorphism** - Subclasses have the ability to edit methods from Superclasses

## Private vs Public

`private` -  Cannot be directly assigned or read outside of the class, only if there is a `get` / `set` specified;

`public` - Can be directly assigned, even outside of the class.

```tsx
class Test {
	public pubVar: string;
	private priVar: string;
	
	constructor(pubVar: string, priVar: string) {
		this.pubVar = pubVar;
		this.priVar = priVar;
	}
}

const test = new Test('Johnny', 'Test');

test.pubVar // Johnny
test.pubVar = 'Ray' // OK
test.priVar // undefined
test.priVar = 'tseT' // Error ts (2341)
```

<details>
<summary>Example of Email Class</summary>

```tsx
class Email {
  private _from: string;
  private _to: string;
  private _message: string;
  private _subject: string;

  constructor(from: string, to: string, subject: string, message: string) {
    this._from = from;
    this._to = to;
    this._message = message;
    this._subject = '';
    this._subject = subject;
  }

  set subject(newSubject: string) {
    if (newSubject.length <= 40) this._subject = newSubject;
  }

  get subject(): string {
    return this._subject;
  }

  get from(): string { return this._from; }

  get to(): string { return this._to; }

  get content(): string {
    return `
    From ${this._from} to ${this._to}
    ${this.subject}

    ${this._message}`;
  }
}
```
</details>

---

# Super and Subclasses

Subclasses are an **extension** of a Superclass.

## Protected vs Private

- `protected weight`: Access is allowed in a subclass;
- `private weight`: Access is not allowed in a subclass.

### Syntax

```tsx
class Animal {
  constructor(public birthDate: Date) { }

}

class Bird extends Animal {
  showBirthDate() {
    console.log(this.birthDate);
	}
}
```

### Adding new Properties

```tsx
class Animal {
  constructor(protected birthDate: Date) { }
}

class Bird extends Animal {
  constructor(public name: string) {
    super(new Date()); // super() is a reference to Animal()
  }
}
```

## Super

`super()` is an instance of the Superclass inside a Subclass. You can use it to access methods inside the Superclass. It is especially useful when manipulating `private` variables.

```tsx
class Person {
	constructor(public name: string, private items: string[]) {}

	public addItem(item: string) {
		items.push(item);
	}
}

class Officer extends Person {
	constructor(public name: string) {
		**super(name);**
		super.addItem('Donut');
		super.addItem('Pistol');
	}

	public addItem(item:string) {
		if (item === 'Donut') {
			console.log('Only one donut allowed!');
		}
		else {
			**super.addItem(item);**
		}
	}
}

const Joe = new Officer('Joe'); // Joe.items (unacessible) = ['Donut', 'Pistol']
```

## Interfaces & Classes

An Interface can be **implemented** as a contract of what should be publically available in a Class.

```tsx
interface Animal {
  name: string;
  age: number;

  getBirthDate(): Date;
}

// name, age and getBirthDage() should be available in a type Animal object
class Bird implements Animal {
  constructor(
    public name: string,
    private birthDate: Date) {}

  get age() {
    var timeDiff = Math.abs(Date.now() - new Date(this.birthDate).getTime());
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  getBirthDate() { return this.birthDate; }
}
```

<details>
<summary>Polimorphism</summary>
Polimorphism is an OOP pillar. It assumes that classes can be interpreted and used in multiple ways. To better understand this concept, check out the content below.

## Abstract Classes

Abstract classes are made to be a model for what the subclasses should be:

```tsx
abstract class Animal {
  constructor(public name: string) { }
  abstract move(): void
}

class Bird extends Animal {
  move() { console.log(`${this.name} is flying.`); }
}

class Mammal extends Animal {
  move() { console.log(`${this.name} is walking.`); }
}

const b = new Bird('Woody Woodpecker');
const m = new Mammal('Elephant');

// Parameter can be any of type Animal, including its subclasses
const myMove = (animal: Animal) => {
	animal.move();
}

myMove(b); // Woody Woodpecker is flying
myMove(m); // Elephant is walking
```

## Static

Static methods and variables **do not have a direct relationship with the instance**. It is **related to the Class as whol**e and all of the instances.

These are only accessible in the class (`Class.static`):

```tsx
class Employee {
  private static employeeCount = 0

  constructor(public name: string) {
    Employee.addEmployee();
  }

  private static addEmployee() {
    Employee.employeeCount += 1;
  }

  static get employees() {
    return Employee.employeeCount;
  }
}

console.log(Employee.employees); // 0
const e1 = new Employee('Ronald');
console.log(Employee.employees); // 1
```
</details>

<details>
<summary>SOLID</summary>

Good practices in software development!

## S - Single Responsibility Principle

Avoid doing many things in a single method or Class. This allows for reusability and easy understanding of what the code does afterwards.

> Just because you *can* doesn’t mean you *should*.
> 

## O - Open/Closed Principle

**Open to extensions, Closed to modifications**. The code should be SOLID and deliver exaclty what is expected. The methods and Classes should be universal and scalable. For that it is expected that there is no arbitrary variables.

### **Ex:**

We need to calculate how many students are approved in a school. Minimum approval grade in this school is 0.7 out of 1.0.

After the implementation, another school decided to use the service, but the minimum approval for this school is 0.8 out of 1.0.

### Wrong Way to do it

```tsx
if (school === ‘a’) {
	approved = grade >= 0.7
} else {
	approved = grade >= 0.8
}
```

### Right Way to do it

```tsx
approved = grade >= school.approvalGrade
```

## L - Liskov Substituition Principle

Submethods must keep the same signature as the Supermethod. Whenever a signature of a Class is required, all of the subclasses should be valid to occupy that position as well.

```tsx
class Person {
	constructor(public name: string, public age: number) {}
}

class Employee extends Person {
	constructor(name: string, age: number, public role: string) {
		super(name, age);
	}
}

// typeof Employee should always be accepeted in the function below
function getPersonName(person: Person) {
	return person.name;
}
```

## I - Interface Segregation Principle

Interfaces should not depend on unused methods. You can use this principle to separate things into more Classes or interfaces.

You can create a ReadOnly Class that will not use Write methods, and then extend the ReadOnly Class to the Normal Class.
This is especially useful when dealing with Database and Connection Classes.

## D - Dependency Inversion Principle

> High level entities shouldn’t depend on low level entities. Both should depend on abstractions
> 

The sentece above is mostly used in OOP. You can combine the power of **Interfaces** and **Implementations** to achieve that!

### Ex:

We want to connect Musicians to instruments. Each musician can play up to multiple instruments.

```tsx
// Contract
interface Instrument {
	name: string,
	play(): void
}

class Flute implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} is emitting melodies`);
  }
}

class Guitar implements Instrument {
  constructor(public name: string) { }

  public play(): void {
    console.log(`${this.name} is vibrating its cords`);
  }
}

class Musician {
  constructor(
    public name: string,
    public instrument: Instrument
  ) { }

  play() {
    this.instrument.play();
    console.log(
      `"${this.name}" is playing the instrument`
    );
  }
}
```

This way a Musician does not depend on any specific instrument, but in a ~~contract~~ abstraction that can be related to multiple instruments.
</details>