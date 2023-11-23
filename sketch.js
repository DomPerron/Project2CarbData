let data;
let url =  "Food.csv"; 



function preload() {
  data = loadTable(url, 'csv', 'header'); 
}

function setup() {
let canvas =  createCanvas(600, 400);
canvas.parent('data');
//noLoop(); 
  
  //add in images 
}

function draw() {
  background(255,76, 98); // this is a black bg

  
  if (data) {
    let numRows = data.getRowCount();

    for (i=0; i < numRows; i++){
    
    let carbs = data.getColumn('Carbs');
    let names = data.getColumn('Food');
    
    fill(255); // impacts the text 
    text(names[i], 200, 100 + i * 50);
    fill(253, 375, 200); //this fill impacts the bar graphs
    rect(50, 100 + i * 50 , carbs[i], 20);
    }
  }
}