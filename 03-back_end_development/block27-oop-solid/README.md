# Block 27 - OOP & SOLID

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

## Example of Email Class

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