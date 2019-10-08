import React, { useState } from "react";
import Todo from "../../models/Todo";
import "./TodoItem.css";
import classNames from "classnames"


interface Props {
  todo: Todo;
  update: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
  isDoneTodo: (todo: Todo) => void;
}

const TodoItem: React.FC<Props> = ({ todo, update, deleteTodo, isDoneTodo }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value.trim());
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsClicked(false);
    onUpdateTodo();
  };

  const handleSubmit = (event: React.KeyboardEvent) => {
    if (event.which === 13) {
      setIsClicked(false);
      onUpdateTodo();
    }
  };

  const onUpdateTodo = () => {
    update({ ...todo, text: text });
  };

  const textDisplay = isClicked ? (
    <input
      onKeyDown={handleSubmit}
      onBlur={handleBlur}
      onChange={handleChange}
      value={text}
    />
  ) : (
    <label 	className={classNames({ line: todo.isCompleted })}  onClick={handleClick}>{text}</label>
  );
  return (
    <div className="app_todo_item">
      <input type="checkbox" checked={todo.isCompleted} onChange={() => isDoneTodo(todo) }  ></input>
      {textDisplay}
      <button onClick={() => deleteTodo(todo)} >X</button>
    </div>
  );
};

export default TodoItem;
