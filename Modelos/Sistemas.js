document.getElementById('productForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener valores de los inputs
    const name = document.getElementById('productName').value;
    const code = document.getElementById('productCode').value;
    const quantity = document.getElementById('productQuantity').value;
    const Dispo = document.getElementById('productDispo').value;
    // Crear una nueva fila en la tabla
    const table = document.getElementById('productList');
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    cell1.textContent = name;
    cell2.textContent = code;
    cell3.textContent = quantity;
    cell4.textContent = Dispo;
    // Limpiar los campos del formulario
    document.getElementById('productForm').reset();
});
