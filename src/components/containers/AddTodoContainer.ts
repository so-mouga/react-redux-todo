import { connect } from "react-redux";
import { Dispatch } from "redux";
import TextInput from "../presentationals/TextInput";
import { RootState } from "../../store/reducer/index";
import { addTodo } from "../../store/action/todoActions";

function mapStateToProps(state: RootState) {
  return {
    placeHolder: "Ajoute une tâche à faire"
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return {
    addTodo: (text: string) => {
      dispatch(addTodo(text))
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextInput);
