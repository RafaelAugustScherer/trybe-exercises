# Block 24 - ORM & Authentication

# ORM

**Object-relational Mapping** is a programming technique used to make more readable the way we use database query statements in other languages different from SQL / NoSQL.

## Sequelize - ORM in JavaScript

`sequelize` is one of the most used libraries to work with ORM in JS. It supports the most used database types like PostgreSQL, MariaDB, MySQL, SQLite and Microsoft SQL Server.

When developing a project, we can follow one of two different patterns defined by *Martin Fowler:*

### Data Mapper

The *Entity Model* doesn’t interact with the database. It is only there so it can be used by Entity Mapper to make operations in the database (View and Model are separated)

### Active Record

The *Entity Model* interacts with the database. Every method is directly linked, they are all in the same file (View and Model are in the same file).

## Sequelize - Starting Up

```bash
npm init -y
npm i sequelize sequelize-cli mysql2
npx sequelize-cli init
```

This last command will create the following folders: /config, /migrations,  /models & /seeders.
<details>
<summary>ORM - Folders & Utilities</summary>

### Config - Creating database.

In config, there will be a file: `config.json`. There, in the `development` key, inform the necessary values for the connection with the db. In this case, something like this:

```json
{
  "development": {
    "username": "root",
    "password": "your_password",
    "database": "orm_example",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
	...
}
```

**OR**

```jsx
// config.json => config.js
require('dotenv').config();

module.exports = {
	development: {
		username: process.env.MYSQL_USER,
		password: process.env.MYSQL_PASSWORD,
		...
	}
}

// models/index.js:8
const config = require(__dirname + '/../config/config.js')[env];
```

Then in the terminal, run the following to **create the project database**:

```bash
npx sequelize db:create
```

### Model - Creating a table entity

To create a model, we can simply run:

```json
npx sequelize model:generate --name User --attributes fullName:string
```

`—-attributes` is optional, and can be defined later in the file created at **/models/user.js**

---

We can also create the file manually, with something like:

```jsx
// /models/user.js
'use strict';

const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
  });

  return User;
}

module.exports = User;
```

> Note that sequelize **will not keep track of the model you created manually.** It won’t automatically create any table associated with that model and will not “log” anything at **/migrations**
> 

### Migrations - Version Controlling

After running the model:generate, we will have a file called `XXXXX-create-user.js`, where XXXXX is the timestamp of the moment the code was ran.

Its content should be simillar to:

```jsx
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fullName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
```

`up()` - Function to apply the changes to the database;

`down()` - Function to rollback the changes.

---

To add a new field to the database (ALTER TABLE) we can create a new migration file:

```bash
npx sequelize migration:generate --name add-column-email-table-users
```

```jsx
// migrations/XXXXX-add-column-email-table-users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   await queryInterface.addColumn('Users', 'email', {
     type: Sequelize.STRING,
   });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Users', 'email');
  }
};
```

---

To apply all of the migrations so far, we can use:

```bash
npx sequelize db:migrate # Apply
npx sequelize db:migrate:undo # Undo changes
```

### Seeders - Feed the database

Seeders are used to INSERT data in the tables recently created by the migration process.

```bash
npx sequelize seed:generate --name users
```

```jsx
// seeders/XXXXX-users.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert('Users',
    [
      {
        fullName: 'Leonard',
        email: 'leo@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      {
        fullName: 'JEduard',
        email: 'edu@test.com',
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
        updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete('Users', null, {}),
};
```

```bash
npx sequelize db:seed:all
npx sequelize db:seed:undo:all
```
</details>

<details>
<summary>ORM - Common Model Operations</summary>

Commonly used operations with the models created by sequelize

```jsx
const { User } = require('../models') // Models folder generated by sequelize
```

### Get

```jsx
const users =  await User.findAll(); // getAll route
const userById = await User.findByPk(1); // getById route
const userByFilter = await User.findOne({ where: { fullName, email } });
```

### Post

```jsx
const newUser = await User.create({ fullName, email });
```

### Put

```jsx
const [updateUser] = await User.update({ email }, { where: { id } });
if (!updateUser) {
 // user with id was not found
}
```

### Delete

```jsx
const deleteUser = await User.destroy({ where: { id } });
```
</details>

<details>
<summary>ORM - Associations (JOIN)</summary>

## Creating Relationships

Taking as example: **Addresses Table** has a Foreign Key `employee_id` related to **Employees Table (1:1).**

### Migration

```jsx
// migrations/XXXXX-create-addresses.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      [ ...otherFields ],
      **employeeId: { // Foreign Key
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE', // Obligatory
        onDelete: 'CASCADE', // Obligatory
        field: 'employee_id', // Actual name in table
        references: {
          model: 'Employees', // Where it comes from
          key: 'id', // What field is referencing
        },
      },**
    });
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('Addresses');
  },
};
```

### Model

```jsx
// models/Employee.js
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    [ ...otherFields ]
  },
  {
    timestamps: false, // No need to use createdAt or updatedAt
    tableName: 'Employees',
    underscored: true,
  });

	// Associate FK **employee_id** with Addresses table
  Employee.associate = (models) => {
    Employee.hasOne(models.Address,
      { foreignKey: **'employee_id'**, as: **'addresses'** }); // addresses in lowercase
  };

  return Employee;
};

// models/Address.js
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    [ ...otherFields ]
    employeeId: { type: DataTypes.INTEGER, foreignKey: true }, // optional declaration
  },
  {
    timestamps: false,
    tableName: 'Addresses',
    underscored: true,
  });

	// Associate employee_id from Employees with this table's primary key
  Address.associate = (models) => {
    Address.belongsTo(models.Employee,
      { foreignKey: 'employee_id', as: 'employees' });
  };

  return Address;
};
```

