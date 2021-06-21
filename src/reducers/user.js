import LOGIN from '../actions';

const INITIAL_STATE = {
  email: '',
  password: '',
};

function reducerUser(state = INITIAL_STATE, { payload: { email, password } }) {
  switch (action.type) {
  case LOGIN:
    return {
      ...state,
      email,
      password,
    };

  default:
    return state;
  }
}

export default reducerUser;
