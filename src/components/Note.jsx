import React from "react";

export default function Note(props) {
  const handleDelete = () => {
    props.onDelete(props.id);
  };

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleDelete}>DELETE</button>
    </div>
  );
}
