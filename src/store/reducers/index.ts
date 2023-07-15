import { userReducer } from "./UserReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { todoReducer } from "./todoReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
