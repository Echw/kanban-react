import React from "react";
import classes from "./Column.module.css";
import Task from "../Tasks/Task";

const Column = (props) => {
  return (
    <div style={{ borderImage: props.color }} className={classes.box}>
      <h2>{props.name}</h2>
      <Task></Task>
    </div>
  );
};

export default Column;
