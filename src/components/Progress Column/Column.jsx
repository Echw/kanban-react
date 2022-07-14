import React from "react";
import classes from "./Column.module.css";
import Task from "../Tasks/Task";

const Column = (props) => {
  return (
    <div style={{ borderImage: props.color }} className={classes.box}>
      <h2>{props.name}</h2>
      {props.tasks.map((t) => (
        <Task key={t.id} title={t.title} hashtags={t.hashtags} />
      ))}
    </div>
  );
};

export default Column;
