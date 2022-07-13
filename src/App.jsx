import React from "react";
import Header from "./components/Header/Header";
import Column from "./components/Progress Column/Column";
import classes from "./App.module.css";
import { COLUMNS } from "./utils/constants/columns.constant";

function App() {
  return (
    <>
      <Header />
      <div className={classes.columnsBox}>
        {COLUMNS.map((c) => (
          <Column
            className={classes.column}
            key={c.id}
            name={c.name}
            color={c.color}
          />
        ))}
      </div>
    </>
  );
}

export default App;
