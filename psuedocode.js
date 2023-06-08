// just plain psuedocode

main()

{

int myMagicBox = generateMagicBox(3,3);

printMagicBox(myMagicBox);

testMagicBox(myMagicBox);


}


generateMagicBox(3,3)
{
	int magicBox[][];
	int count=0;

	for (row =0; row<3; row++)
	{

		count++;
		for (column=0; column<3; column++)
		{

			fillEachCell(magicBox,row,column,count);
		} // end of inner for loop
	} // end of out for loop  

} // end of generateMagicBox function


fillEachCell(magicBox,row,column,count)
{
	// GENERAL RULE: You always try to go diagonally up towards the right			
	// rule 1 start with top center			
	// rule 2 increment by 1 and place in the row above the current one and to the right			
	// rule 3 if you go out of the box from the top by following rule 2 you select the last row from that column (immediate column)			
	// rule 4 if you out of the box from the right by following rule 2 you select the first column from the row above (immediate row)		
	// rule 5 by following rule 2 you end up in a cell that is already occupied , then select the row below the same cell			
	// rule 6 if you go out of the box from the top and right you follow rule 5			

	int newCellRowPosition = calcutateNextRowCellPosition(magicBox,row,column, count);
	int newCellColumnPosition = calcutateNextColumnCellPosition(magicBox,row,column, count);

	if rule1 = true
		update magicBoxAsPerRule1(magicBox,row,column,count);
		return magicBox;
	else if rule 2 = true
		update magicBoxAsPerRule2(magicBox,row,column,count);
		return magicBox;
	else if rule 3 = true
		update magicBoxAsPerRule3(magicBox,row,column,count);
		return magicBox;
	else if rule 4 = true
		update magicBoxAsPerRule4(magicBox,row,column,count);
		return magicBox;
	else if rule 5 = true
		update magicBoxAsPerRule5(magicBox,row,column,count);
		return magicBox;
	else if rule 6 = true
		update magicBoxAsPerRule6(magicBox,row,column,count);
		return magicBox;
}


