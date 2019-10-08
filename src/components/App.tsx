import React from "react";
import "./App.css";
import TodoListContainer  from "./containers/TodoListContainer";
import Header  from "./presentationals/Header";

const App: React.FC = () => {
  return (
    <div className="app">
      <p>Todos</p>
      <div className="todo_app">
        <Header />
        <TodoListContainer />
      </div>
    </div>
  );
};

export default App;
