
"use strict";

console.log("reached so far...");

let myMagicBox = generateMagicBox(3, 3);
printMagicBox(myMagicBox);
//testMagicBox(myMagicBox);

function generateMagicBox(rows, columns) {
	console.log(" reached generate magic box...");
	let magicBox = [];
	let count = 0;
	let row = 0;
	let column = 0;
	let incomplete = false;
  
	// Initialize the magicBox array
	for (let i = 0; i < rows; i++) {
	  magicBox[i] = [];
	  for (let j = 0; j < columns; j++) {
		magicBox[i][j] = 0;
		console.log ("value of i, j and cell value: ", i,j,magicBox[i][j]);
	  }
	}
  
	console.log("reached the end of generate magic box");

	printMagicBox(magicBox);
	magicBox = updateMagicBoxAsPerRule1(magicBox, row, column, count);
	printMagicBox(magicBox);
	return magicBox;
}

function printMagicBox(magicBox) {
	console.log("reached the printing....");
	console.log(" row length: ", magicBox.length);
	console.log(" column length: ", magicBox[0].length);
	
	for (let i = 0; i < magicBox.length; i++) {
		//magicBox[i] = [];
		for (let j = 0; j < magicBox[i].length; j++) {
		  //magicBox[i][j] = 0;
		  console.log ("**********************value of row-length, column-length, i, j and cell value: ", magicBox.length, magicBox[i].length,
		  				i,j,magicBox[i][j]);
		}
	}
}
  
function updateMagicBoxAsPerRule1(magicBox, row, column, count) {
	console.log(" reached updateMagicBoxAsPerRule1 ");
	
	magicBox [0,0] = 0;
	magicBox[0,1] = 1;
	magicBox[0,2] = 0;
	
	magicBox [1,0] = 0;
	magicBox[1,1] = 0;
	magicBox[1,2] = 0;
	
	magicBox [2,0] = 0;
	magicBox[2,1] = 0;
	magicBox[2,2] = 0;
	
	console.log(" ******************************updated magicBox: 0,1 ", magicBox[0,1]);
	printMagicBox(magicBox);
	return magicBox;
}
