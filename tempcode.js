
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
  
	while (incomplete === false) {
		console.log(" in the while loop, count is: ", count);
	  count++;
	  magicBox, row, column, count, incomplete = fillEachCell(magicBox, row, column, count, incomplete);
	  // loop will stop when incomplete gets 'true' value
	}
  
	console.log("reached the end of generate magic box");
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
	magicBox[0,1] = 1;
	console.log(" ******************************updated magicBox: 0,1 ", magicBox[0,1]);
	printMagicBox(magicBox);
	return magicBox;
}


  function fillEachCell(magicBox, row, column, count, incomplete) {
	//let newCellRowPosition = calculateNextRowCellPosition(magicBox, row, column, count);
	//let newCellColumnPosition = calculateNextColumnCellPosition(magicBox, row, column, count);
	//let whichRule = calculateRule(magicBox, row, column, count);
    
	let whichRule=1; // just to avoid processing below code for now
	if (whichRule === 1) {
	  updateMagicBoxAsPerRule1(magicBox, row, column, count);
	} else if (whichRule === 2) {
	  updateMagicBoxAsPerRule2(magicBox, row, column, count);
	} else if (whichRule === 3) {
	  updateMagicBoxAsPerRule3(magicBox, row, column, count);
	} else if (whichRule === 4) {
	  updateMagicBoxAsPerRule4(magicBox, row, column, count);
	} else if (whichRule === 5) {
	  updateMagicBoxAsPerRule5(magicBox, row, column, count);
	} else if (whichRule === 6) {
	  updateMagicBoxAsPerRule6(magicBox, row, column, count);
	}

	incomplete = isTheMagicBoxFilled(magicBox);

	function isTheMagicBoxFilled(magicBox) {
		return true;
	}

	
	return magicBox, row, column, count, incomplete; // value of incomplete
  }
  

