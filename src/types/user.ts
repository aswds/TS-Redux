export enum UserActionTypes {
  FETCH_USERS = "FETCH_USER",
  FETCH_USERS_SUCCESS = "FETCH_USER_SUCCESS",
  FETCH_USERS_ERROR = "FETCH_USER_ERROR",
}
interface FetchUserAction {
  type: UserActionTypes.FETCH_USERS;
}
interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH_USERS_SUCCESS;
  payload: any[];
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USERS_ERROR;
  payload: string;
}

export interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

export type UserAction =
  | FetchUserAction
  | FetchUserErrorAction
  | FetchUserSuccessAction;
