import classes from "./AddTask.module.css";
import { COLUMNS } from "../../utils/constants/columns.constant";
import { useState } from "react";

const NewTaskContent = (props) => {
  const [enteredTask, setEnteredTask] = useState("");
  const [enteredTag, setEnteredTag] = useState("");
  const [tagsArray, setTagsArray] = useState([]);
  const [checked, setChecked] = useState("");

  const taskChangeHandler = (event) => {
    setEnteredTask(event.target.value);
  };

  const tagChangeHandler = (event) => {
    const hashes = event.target.value;
    setEnteredTag(hashes);
    setTagsArray(hashes.split(","));
  };

  const handleClick = (event) => {
    const checked = event.target.value;
    setChecked(event.target.id);
    console.log(event.target);
  };

  return (
    <div>
      <header className={classes.header}>
        <h1>Add New Task</h1>
        <button onClick={props.onClick}>X</button>
      </header>
      <div className={classes.content}>
        <input
          placeholder="Your Task"
          type="text"
          id="addTask"
          value={enteredTask}
          onChange={taskChangeHandler}
        />
        <input
          placeholder="Add #Hashtag"
          type="text"
          id="hashtag"
          value={enteredTag}
          onChange={tagChangeHandler}
        />
        <div className={classes.progress}>
          <h3>Chose progress:</h3>
          {COLUMNS.map((c) => (
            <div key={c.id}>
              <input
                type="checkbox"
                id={c.id}
                name={c.name}
                onClick={handleClick}
                checked={checked === c.id}
              />
              <label htmlFor={c.id}>{c.name}</label>
            </div>
          ))}
        </div>
      </div>
      <div className={classes.buttons}>
        <button onClick={props.onClick} className={classes.cancel}>
          Cancel
        </button>
        <button onClick={props.onClick} className={classes.add}>
          Save Task
        </button>
      </div>
    </div>
  );
};

export default NewTaskContent;
