import React, { Fragment, useState } from "react";
import styles from "./App.module.css";
import NoteList from "./NoteList";
import moon from "./images/icon-moon.svg";

function App() {
  const [inputValue, setInputValue] = useState();
  const [noteList, setNoteList] = useState([]);
  const [showCompleted, setShowClompleted] = useState(false);
  const [showActive, setShowActive] = useState(false);

  const enterClickHandler = (event) => {
    if (event.key === "Enter") {
      noteAddHandler();
      console.log(showCompleted, showActive);
    }
  };

  function toogleDone(id) {
    const newNotes = [...noteList];
    const note = newNotes.find((note) => note.id === id);
    note.isDone = !note.isDone;
    setNoteList(newNotes);
  }

  const noteAddHandler = () => {
    const text = inputValue;
    setInputValue("");

    setNoteList((prevNoteList) => {
      return [
        ...prevNoteList,
        { id: Math.random(), text: text, isDone: false },
      ];
    });
    console.log(text);
  };

  let itemsLeft = noteList.filter((note) => !note.isDone).length;

  const clearHandler = () => {
    const clearedNoter = noteList.filter((note) => !note.isDone);
    setNoteList(clearedNoter);
  };

  const completedHandler = () => {
    setShowActive(false);
    setShowClompleted(true);
  };

  const activeHandler = () => {
    setShowClompleted(false);
    setShowActive(true);
  };

  const allHandler = () => {
    setShowClompleted(false);
    setShowActive(false);
  };

  return (
    <Fragment>
      <div className={styles.container_entire}>
        <div className={styles.header_container}>
          <h1>TODO</h1>
          <img src={moon} alt="moon" />
        </div>

        <div>
          <input
            type="text"
            maxLength="25"
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
            onKeyDown={enterClickHandler}
            className={styles.toDoAdd}
            value={inputValue}
            placeholder="Create a new todo..."
          ></input>
        </div>
        <NoteList
          showActive={showActive}
          showCompleted={showCompleted}
          toogleDone={toogleDone}
          noteList={noteList}
        />

        <div className={styles.footer_container}>
          <h3>{itemsLeft} items left</h3>
          <div className={styles.flex_justifier}>
            <h3
              className={
                showActive === false && showCompleted === false
                  ? `${styles.active_label}`
                  : `${styles.label_button}`
              }
              onClick={allHandler}
            >
              All
            </h3>
            <h3
              className={
                showActive ? `${styles.active_label}` : `${styles.label_button}`
              }
              onClick={activeHandler}
            >
              Active
            </h3>
            <h3
              className={
                showCompleted
                  ? `${styles.active_label}`
                  : `${styles.label_button}`
              }
              onClick={completedHandler}
            >
              Completed
            </h3>
          </div>
          <div className={styles.flex_justifier}>
            <h3 className={styles.label_button} onClick={clearHandler}>
              Clear Completed
            </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
