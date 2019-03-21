/* eslint-disable no-unused-vars */
/* eslint-disable no-tabs */
/* eslint-disable keyword-spacing */
import Auth from '../helpers/auth';
import Pool from '../database/index';

class User {
  // creating the user
  async createUser(data) {
    const password = Auth.passwordHash(data.password);
    this.newUser = [
      data.email,
      data.firstname,
      data.lastname,
      data.password,
    ];

    try {
      const user = await Pool.query(` INSERT INTO 
				users(
					"email",
					"firstname",
					"lastname",
					"password"
				) VALUES($1, $2, $3, $4 )
				returning *`,
      this.newUser);
      return user.rows[0];
    }catch (err) {
      console.log(err);
      return false;
    }
  }
}

export default new User();
