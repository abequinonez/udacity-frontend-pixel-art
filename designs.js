/*
Select the grid size picker form. As instructed by a Udacity reviewer,
I made the change from selecting the submit button to the form itself.
In doing so the browser can listen to the submit event rather than the
submit button's click event, thereby enforcing browser form validation.
*/
const form = document.getElementById('sizePicker');

// Select the grid size inputs
const gridHeight = document.getElementById('input_height');
const gridWidth = document.getElementById('input_width');

// Select the color picker
const colorPicker = document.getElementById('colorPicker');

// Select the table
const table = document.getElementById('pixel_canvas');

// When the form is submitted, call makeGrid()
form.addEventListener('submit', function(event) {
    // Prevent the submit event's default action (reloading the page)
    event.preventDefault();
    const height = gridHeight.value;
    const width = gridWidth.value;
    makeGrid(height, width);
});

// Make an N by M grid based on the grid size inputs
function makeGrid(height, width) {
    /*
    Clear the grid, if one exists. As suggested by a Udacity reviewer, this
    conditional expression was simplified, since an empty string is falsy.
    */
    if (table.innerHTML) {
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
            const cell = document.createElement('td');

            /*
            Add an event listener to each cell. When clicked, the cell's background
            color will change to the current value of the color picker.
            */
            cell.addEventListener('click', function() {
                cell.style.backgroundColor = colorPicker.value;
            });

            // Append the cell to the row
            row.appendChild(cell);
        }
    }
}
