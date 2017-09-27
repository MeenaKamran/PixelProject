// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
  const height = $('#input_height').val();
  const width = $('#input_width').val();
  const grid = document.getElementById('pixel_canvas');

  //let dynTableHtmlString = "";
  $('#pixel_canvas').empty();
  //creates the grid height X width dimension
  for (let i=0; i < height; i++) {
    const row = grid.insertRow(i);
    for (let j=0; j < width; j++) {
      const cell = row.insertCell(j);
      //adds click event to each cell where when the user clicks
      //into the cell the background color of the cell changes to the
      //one that was selected in the colorPicker input
      cell.addEventListener('click', function() {
        const pickedColor = document.getElementById('colorPicker').value;
        this.style.backgroundColor = pickedColor;
      });
    }
  }
  $('#pixel_canvas').append(dynTableHtmlString);

}


//the sizePicker's submit button has an eventLister attached, such that
//when the submit button is clicked the makeGrid function is called to
//create the gird
document.getElementById('sizePicker').addEventListener('submit', function(){

  makeGrid();
  event.preventDefault();

});
