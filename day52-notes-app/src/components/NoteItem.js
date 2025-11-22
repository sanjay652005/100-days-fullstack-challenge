import React, { useState } from "react";

export default function NoteItem({ note, deleteNote, editNote }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(note.title);
  const [newDesc, setNewDesc] = useState(note.desc);

  const saveEdit = () => {
    editNote(note.id, newTitle, newDesc);
    setIsEditing(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", marginBottom: "10px", borderRadius: "8px" }}>
      {isEditing ? (
        <>
          <input value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <input value={newDesc} onChange={(e) => setNewDesc(e.target.value)} />
          <button onClick={saveEdit}>Save</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.desc}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => deleteNote(note.id)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}
