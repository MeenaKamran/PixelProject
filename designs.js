// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  const pickedColor = document.getElementById('colorPicker').value;
  const grid = document.getElementById('pixel_canvas');

  let dynTableHtmlString = "";
  $('#pixel_canvas').empty();
  for (let i=0; i < height; i++) {
    dynTableHtmlString += '<tr>';
    for (let j=0; j < width; j++) {
      dynTableHtmlString += '<td></td>';
    }
    dynTableHtmlString += '</tr>';
  }
  $('#pixel_canvas').append(dynTableHtmlString);

  const rows = grid.getElementsByTagName('tr');
  for (let i=0; i<height; i++) {
    const row = grid.rows[i];
    for (let j=0; j<width; j++) {
      row.children[j].addEventListener('click', function() {
        this.style.backgroundColor = pickedColor;
      });
    }
  }

}

document.getElementById('sizePicker').addEventListener('submit', function(){

  makeGrid();
  event.preventDefault();

});
