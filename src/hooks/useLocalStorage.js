import { useState, useEffect } from "react";

export const useLocalStorage = () => {
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
};
