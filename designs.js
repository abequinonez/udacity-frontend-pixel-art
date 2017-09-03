// Select the grid size inputs
const gridHeight = document.getElementById('input_height');
const gridWidth = document.getElementById('input_width');

// Select the make grid button
const makeGridBtn = document.getElementsByTagName('button')[0];

// Select the color picker
const colorPicker = document.getElementById('colorPicker');

// Select the table
const table = document.getElementById('pixel_canvas');

// When the make grid button is clicked, call makeGrid()
makeGridBtn.addEventListener('click', function() {
    const height = gridHeight.value;
    const width = gridWidth.value;

    // Only call makeGrid() if both height and width are greater than 0
    if (height > 0 && width > 0) {
        makeGrid(height, width);
    }
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
        const row = document.createElement('tr');

        // Append the row to the table
        table.appendChild(row);
        for (let j = 0; j < width; j++) {
            // Create a table cell
            const col = document.createElement('td');

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
