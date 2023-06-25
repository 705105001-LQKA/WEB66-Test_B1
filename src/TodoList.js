import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const TodoList = (props, { onEditItem }) => {
  const [items, setItems] = useState([""]);

  useEffect(() => {
    if (items.length < props.value.length) {
      setItems(props.value);
    }
  });

  const handleToggle = (index) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };
  return (
    <div className="todo-list-container">
      {items.map((item, index) => (
        <div
          className={
            item.checked ? "todo-item-container done" : "todo-item-container"
          }
          key={index}
        >
          <div onClick={() => handleToggle(index)}>
            {item.checked ? <FaRegCheckCircle /> : <FaRegCircle />}
          </div>
          <div className="item-title">{item.name}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
