function createTable() {
    //Write your code here
	const table = document.getElementById("myTable");
	table.innerHTML = "";

	let rn = parseInt(prompt("Input number of rows"));
	let cn = parseInt(prompt("Input number of columns"));

	for(let i = 0; i<rn; i++){
		let newRow = table.insertRow(i);
		for(let j = 0; j < cn; j++){
			let newCol = newRow.insertCell(j);
			newCol.textContent = `Row-${i} Column-${j}`;
		}
	}
}
