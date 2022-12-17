import React from "react";
import classes from "./App.module.css";
import check from "./images/icon-check.svg";

function Note({ note, toogleDone }) {
  function handleNoteClick() {
    toogleDone(note.id);
    console.log(note.isDone);
  }

  let classCondition = `${classes.note}`;
  note.isDone
    ? (classCondition = `${classes.doneStyles}`)
    : (classCondition = `${classes.note}`);

  return (
    <div onClick={handleNoteClick} className={classCondition}>
      <img src={check} alt="checksymbol"></img>
      <div className={classes.img_placeholder}></div>
      <p>{note.text}</p>
    </div>
  );
}

export default Note;
