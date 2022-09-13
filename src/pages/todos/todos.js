import React from "react";
import "./style.css";
function Todos(props) {
  let storedTodos = localStorage.getItem("todos");
  let parsedTodos;
  if (storedTodos) {
    parsedTodos = JSON.parse(storedTodos);
  }
  const [todos, setTodos] = React.useState(parsedTodos || []);
  const [todo, setTodo] = React.useState("");
  return (
    <div className={"todos-container"}>
      <h1>Todos</h1>
      <form
        id={"todo-form"}
        onSubmit={(e) => {
          e.preventDefault();
          todos.push(todo);
          setTodos([...todos]);
          localStorage.setItem("todos", JSON.stringify(todos));
          setTodo("");
          document.getElementById("user-todo").focus();
        }}
      >
        <input
          required
          id={"user-todo"}
          value={todo}
          name={"todo"}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />
        <button disabled={!todo} type={"submit"}>
          add
        </button>
      </form>
      <div className={"todos-item-wrapper"}>
        {todos.map((item, index) => (
          <div className={"todo-item"} key={index}>
            {index + 1}. {item}{" "}
            <button
              onClick={() => {
                todos.splice(index, 1);
                setTodos([...todos]);
                localStorage.setItem("todos", JSON.stringify(todos));
              }}
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todos;
