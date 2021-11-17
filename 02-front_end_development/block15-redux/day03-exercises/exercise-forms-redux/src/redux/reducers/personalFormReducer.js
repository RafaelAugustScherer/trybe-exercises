const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  state: 'Rio de Janeiro',
};

const personalFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_FIELD_PERSONAL':
    return { ...state, [action.field]: action.value };
  default:
    return state;
  }
};

export default personalFormReducer;
