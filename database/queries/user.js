const createUserTable = `CREATE TABLE IF NOT EXISTS
	users(
		id SERIAL PRIMARY KEY,
		email VARCHAR(255) NOT NULL UNIQUE,
		firstName VARCHAR(255) NOT NULL,
		lastName VARCHAR(255) NOT NULL,
		password VARCHAR(255)
	)`;

	const dropTableUsers = 'DROP TABLE IF EXISTS users';

	export default {
		createUserTable,
		dropTableUsers,
	};