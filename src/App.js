import { useState, useEffect } from "react";
import { Header, Footer, Note, CreateArea } from "./components";
import "./App.css";

function App() {
  // const [notes, setNotes] = useState([]);
  const [notes, setNotes] = useState(() => {
    const saved = window.localStorage.getItem("note");
    const initialValue = JSON.parse(saved);
    return (
      initialValue || {
        title: "",
        content: "",
      }
    );
  });

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  useEffect(() => {
    window.localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
