export function TodoItem({ id, title, deleteTask }) {
  return (
    <li>
      <div className="list-item">
        <p>{title}</p>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </li>
  );
}
