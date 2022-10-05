import { useState, useEffect } from "react";
import { Header, Footer, Note, CreateArea } from "./components";
import { defaultNote } from "./constants/defaultNote";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  const [notes, setNotes] = useLocalStorage();

  function addNote(newNote) {
    try {
      setNotes((prevNotes) => {
        return [...prevNotes, newNote];
      });
    } catch (error) {
      console.log(error);
    }
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {Array.isArray(notes)
        ? notes.map((noteItem, index) => {
            return (
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                defaultNote={defaultNote}
              />
            );
          })
        : null}
      <Footer />
    </div>
  );
}

export default App;
