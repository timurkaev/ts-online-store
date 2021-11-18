import {MacsAction, MacsActionType, MacsState} from '../../types/mac';

const initialState: MacsState = {
  macs: [],
  loading: false,
  error: null,
};

export const macsReducer = (
    state = initialState,
    action: MacsAction
): MacsState => {
  switch (action.type) {
    case MacsActionType.FETCH_MACS:
      return {...state, loading: true, macs: [], error: null};

    case MacsActionType.FETCH_MACS_SUCCESS:
      return {...state, loading: false, macs: action.payload, error: null};

    case MacsActionType.FETCH_MACS_ERROR:
      return {...state, error: action.payload, macs: [], loading: false};
    default:
      return state;
  }
};
