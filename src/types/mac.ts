export interface MacsState {
  macs: any[];
  loading: boolean;
  error: null | string;
}

export enum MacsActionType {
  FETCH_MACS = 'FETCH_MACS',
  FETCH_MACS_SUCCESS = 'FETCH_MACS_SUCCESS',
  FETCH_MACS_ERROR = 'FETCH_MACS_ERROR',
}

interface FetchMacsAction {
  type: MacsActionType.FETCH_MACS;
}

interface FetchMacsSuccessAction {
  type: MacsActionType.FETCH_MACS_SUCCESS;
  payload: any[];
}

interface FetchMacsErrorAction {
  type: MacsActionType.FETCH_MACS_ERROR;
  payload: null | string;
}

export type MacsAction =
  | FetchMacsAction
  | FetchMacsSuccessAction
  | FetchMacsErrorAction;
