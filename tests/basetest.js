/* eslint-disable no-unused-vars */
import chai from 'chai';
import chaiHttp from 'chai-http';
import { createTables, pool } from '../database';

const should = chai.should();
const expect = chai.expect();
chai.use(chaiHttp);

const getToken = () => {
  let token;
  const user = {
    email: 'musaza@gmail.com',
    firstname: 'munaca',
    lastname: 'clintonss',
    password: 'hello',
  };
  return chai.request('http://localhost:3000')
    .post('/api/v1/auth/signup')
    .send(user);
};

export default getToken;
