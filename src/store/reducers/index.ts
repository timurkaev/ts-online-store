import {combineReducers} from 'redux';
import {macsReducer} from './macsReducer';

export const rootReducer = combineReducers({
  macs: macsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
