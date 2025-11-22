const noteInput = document.getElementById("noteInput");
const addNoteBtn = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
  notesContainer.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.classList.add("note");
    div.innerHTML = `
      <p>${note}</p>
      <div class="actions">
        <button onclick="editNote(${index})">✏ Edit</button>
        <button onclick="deleteNote(${index})">🗑 Delete</button>
      </div>
    `;
    notesContainer.appendChild(div);
  });
}

addNoteBtn.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText === "") {
    alert("Please write something!");
    return;
  }
  notes.push(noteText);
  localStorage.setItem("notes", JSON.stringify(notes));
  noteInput.value = "";
  displayNotes();
});

function deleteNote(index) {
  if (confirm("Delete this note?")) {
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
}

function editNote(index) {
  const newText = prompt("Edit your note:", notes[index]);
  if (newText !== null) {
    notes[index] = newText.trim();
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
}

displayNotes();
