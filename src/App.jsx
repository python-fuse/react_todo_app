import { useEffect, useState } from "react";
import "./style.css";
import { HeaderForm } from "./components/HeaderForm";
import { TodoList } from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEM");
    if (localValue == null) return [];
    
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEM", JSON.stringify(todos));
  }, [todos]);

  function deleteTask(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [...currentTodos, { id: crypto.randomUUID(), title }];
    });
  }

  return (
    <>
      <div className="container">
        <HeaderForm onSubmit={addTodo} />
        <main>
          {todos.length == 0 && <h3>No Tasks</h3>}
          <TodoList todos={todos} deleteTask={deleteTask} />
        </main>
      </div>
    </>
  );
}
