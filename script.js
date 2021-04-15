
document.addEventListener('submit', (e) => {
    e.preventDefault();  
    recordExpenses();
 });

function recordExpenses(){
    const table = document.getElementById('tableExpenses').getElementsByTagName('tbody')[0]; 
    const newRow = table.insertRow(0);

    console.log(table.length);

    newRow.insertCell(0).innerHTML = document.getElementById('typeOfCharge').value;
    newRow.insertCell(1).innerHTML = document.getElementById('expenseName').value;
    newRow.insertCell(2).innerHTML = document.getElementById('dateCharged').value;
    newRow.insertCell(3).innerHTML = document.getElementById('amountCharged').value;
    newRow.insertCell(4).innerHTML = '<input type="button" value="Delete" onclick="deleteRow(this)" id="delete">'

    document.getElementById('typeOfCharge').value = '';
    document.getElementById('expenseName').value = '';
    document.getElementById('dateCharged').value = '';
    document.getElementById('amountCharged').value = '';
}

function deleteRow (e) {
    let deleteButton  = e.parentNode.parentNode.rowIndex;
    document.getElementById("tableExpenses").deleteRow(deleteButton);
} 


