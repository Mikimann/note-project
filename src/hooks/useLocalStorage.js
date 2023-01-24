import { useState, useEffect } from 'react';
import { defaultNote } from '../constants/defaultNote';

const getNoteValue = () => {
  const saved = window.localStorage.getItem('note');
  const savedNote = JSON.parse(saved);
  return savedNote || defaultNote;
};

function useLocalStorage() {
  const [notes, setNotes] = useState(getNoteValue);

  useEffect(() => {
    window.localStorage.setItem('note', JSON.stringify(notes));
  }, [notes]);

  return [notes, setNotes];
}

export default useLocalStorage;
