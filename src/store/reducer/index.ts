import { combineReducers } from "redux";
import { todoReducer, TodoState } from "./todosReducer";

export interface RootState {
  todos: TodoState[];
}

export const rootReducer = combineReducers<RootState>({
  todos: todoReducer
});
