import React, { Fragment } from "react";
import Note from "./Note";

function NoteList({ noteList, toogleDone, showCompleted, showActive }) {
  if (showActive === false && showCompleted === false) {
    console.log(showCompleted, showActive);
    return noteList.map((note) => {
      return <Note toogleDone={toogleDone} key={note.id} note={note} />;
    });
  }
  if (showActive === true) {
    const activeNoter = noteList.filter((note) => !note.isDone);
    return activeNoter.map((note) => {
      return <Note toogleDone={toogleDone} key={note.id} note={note} />;
    });
  }
  if (showCompleted === true) {
    const clearedNoter = noteList.filter((note) => note.isDone);
    return clearedNoter.map((note) => {
      return <Note toogleDone={toogleDone} key={note.id} note={note} />;
    });
  }
}

export default NoteList;
