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