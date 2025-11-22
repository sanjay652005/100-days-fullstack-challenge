import React, { useState, useEffect } from "react";
import AddNote from "./components/AddNote";
import NoteItem from "./components/NoteItem";
import "./App.css"; // <-- CSS linked here

export default function App() {
  const [notes, setNotes] = useState(() => {
    const saved = localStorage.getItem("notes");
    return saved ? JSON.parse(saved) : [];
  });

  // Save notes to localStorage
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // Add Note
  const addNote = (note) => {
    setNotes([...notes, { ...note, id: Date.now() }]);
  };

  // Delete Note
  const deleteNote = (id) => {
    setNotes(notes.filter((n) => n.id !== id));
  };

  // Edit Note
  const editNote = (id, title, desc) => {
    setNotes(
      notes.map((n) =>
        n.id === id ? { ...n, title, desc } : n
      )
    );
  };

  return (
    <div className="main-wrapper">
      <h1>Notes App</h1>

      <AddNote addNote={addNote} />

      {notes.length === 0 ? (
        <p style={{ textAlign: "center", color: "#555" }}>
          No notes yet...
        </p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            deleteNote={deleteNote}
            editNote={editNote}
          />
        ))
      )}
    </div>
  );
}


