import React from "react";
import AddTodo from "../containers/AddTodos";
import VisibleTodoList from "../containers/VisibleTodoList";
import Footer from "./Footer";

const App = () => {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
};

export default App;
