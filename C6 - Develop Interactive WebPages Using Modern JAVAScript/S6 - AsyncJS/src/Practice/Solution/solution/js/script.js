let noteList = [];

let view = "grid"; //default view is grid-view

const todoURL = "http://localhost:3000/todos";

//task-1 : add note
function saveNote(event) {
    event.preventDefault();
    const noteId = document.getElementById('note-id').value;
    const noteTitle = document.getElementById('note-title').value;
    const noteContent = document.getElementById('note-content').value;

    // Populate note object with data from HTML
    const note = {
        id: noteId,
        title: noteTitle,
        content: noteContent
    };

    // Call saveNoteToServer() with note data to persist note to the server
    saveNoteToServer(note);
}


function saveNoteToServer(note) {
    // use axios to make HTTP POST request to save note to server
    // the saved note should also be pushed to noteList array and displayed on the web page
    axios.post(`${todoURL}`, note)
        .then(response => {
            noteList.push(note);
            createProductCard(note)
        })
}
function createProductCard(product) {
    let containerDiv = document.getElementById('note-container');
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardName = document.createElement('h5');
    cardName.textContent = product.title;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardDesc = document.createElement('p');
    cardDesc.classList.add('card-text');
    cardDesc.textContent = product.content;

    cardHeader.appendChild(cardName);
    cardBody.appendChild(cardDesc);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    
    containerDiv.appendChild(cardDiv);
}   

//task-2 : display notes
function displayNotes() {
    // call fetchNotesFromServer() to fetch notes from server and display the notes
    fetchNotesFromServer();    
} 

function fetchNotesFromServer() {
     // use axios to make HTTP GET request to fetch notes from server
    // the fetched notes should also be pushed to the noteList array and displayed on the web page
    axios.get("http://localhost:3000/todos")
        .then(response => {
            noteList = response.data;
            // Logic to display notes on the web page
            const noteContainer = document.getElementById('note-container');
            noteContainer.innerHTML = '';
            
            noteList.forEach(note => {
                const noteDiv = document.createElement('div');
                noteDiv.classList.add('note');

                const title = document.createElement('h2');
                title.textContent = note.title;

                const content = document.createElement('p');
                content.textContent = note.content;

                noteDiv.appendChild(title);
                noteDiv.appendChild(content);

                noteContainer.appendChild(noteDiv);
            });
        })
        
}

//task-3 : delete note
function deleteNote() {
    
}
 
//task-4 : toggle note view
function toggleView() {
    
}

//do not delete the code given below, it is written to make export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView,
    saveNoteToServer,
    fetchNotesFromServer
}
