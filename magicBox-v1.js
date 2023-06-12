
"use strict";

console.log("reached so far...");

let myMagicBox = [];

generateMagicBox(3, 3);
printMagicBox();
//testMagicBox(myMagicBox);

function generateMagicBox(rows, columns) {
	console.log(" reached generate magic box...");
	
	let count = 0;
	let row = 0;
	let column = 0;
	let incomplete = false;
  
	// Initialize the magicBox array
	for (let i = 0; i < rows; i++) {
	  myMagicBox[i] = [];
	  for (let j = 0; j < columns; j++) {
		myMagicBox[i][j] = 0;
		console.log ("value of i, j and cell value: ", i,j,myMagicBox[i][j]);
	  }
	}
  
	while (incomplete === false) {
		console.log(" in the while loop, count is: ", count);
	  count++;
	  row, column, count, incomplete = fillEachCell(row, column, count, incomplete);
	  // loop will stop when incomplete gets 'true' value
	}
  
	console.log("reached the end of generate magic box");
	
}

function printMagicBox() {
	console.log("reached the printing....");
	console.log(" row length: ", myMagicBox.length);
	console.log(" column length: ", myMagicBox[0].length);
	
	for (let i = 0; i < myMagicBox.length; i++) {
		for (let j = 0; j < myMagicBox[i].length; j++) {
		  console.log ("**********************value of row-length, column-length, i, j and cell value: ", 
                        myMagicBox.length, myMagicBox[i].length,
		  				i,j,myMagicBox[i][j]);
		}
	}
}
  
function updateMagicBoxAsPerRule1(row, column, count) {
	console.log(" reached updateMagicBoxAsPerRule1 ");
	
    return 1;
    //myMagicBox[0,1] = 1;
	//console.log(" ******************************updated magicBox: 0,1 ", myMagicBox[0,1]);
	//printMagicBox();
}


  function fillEachCell(row, column, count, incomplete) {
	//let newCellRowPosition = calculateNextRowCellPosition(row, column, count);
	//let newCellColumnPosition = calculateNextColumnCellPosition(row, column, count);
	//let whichRule = calculateRule(row, column, count);
    let value = 0;
	let whichRule=1; // just to avoid processing below code for now
	if (whichRule === 1) {
	  value = updateMagicBoxAsPerRule1(row, column, count);
	} else if (whichRule === 2) {
	 //updateMagicBoxAsPerRule2(row, column, count);
	} else if (whichRule === 3) {
	  //updateMagicBoxAsPerRule3(row, column, count);
	} else if (whichRule === 4) {
	  //updateMagicBoxAsPerRule4(row, column, count);
	} else if (whichRule === 5) {
	  //updateMagicBoxAsPerRule5(row, column, count);
	} else if (whichRule === 6) {
	  //updateMagicBoxAsPerRule6(row, column, count);
	}

	incomplete = isTheMagicBoxFilled();

	function isTheMagicBoxFilled() {
		return true;
	}
	return row, column, count, incomplete; 
  }
  

