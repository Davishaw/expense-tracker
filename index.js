const inputName = document.getElementById('name');
const inputDate = document.getElementById('date');
const inputAmount = document.getElementById('amount');
const button = document.querySelector('.btn');
const table = document.querySelector('table');
const tBody = document.getElementById('tbody');
const errorMessage = document.getElementById('error-message');


// Event 
button.addEventListener('click', addTable);
tBody.addEventListener('click', deleteItems);

// Functions

function addTable(e) {
    e.preventDefault() 
    if (inputName.value != '' && inputDate.value != 0 && inputAmount.value > 0) {
        resetErrorMessage()
    // Creo riga tabella
    const tableRow = tBody.insertRow();
    // Creo le celle
    const tableName = tableRow.insertCell();
    const tableDate = tableRow.insertCell();
    const tableAmount = tableRow.insertCell();
    const tableDelete = tableRow.insertCell();
    tableDelete.classList.add('delete');
    // Assegno i valori alle celle
    tableName.textContent = inputName.value;
    tableDate.textContent = inputDate.value;
    tableAmount.textContent = inputAmount.value;
    tableDelete.textContent = 'x';
    } else{
        showErrorMessage('Please fill out all required fields')
    }
    // Pulisco i campi
    inputName.value = '';
    inputDate.value = '';
    inputAmount.value = '';
}


function deleteItems(e) {
    e.preventDefault()
    const row = e.target.closest('tr')
    row.remove()
}






function showErrorMessage(msg) {
    errorMessage.textContent = msg
}

function resetErrorMessage() {
    errorMessage.textContent = ''
}