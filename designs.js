// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  const grid = document.getElementById('pixel_canvas');

  let dynTableHtmlString = "";
  $('#pixel_canvas').empty();
  for (let i=0; i < height; i++) {
    const row = grid.insertRow(i);
    for (let j=0; j < width; j++) {
      const cell = row.insertCell(j);
      cell.addEventListener('click', function() {
        const pickedColor = document.getElementById('colorPicker').value;
        this.style.backgroundColor = pickedColor;
      });
    }
  }
  $('#pixel_canvas').append(dynTableHtmlString);

}

document.getElementById('sizePicker').addEventListener('submit', function(){

  makeGrid();
  event.preventDefault();

});
