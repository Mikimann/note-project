import React from 'react';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from '@mui/material';
import '../CreateArea/CreateArea.css';

const CreateArea = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: '',
    content: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  };

  const handleSubmit = (event) => {
    // eslint-disable-next-line react/prop-types
    props.onAdd(note);
    setNote({
      title: '',
      content: ''
    });
    event.preventDefault();
  };

  const expand = () => {
    setExpanded(true);
  };

  return (
    <div>
      <form className="create-note">
        {expanded ? (
          <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        ) : null}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          placeholder="Take a note..."
          rows={expanded ? 3 : 1}
          // eslint-disable-next-line prettier/prettier
          value={note.content}
        ></textarea>
        <Zoom in={expanded}>
          <Fab onClick={handleSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
};

export default CreateArea;
