import classes from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>REACT KANBAN</h1>
        <div>
          <input placeholder="Search #Hashtag" type="text" id="search" />
          <button>Add New Task +</button>
        </div>
      </header>
    </>
  );
};

export default Header;
