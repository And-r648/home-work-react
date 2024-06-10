import { useState } from "react";
import ListItem from "./ListItem";

const ToDoList = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onClickHandler = () => {
    const newElement = "new element";
    const updatedElement = [...items, input];
    setItems(updatedElement);
    setInput("");
  };

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setInput(value);
  };

  const onEnterHandler = (e) => {
    if (e.key === "Enter") {
      const updatedElement = [...items, input];
      setItems(updatedElement);
      setInput("");
    }
  };

  return (
    <>
      <input
        onKeyDown={onEnterHandler}
        onChange={onChangeHandler}
        value={input}
        placeholder="new task"
      />
      <h2>{items.length}</h2>
      <ul>
        {items.map((element) => (
          <ListItem element={element} />
        ))}
      </ul>
      <button onClick={() => onClickHandler(input)}>Add Todo</button>
    </>
  );
};

export default ToDoList;
