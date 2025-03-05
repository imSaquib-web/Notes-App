import React, { useState } from "react";
import "./App.css";
import NoteInput from "./Components/NoteInput";
import NoteList from "./Components/NoteList";
import EmptyMessage from "./Components/EmptyMessage";

const App = () => {
  const [ListNotes, setListNotes] = useState([]);

  const addList = (Notes) => {
    if (Notes !== "") {
      setListNotes([...ListNotes, Notes]);
    }
  };

  const handleDelete = (i) => {
    const newNotes = [...ListNotes];
    newNotes.splice(i, 1);
    setListNotes(newNotes);
  };

  return (
    <div className="master">
      <NoteInput addList={addList} />
      {ListNotes.length === 0 ? (
        <EmptyMessage />
      ) : (
        ListNotes.map((Notes, i) => (
          <NoteList Notes={Notes} i={i} key={i} handleDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default App;
