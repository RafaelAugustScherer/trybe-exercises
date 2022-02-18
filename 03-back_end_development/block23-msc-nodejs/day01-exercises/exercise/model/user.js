const connection = require('./connection');

const serialize = ({ id, email, ...user }) => ({
	id,
	firstName: user.first_name,
	lastName: user.last_name,
	email
});

const unserialize = ({ email, ...user }) => ({
	first_name: user.firstName,
	last_name: user.lastName,
	email
})

const getAll = async () => {
	const [users] = await connection.execute(
	  'SELECT id, first_name, last_name, email FROM model_example.users;',
  );
	if (!users.length) return [];
  return users.map(serialize);
};

const getById = async (id) => {
	const query = 'SELECT id, first_name, last_name, email FROM model_example.users WHERE id = ?;';
	const [user] = await connection.execute(query, [id]);
	
	if (!user.length) return null;
	return user.map(serialize)[0];
}

const create = async (newUser) => {
	const { firstName, lastName, email, password } = newUser;
	const [user] = await connection.execute(
		`INSERT INTO model_example.users (first_name, last_name, email, password)
		VALUES (?, ?, ?, ?)`,
		[firstName, lastName, email, password],
	);
	const { insertId } = user;
	return { id: insertId, firstName, lastName, email };
}

const update = async (fields, id) => {
	fields = unserialize(fields);
	const fieldsString = Object.entries(fields)
		.reduce((acc, [key, value]) => {
			if (!value) return acc;
			return acc + `${key} = "${value}" `;
		}, '');
	
	const query = `UPDATE model_example.users SET ${fieldsString} WHERE id = ?`;

	await connection.execute(
		query,
		[id]
	);

	return true;
}
 
const validate = (fields) => {
	const mandatoryFields = ['firstName', 'lastName', 'email', 'password'];

	for (const field of mandatoryFields) {
		if (!fields[field] || typeof fields[field] !== 'string') {
			return [false, `O campo ${field} é obrigatório`];
		}
	}
	if (fields.password.length < 6) {
		return [false, "O campo 'password' deve ter pelo menos 6 caracteres"];
	}
	
	return [true];
};

module.exports = {
	getAll,
	getById,
	create,
	validate,
	update
};