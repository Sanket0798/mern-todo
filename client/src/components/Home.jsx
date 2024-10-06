import React, { useState, useEffect } from "react";
import Create from "./Create";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
// import { BsCircleFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8800/get")
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = () => {};

  return (
    <div>
      <h2>Todo List</h2>
      <Create />
      {todos.length === 0 ? (
        <div>
          <h2>No Record</h2>
        </div>
      ) : (
        todos.map((todo, index) => (
          <div
            key={index}
            className="bg-black text-white text-start px-3 flex justify-between items-center"
          >
            <div className="checkbox flex items-center justify-between w-[65px]">
              {/* <BsCircleFill className="icon" /> */}
              <input type="checkbox" onClick={handleEdit} />
              <p>{todo.task}</p>
            </div>
            <span>
              <MdDeleteForever className="icon" />
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
