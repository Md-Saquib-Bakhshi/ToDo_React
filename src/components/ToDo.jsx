import { useEffect, useState } from "react";
import { TodoList } from "./ToDoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT ON TODO CHANGE");
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log("USE EFFECT FIRST TIME");
    const stringTodos = localStorage.getItem("todos");
    if (stringTodos) {
      const todos = JSON.parse(stringTodos);
      setTodos(todos);
    }
  }, []);

  const handleDelete = (todo) => {
    const copy = [...todos];
    const index = copy.findIndex((el) => el === todo);
    copy.splice(index, 1);
    setTodos(copy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = event.target.elements["todoInput"];

    setTodos([...todos, input.value]);
    input.value = "";
  };
  return (
    <div className="border rounded  shadow p-3">
      <h1 className="text-center mb-4">Todo Application</h1>

      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <input name="todoInput" type="text" className="form-control" />
            </div>
            <div className="col-md-2">
              <button className="btn btn-danger" mb-4 type="submit">
                Add Todo
              </button>
            </div>
          </div>
        </div>
      </form>
      <hr />
      {todos.length > 0 ? (
        <TodoList todos={todos} onDelete={handleDelete} />
      ) : (
        <h1 className="alert alert-info">No Todos</h1>
      )}
    </div>
  );
};

export default Todo;
