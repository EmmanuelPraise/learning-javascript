
notes = [
    {title: "Sample Title", text: "Sample Text..."},
]

function addNote(title="New Note", text="Note content...") {
    notes.push({title: title, text: text});
}

addNote("Report", "This is a report note.");
addNote("Brief", "This is a brief note.");
addNote("The Fox", "The quick brown fox jumps over the lazy dog.");
addNote("ABE 202", "THIS A NOTE ON ABE 202 CLASS.");

console.table(notes)

function removeNote(index) {
    notes.splice(index, 1);
}

removeNote(0);
console.table(notes)

function editNote(index, newTitle="Updated Title", newText="Updated Text") {
    notes[index].title = newTitle;
    notes[index].text = newText;
}


// function getNotes() {
//     return notes;
// }

// function clearNotes() {
//     notes = [];
// }
