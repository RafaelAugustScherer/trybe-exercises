export const LOGIN = 'LOGIN';

const INITIAL_STATE = {
  user: undefined,
}

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.user }
    default:
      return state;
  }
}