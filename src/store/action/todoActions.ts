import { TodoActionTypeKeys } from "./TodoActionTypeKeys";
import  Todo  from "./../../models/Todo";

export interface AddAction {
  readonly type: TodoActionTypeKeys.ADD;
  text: string;
}

export interface UpdateAction {
  readonly type: TodoActionTypeKeys.UPDATE;
  todo: Todo;
}

export interface DeleteAction {
  readonly type: TodoActionTypeKeys.DELETE;
  todo: Todo;
}

export interface DoneAction {
  readonly type: TodoActionTypeKeys.DONE;
  todo: Todo;
}

// export combined types for the reducer
export type TodoActionTypes = AddAction | UpdateAction | DeleteAction | DoneAction;

export function addTodo(text: string): AddAction {
  return {
    type: TodoActionTypeKeys.ADD,
    text: text
  };
}

export function updateTodo(todo: Todo): UpdateAction {
  return {
    type: TodoActionTypeKeys.UPDATE,
    todo: todo
  };
}

export function deleteTodo(todo: Todo): DeleteAction {
  return {
    type: TodoActionTypeKeys.DELETE,
    todo: todo
  };
}

export function isDoneTodo(todo: Todo): DoneAction {
  return {
    type: TodoActionTypeKeys.DONE,
    todo: todo
  }
}
