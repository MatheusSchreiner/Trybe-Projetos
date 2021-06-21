export const LOGIN = 'LOGIN';

export const enterLogin = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});
