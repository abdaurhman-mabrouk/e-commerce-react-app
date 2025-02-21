import { users } from '../data/users';

export const loginService = ({ userName, password }) => {
  for (let user of users) {
    if (userName === user.userName && password === user.password) {
      return { success: true, message: 'User Found in The DataBase' };
    }
  }
  return { success: false, message: 'User Not Found!' };
};
