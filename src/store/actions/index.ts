import * as TodoActionCreators from "./fetchTodos";
import * as UserActionCreators from "./fetchUsers";

export const ActionCreators = {
  ...TodoActionCreators,
  ...UserActionCreators,
};
