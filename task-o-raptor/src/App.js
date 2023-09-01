import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleFormSubmit = (inputValue) => {
    setTasks((oldTasks) => [inputValue, ...oldTasks]);
  };

  return (
    <>
      <Form handleSubmit={handleFormSubmit} />
      <ToDoList tasks={tasks} />
    </>
  );
}

function ToDoList(props) {
  const todoItems = props.tasks.map((task) => <li>{task}</li>);

  return <ul>{todoItems}</ul>;
}

function Form(props) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInputValue("");
    props.handleSubmit(event.target.task.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Input Value:
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          name="task"
        />
      </label>
      <button>Submit</button>
    </form>
  );
}

export default App;
