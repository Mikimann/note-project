import { useState, useEffect } from "react";
import { Header, Footer, Note, CreateArea } from "./components";

import "./App.css";

const defaultNote = [
  {
    title: "Note title",
    content: "Note content",
  },
];

const getNoteValue = () => {
  const saved = window.localStorage.getItem("note");
  const savedNote = JSON.parse(saved);
  return savedNote || defaultNote;
};

const useLocalStorage = () => {
  const [notes, setNotes] = useState(getNoteValue);

  useEffect(() => {
    window.localStorage.setItem("note", JSON.stringify(notes));
  }, [notes]);

  return [notes, setNotes];
};

function App() {
  // const [notes, setNotes] = useState([]);
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
