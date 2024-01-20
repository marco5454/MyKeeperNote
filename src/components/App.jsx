import React, { useState } from "react";
import CreateArea from "./CreateArea";
import Note from "./Note";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);

  function saveNotes(newNotes) {
    setNotes((prevNotes, index) => {
      return [...prevNotes, newNotes];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <div className="app-wrapper">
        <Header />
        <CreateArea onSave={saveNotes} />

        <div className="note-container">
          {notes.map((note, index) => {
            return (
              <Note
                title={note.title}
                content={note.content}
                key={index}
                id={index}
                onDelete={deleteNote}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