## 1:N Relationships

In the case of **each employee having many addresses**, we can simply change in the Model:

```jsx
// models/Employee.js

module.exports = (sequelize, DataTypes) => {
	[...]

  Employee.associate = (models) => {
    Employee.hasMany(models.Address,
      { foreignKey: 'employee_id', as: 'addresses' });
  };
}
```

## Filter Association Information

You can use the Association to retrieve information from the related table. See some examples:

### Eager Loading

Uses one call to get all data needed

```jsx
const { Employee, Address } = require('../models');

// Return every information in Address where employee_id = 1
const employee = await Employee.findOne({
	where: { id: 1 },
	**include: [{ model: Address, as: 'addresses' }]**
});
// { id: 1, ...employeeFields, addresses: { ...addressFields } }

// Filter data returned from the association table
const employee = await Employee.findOne({
	where: { id: 1 },
	**include: [{ model: Address, as: 'addresses', attributes: { exclude: ['number'] } }]**
});

```

### Lazy Loading

Uses more than one call to get the data. Useful for **multi-purpose requests.**

```jsx
const { Employee, Address } = require('../models');

const employee = await Employee.findOne({ where: { id: 1 } });
// { id: 1, ...employeeFields }

// Will provide related table data if requested
if(req.query.includeAddresses) {
	// const addresses = await employee.getAddresses();
	const addresses = await Address.findAll({ where: { employeeId: id } });

	// return res.status(200).json({ employee, addresses });
}

// return res.status(200).json({ employee });
```

## N:N Relationships

In this case, we will be using an intermediate table, to make this association work. There is going to be:

- User - `book_id` related to Book `id`
- Book - `user_id` related to User `id`
- UserBook - `user_id` related to User `id`, `book_id` related to Book `id`

---

No `Associations` are needed in models/Book.js or models/User.js. Everything is going to be done to `UserBook.js`:

### N:N Relationship Code

```jsx
// models/UserBook.js
module.exports = (sequelize, _DataTypes) => {
  const UserBook = sequelize.define('UserBook',
    {},
    { timestamps: false },
  );

  UserBook.associate = (models) => {
		// Define every user_id related to one book_id
    models.Book.belongsToMany(models.User, {
      as: 'users',
      through: UserBook,
      foreignKey: 'book_id',
      otherKey: 'user_id',
    });
		// Define every book_id related to one user_id
    models.User.belongsToMany(models.Book, {
      as: 'books',
      through: UserBook,
      foreignKey: 'user_id',
      otherKey: 'book_id',
    });
  };

  return UserBook;
};

//migrations/XXXXX-create-user-books.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('UserBooks', {
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'user_id', // PK needs to be instantiated as **userId in migrations/create-users**
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      bookId: {
        type: Sequelize.INTEGER,
        field: 'book_id',
        references: {
          model: 'Books',
          key: 'book_id', // PK needs to be instantiated as **bookId in migrations/create-books**
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('UserBooks');
  },
};

//seeders/XXXXX-user-books
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkInsert('UserBooks',
      [
        { user_id: 1, book_id: 1 },
        { user_id: 1, book_id: 3 },
        { user_id: 2, book_id: 1 },
        { user_id: 2, book_id: 2 },
        { user_id: 3, book_id: 1 },
        { user_id: 3, book_id: 2 },
        { user_id: 3, book_id: 3 },
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('UserBooks', null, {});
  },
};
```

**Now to find the User and its books, we can do:**

```jsx
const user = await User.findOne({
	where: { userId: id },
	include: [{ model: Book, as: 'books', /* through: { attributes: [] } */ }],
});
```
</details>

<details>
<summary>ORM - Transactions</summary>

## Summary

Whenever we want to do more than one operation and rollback in case of failure in one of them, we are going to use Transactions! Example:

Transfer money from User A to User B. Operations:

- Remove Money from User A account;
- Add Money to User B account;

**If the first operation succeeds and the second fails, we will have removed money from User A and not added any money to User B. And that is not the expected behaviour!!!**

## Using Transactions

```jsx
const Sequelize = require('sequelize');

const config = require('./config/config'); // Need to be a .js file
const sequelize = new Sequelize(config.development);

app.put('/user/transaction', () => {
  const { idRemove, idAdd, value } = req.body;
  const userRemove = User.findOne({ where: { id: idRemove } });
  const userAdd = User.findOne({ where: { id: idAdd } });

	if (!userRemove || !userAdd) {
		return res.status(400).json({ message: 'User with provided id not found' });
	}

  await sequelize.transaction(async (t) => {
    try {
      await User.update(
				{ money: userRemove.money - value },
				{ where: { id: idRemove } },
				{ transaction: t }
			);
      await User.update(
				{ money: userAdd.money + value },
				{ where: { id: idRemove } },
				{ transaction: t }
			);

      return res.status(200).end();
    } catch (e) {
      res.status(500).end();
    }
  });
});
```
</details>

# JWT - JSON Web Token

JWT is a token generated with the **HMAC** algorithm by codifying some information.

The token generation is based in **personal user information and a secret** known just by the server.

## Into the code

```jsx
const jwt = require('jsonwebtoken'); // npm i jsonwebtoken

const secret = 'MySuperExtremelyComplexSecret';

const user = { username: 'John Doe', password: 'ጋዐዘክሃሃ ዕዐቿ' }

const jwtConfig = {
	expiresIn: '1d', // Limit token validation to 1 day
	algorithm: 'HS256' // SHA-1, SHA-256, MD-5
};

const token = jwt.sign({ data: user }, secret, jwtConfig);
// token: 
```