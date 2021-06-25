import { DELETE, EXPENSE } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case DELETE: {
    return {
      ...state,
      expenses: state.expenses.filter((elem, index) => index !== action.payload.index),
    };
  }
  default:
    return state;
  }
}

export default walletReducer;
