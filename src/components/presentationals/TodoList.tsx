import React from 'react'
import Todo from '../../models/Todo';
import TodoItemContainer from '../containers/TodoItemContainer';
import "./TodoList.css"

interface Props {
  todos: Todo[];
}

export const TodoList: React.FC<Props> = ({todos}) => {
  const todo = todos.map((todo) => <TodoItemContainer key={todo.id} todo={todo}/>)
  return (
    <div className="todo_list">
      {todo}
    </div>
  )
}

