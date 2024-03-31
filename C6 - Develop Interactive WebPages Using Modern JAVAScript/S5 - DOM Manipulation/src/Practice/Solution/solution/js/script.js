let noteList = [];

let view = "grid"; //default view is grid-view

//task-1 : define function `saveNote()` to add note
function saveNote(event) {
    event.preventDefault();
    console.log("adding");
    let product = {
        id: document.getElementById("note-id").value,
        name: document.getElementById("note-title").value,
        description: document.getElementById("note-content").value,
    }
    noteList.push(product);
    console.log(noteList);
    createProductCard(product);
    clearFields();
    return noteList
}

function clearFields() {
    document.getElementById("note-id").value = "";
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
}


function createProductCard(product) {
    let containerDiv = document.getElementById('note-container');
    let cardDiv = document.createElement('div');
    cardDiv.classList.add('card', 'm-auto', 'my-3');
    cardDiv.setAttribute('style', "width: 18rem");

    let cardHeader = document.createElement('div');
    cardHeader.classList.add('card-header');
    let cardName = document.createElement('h5');
    cardName.textContent = product.name;

    let cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    let cardDesc = document.createElement('p');
    cardDesc.classList.add('card-text');
    cardDesc.textContent = product.description;

    cardHeader.appendChild(cardName);
    cardBody.appendChild(cardDesc);

    cardDiv.appendChild(cardHeader);
    cardDiv.appendChild(cardBody);
    
    containerDiv.appendChild(cardDiv);
}   

function displayNotes() {
    return noteList
}

displayNotes();

//task-2 : define function `displayNotes()` to display all notes


 
//task-3 : delete note - This task is Optional
function deleteNote() {
    
}
 
//task-4 : toggle note view - This task is Optional
function toggleView() {
    
}

// do not delete the code given below, it is written to export the functions to be tested
module.exports = {
    saveNote,
    displayNotes,
    deleteNote,
    toggleView
}
