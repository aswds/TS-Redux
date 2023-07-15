import { TodoActions, TodoActionTypes, TodoState } from "./../../types/todo";

const initialState: TodoState = {
  todos: [],
  loading: false,
  limit: 10,
  page: 1,
  error: null,
};

export const todoReducer = (
  state = initialState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH_TODO:
      return {
        ...state,
        loading: true,
      };
    case TodoActionTypes.FETCH_TODO_SUCCESS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case TodoActionTypes.FETCH_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case TodoActionTypes.SET_TODO_PAGE:
      return {
        ...state,
        page: action.payload,
      };

    default:
      return state;
  }
};
