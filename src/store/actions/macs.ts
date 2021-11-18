import {Dispatch} from 'redux';
import {MacsAction, MacsActionType} from '../../types/mac';
import axios from 'axios';

export const fetchMacs = () => {
  return async (dispatch: Dispatch<MacsAction>) => {
    try {
      dispatch({type: MacsActionType.FETCH_MACS});
      const response = await axios.get('http://localhost:5000/macs');
      dispatch({
        type: MacsActionType.FETCH_MACS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: MacsActionType.FETCH_MACS_ERROR,
        payload: 'Произошла ошибка при загрузке данных',
      });
    }
  };
};
