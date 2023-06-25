import { useState } from "react";

const Form = ({ onFormSubmit }) => {
  const [todos, setTodos] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTodos((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(todos.task);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        placeholder="Enter task ..."
        name="task"
        value={todos.task}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
