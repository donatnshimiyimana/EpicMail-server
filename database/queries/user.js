/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-tabs */
const createUserTable = `CREATE TABLE IF NOT EXISTS
	users(
		id SERIAL PRIMARY KEY,
		email VARCHAR(255) NOT NULL UNIQUE,
		firstName VARCHAR(255) NOT NULL,
		lastName VARCHAR(255) NOT NULL,
		password VARCHAR(255)
	)`;

	const insertUser = `INSERT INTO users(
  id,
  email,
  firstName,
  lastName,
  password,
) VALUES ($1, $2, $3, $4, $5,) ON CONFLICT DO NOTHING returning *`;

	const dropTableUsers = 'DROP TABLE IF EXISTS users';

	export default {
		createUserTable,
		insertUser,
		dropTableUsers,
	};