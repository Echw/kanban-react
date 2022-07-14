import classes from "./Header.module.css";
import React from "react";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>REACT KANBAN</h1>
        <div>
          <input placeholder="Search #Hashtag" type="text" id="search" />
          <button onClick={props.onClick}>Add New Task +</button>
        </div>
      </header>
    </>
  );
};

export default Header;
