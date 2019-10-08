import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {TodoList} from '../presentationals/TodoList';
import { RootState } from '../../store/reducer/index';


function mapStateToProps(state: RootState) {
  console.log('mapStateToProps todoList Container', state.todos);
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);