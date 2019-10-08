import { connect } from "react-redux";
import { Dispatch } from "redux";
import TodoItem from "../presentationals/TodoItem";
import { RootState } from "../../store/reducer/index";
import { updateTodo, deleteTodo, isDoneTodo } from "../../store/action/todoActions";
import Todo from "../../models/Todo";

function mapStateToProps(state: RootState) {
  console.log('mapStateToProps todoItem Container', state.todos);
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    update: (todo: Todo) => dispatch(updateTodo(todo)),
    deleteTodo: (todo: Todo) => dispatch(deleteTodo(todo)),
    isDoneTodo: (todo: Todo) => dispatch(isDoneTodo(todo)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
