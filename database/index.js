import { Pool } from 'pg';
import dotenv from 'dotenv';
import queryUser from './queries/user';

dotenv.config();

// eslint-disable-next-line import/no-mutable-exports
let pool;

if (process.env.NODE_ENV === 'development') {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
} else {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
}
pool.on('connect', () => {
  console.log('connected to the db');
});

const createTableUser = async () => {
  const queryUserText = queryUser.createUserTable;
  await pool.query(queryUserText)
    .then(() => {
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

const createTables = async () => {
  await createTableUser();
  console.log('user table has been create');
};

export { createTables, pool };
export default {
  query: (text, params) => pool.query(text, params),
};
