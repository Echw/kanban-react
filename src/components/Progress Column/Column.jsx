import React from "react";
import classes from "./Column.module.css";
import Task from "../Tasks/Task";

const Column = () => {
  return (
    <div className={classes.box}>
      {/* <div className={classes.colorLabelTop}></div> */}

      <h2>To Do</h2>
      <Task></Task>

      {/* <div className={classes.colorLabelBottom}></div> */}
    </div>
  );
};

export default Column;
