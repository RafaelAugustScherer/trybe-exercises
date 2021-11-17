const INITIAL_STATE = {
  curriculum: '',
  job: '',
  jobDescription: '',
};

const professionalFormReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case 'CHANGE_FIELD_PROFESSIONAL':
    return { ...state, [action.field]: action.value };
  default:
    return state;
  }
};

export default professionalFormReducer;
