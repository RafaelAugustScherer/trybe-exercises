import { LOGIN } from '../reducer/loginReducer';
import { REG_CLIENT } from '../reducer/clientReducer';
import { REM_CLIENT } from '../reducer/clientReducer';

export const login = (user, password) => ({
  type: LOGIN,
  user,
  password
})

export const regClient = (name, age, email) => ({
  type: REG_CLIENT,
  name,
  age,
  email,
})

export const remClient = (index) => ({
  type: REM_CLIENT,
  index,
})