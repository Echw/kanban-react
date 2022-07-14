import React, { useState } from "react";
import Header from "./components/Header/Header";
import Column from "./components/Progress Column/Column";
import classes from "./App.module.css";
import { COLUMNS } from "./utils/constants/columns.constant";
import AddTaskModal from "./components/Modal/AddTask";
import NewTaskContent from "./components/Modal/NewTaskContent";

function App() {
  const [modal, setModal] = useState(false);

  const modalHandler = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <AddTaskModal onClick={modalHandler}>
          <NewTaskContent onClick={modalHandler} />
        </AddTaskModal>
      )}
      <Header onClick={modalHandler} />
      <div className={classes.columnsBox}>
        {COLUMNS.map((c) => (
          <Column
            className={classes.column}
            key={c.id}
            name={c.name}
            color={c.color}
            tasks={c.tasks}
          />
        ))}
      </div>
    </>
  );
}

export default App;
