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