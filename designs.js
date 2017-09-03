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
        /*
        Create a table row. MDN used as a reference for the createElement()
        and appendChild() methods.
        */
        let row = document.createElement('tr');

        // Append the row to the table
        table.appendChild(row);
        for (let j = 0; j < width; j++) {
            // Create a table cell
            let col = document.createElement('td');

            /*
            Add an event listener to each cell. When clicked, the cell's background
            color will change to the current value of the color picker.
            */
            col.addEventListener('click', function() {
                col.style.backgroundColor = colorPicker.value;
            });

            // Append the cell to the row
            row.appendChild(col);
        }
    }
}
