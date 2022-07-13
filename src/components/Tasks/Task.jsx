import React from "react";
import classes from "./Task.module.css";

const Task = () => {
  return (
    <div className={classes.taskBox}>
      <div className={classes.lineBox}>
        <p>Learn React</p>
        <button>Edit</button>
      </div>
      <div className={classes.hashtag}>
        <p>Design</p>
      </div>
    </div>
  );
};

export default Task;
