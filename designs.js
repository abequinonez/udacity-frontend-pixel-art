/*
Select the submit button. I used querySelector in order to select the
button by its type attribute, as learned from the following Stack
Overflow discussion:
https://stackoverflow.com/questions/5897122/accessing-elements-by-type-on-javascript
*/
const submitButton = document.querySelector('input[type=submit]');

// Select the color picker
const colorPicker = document.getElementById('colorPicker');

// Select the grid size inputs
const gridHeight = document.getElementById('input_height');
const gridWidth = document.getElementById('input_width');

// Select the table
const table = document.getElementById('pixel_canvas');

// When size is submitted by the user, call makeGrid()
submitButton.addEventListener('click', function() {
	makeGrid(gridHeight.value, gridWidth.value);
});

// Make an N by M grid based on the grid size inputs
function makeGrid(height, width) {
	// Clear the grid, if one exists
	if (table.innerHTML.length > 0) {
		table.innerHTML = '';
	}
	for (let i = 0; i < height; i++) {
		let row = document.createElement('tr');
		table.appendChild(row);
		for (let j = 0; j < width; j++) {
			let col = document.createElement('td');
			row.appendChild(col);
		}
	}
}
