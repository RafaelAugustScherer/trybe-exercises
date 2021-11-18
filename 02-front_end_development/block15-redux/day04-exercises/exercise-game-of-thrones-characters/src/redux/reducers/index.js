import { SAVE_DATA } from '../actions';
import { FAILED_REQUEST } from '../actions';
import { START_SEARCH } from '../actions';

const INITIAL_STATE = {
  isFetching: false,
  character: undefined,
  error: undefined,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case FAILED_REQUEST:
        return { ...state, error: action.payload, isFetching: false };
      case SAVE_DATA:
        return { ...state, error: undefined, character: action.data, isFetching: false };
      case START_SEARCH:
        return { ...state, character: {}, isFetching: true }
        default:
        return state;
  }
}

export default reducer;