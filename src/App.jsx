import React from "react";
import Header from "./components/Header/Header";
import Column from "./components/Progress Column/Column";
import classes from "./App.module.css";

function App() {
  return (
    <>
      <Header />
      <div className={classes.columnsBox}>
        <Column></Column>
        <Column></Column>
        <Column></Column>
        <Column></Column>
      </div>
    </>
  );
}

export default App;
