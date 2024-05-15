const tableContainer = document.getElementById("tableContainer");

const table = document.createElement("table");

for (let i = 1; i <= 10; i++) {
  let row = document.createElement("tr");
  for (let j = 1; j <= 10; j++) {
    let cell = document.createElement("td");
    let value = i * j;
    cell.textContent = value;
    row.appendChild(cell);
  }
  table.appendChild(row);
}
tableContainer.appendChild(table);
