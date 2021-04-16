
document.addEventListener('submit', (e) => {
    e.preventDefault();  
    recordExpenses();
 });

function recordExpenses(){
    const newTable = document.getElementById('tableExpenses').getElementsByTagName('tbody')[0]; 
    const newRow = newTable.insertRow(0);
    const amountCharged = document.getElementById('amountCharged').value;
    const amountFormated  = '$' + amountCharged.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    newRow.insertCell(0).innerHTML = document.getElementById('location').value;
    newRow.insertCell(1).innerHTML = document.getElementById('expenseDescription').value;
    newRow.insertCell(2).innerHTML = dateCorrectFormat();
    newRow.insertCell(3).innerHTML = amountFormated;
    newRow.insertCell(4).innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" id="delete">'

    document.getElementById('location').value = '';
    document.getElementById('expenseDescription').value = '';
    document.getElementById('dateCharged').value = '';
    document.getElementById('amountCharged').value = '';
}

function deleteRow (e) {
    let deleteButton  = e.parentNode.parentNode.rowIndex;
    document.getElementById("tableExpenses").deleteRow(deleteButton);
} 

function dateCorrectFormat() {
    const date = document.getElementById('dateCharged').value.split('-');//date([year],[month],[day])
    const day = date[2];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const monthFormated = months[date[1] - 1]; 
    const dateFormat = monthFormated + ' - ' + day ;
    return dateFormat;
}
