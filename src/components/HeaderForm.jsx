import { useState } from "react";

export function HeaderForm({onSubmit}) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    
    onSubmit(newItem);

    setNewItem("");
  }

  return (
    <div className="header">
      <h1>What are you up to?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
}
