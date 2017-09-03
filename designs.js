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
	makeGrid(gridWidth.value, gridHeight.value);
});

function makeGrid(width, height) {

// Your code goes here!
	for (let i = 0; i < height; i++) {
		let row = document.createElement('tr');
		table.appendChild(row);
		for (let j = 0; j < width; j++) {
			let col = document.createElement('td');
			row.appendChild(col);
		}
	}

}
