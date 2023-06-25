import "./styles.css";
import TodoList from "./TodoList";
import TodoListHeader from "./TodoListHeader";
import Form from "./Form";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [todos, setTodos] = useState([
    { name: "Build some websites", checked: false },
    { name: "Do excercises", checked: false },
    { name: "Go shopping", checked: false },
    { name: "House cleaning", checked: false }
  ]);
  const handleFormSubmit = (data) => {
    const newItem = { name: data, checked: false };
    setTodos([...todos, newItem]);
  };
  const handleEditItem = (newTodos) => {
    const updatedItems = [...todos, newTodos];
    setTodos([...todos, updatedItems]);
    console.log(todos);
  };
  useEffect(() => {});
  return (
    <div className="App">
      <div className="container">
        <TodoListHeader value={todos} />
        <TodoList value={todos} onEditItem={handleEditItem} />
        <Form onFormSubmit={handleFormSubmit} />
      </div>
      <Footer />
    </div>
  );
};
