import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState();
  // const handleAdd = () => {
  //   axios
  //     .post("http://localhost:8800/add", { task: task })
  //     .then((result) => console.log(result))
  //     .catch((err) => console.log(err));
  // };

  const handleAdd = () => {
    axios
      .post("http://localhost:8800/add", { task: task })
      .then((result) => {
        console.log("Task added:", result.data); // Handle success
      })
      .catch((err) => {
        console.log("Error adding task:", err); // Handle error
      });
  };

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        className="border border-black rounded-full font-semibold"
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
