import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]); //... was used to get elements from the array
    setTodo("");
  };
  return (
    <div>
      <h1>MY TO DO LIST ({todos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write your to do ..."
          name=""
          value={todo}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
