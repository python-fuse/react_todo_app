import { TodoItem } from "./TodoItem";

export function TodoList({ todos,deleteTask }) {
  

  return (
    <ul className="list">
      {todos.map((todo) => {
        return <TodoItem {...todo} key={todo.id} deleteTask={deleteTask}/>;
      })}
    </ul>
  );
}
