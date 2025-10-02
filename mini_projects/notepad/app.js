notes = []

function addNote() {
    let newtitle = document.getElementById("new-note-title").innerText;
    let newtext = document.getElementById("new-note-text").innerText;

    const note = { title: newtitle, text: newtext };
    notes.push(note);
    console.table(notes)

    document.getElementById("new-note-title").innerText = `Edit Title...`;
    document.getElementById("new-note-text").innerText = `Edit Text...`;
}


function removeNote(index) {
    notes.splice(index, 1);

    displayNotes();
}

function editNote(index) {
    let editTitle = prompt("Edit Title:", notes[index].title);
    let editText = prompt("Edit Text:", notes[index].text);
    if (editTitle !== null && editText !== null) {
        notes[index].title = editTitle;
        notes[index].text = editText;
    }

    displayNotes();
}


function displayNotes() {
    let notesSection = document.getElementById("notes-section");
    notesSection.innerHTML = `
    <h2 class="text-xl font-bold mb-4">Your Notes</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">`;

    for (let i = 0; i < notes.length; i++) {
        let noteCard = document.createElement("div");
        noteCard.className = "note-card dark:bg-[#202124] p-4 rounded-lg border dark:border-[#A6A6A7] shadow-lg";
        noteCard.innerHTML = `
            <div class="note-title text-2xl font-bold mb-2">${notes[i].title}</div>
            <div class="note-text text-lg">${notes[i].text}</div>
            <div class="flex justify-end gap-4 mt-4">
                <button class="dark:bg-[#202124] py-2 px-4 border dark:border-[#A6A6A7] rounded-lg" onclick="editNote(${i})">
                    Edit
                </button>
                <button class="dark:bg-[#202124] text-[#FF001B] py-2 px-4 border border-[#FF001B] rounded-lg" onclick="removeNote(${i})">
                    Delete
                </button>
            </div>
        </div>
        `;
        notesSection.appendChild(noteCard);
    }
}

