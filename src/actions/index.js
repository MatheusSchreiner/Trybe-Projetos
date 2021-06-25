export const LOGIN = 'LOGIN';
export const EXPENSE = 'EXPENSE';
export const DELETE = 'DELETE';

export const actionEnterLogin = (email, password) => ({
  type: LOGIN,
  payload: {
    email,
    password,
  },
});

export const actionExpenseSuccess = (payload) => ({
  type: EXPENSE,
  payload,
});

export const actionDelete = (payload) => ({
  type: DELETE,
  payload,
});

export const actionNewExpense = (payload) => async (dispatch) => {
  const result = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await result.json();

  dispatch(actionExpenseSuccess({ ...payload, exchangeRates: data }));
};
