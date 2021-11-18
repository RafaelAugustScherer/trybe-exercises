import charApi from '../../services/charAPI';

export const FAILED_REQUEST = 'FAILED_REQUEST';
export const SAVE_DATA = 'SAVE_DATA';
export const START_SEARCH = 'START_SEARCH';

const failedRequest = (error) => ({
  type: FAILED_REQUEST,
  payload: error,
});

const saveData = (data) => ({
  type: SAVE_DATA,
  data,
});

const startSearch = () => ({
  type: START_SEARCH
});

export const fetchApi = (query) => (dispatch) => {
  dispatch(startSearch());
  charApi(query).then(
    ([ data ]) => dispatch(saveData(data)),
    (error) => dispatch(failedRequest(error))
  ); 
}