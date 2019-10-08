import { TodoActionTypes } from "../action/todoActions";
import { TodoActionTypeKeys } from "./../action/TodoActionTypeKeys";

export interface TodoState {
  id: number;
  text: string;
  isCompleted: boolean;
}

const initialState: TodoState[] = [
  {
    id: 1,
    text: "test",
    isCompleted: false
  }
];

export function todoReducer(
  state = initialState,
  action: TodoActionTypes
): TodoState[] {
  switch (action.type) {
    case TodoActionTypeKeys.ADD:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          text: action.text,
          isCompleted: false
        }
      ];
    case TodoActionTypeKeys.UPDATE:
      return state.map(todo => {
        return todo.id === action.todo.id
          ? {
              ...todo,
              text: action.todo.text
            }
          : todo;
      });
      case TodoActionTypeKeys.DELETE:
        return state.filter(todo => todo.id !== action.todo.id)
      case TodoActionTypeKeys.DONE:
          return state.map(todo => {
            return todo.id === action.todo.id
              ? {
                  ...todo,
                  isCompleted: !todo.isCompleted
                }
              : todo;
          });
    default:
      return state;
  }
}
