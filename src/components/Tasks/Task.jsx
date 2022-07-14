import React from "react";
import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <div className={classes.taskBox}>
      <div className={classes.lineBox}>
        <p>{props.title}</p>
        <button>Edit</button>
      </div>
      <div className={classes.hashtag}>
        <p>{props.hashtags}</p>
      </div>
    </div>
  );
};

export default Task;
