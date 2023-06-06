// building a magic box https://www.hackerrank.com/challenges/magic-square-forming/problem
// this is old code, we should change let to let???

// TODO: test_middle_value_into_bottom_value_3by3()

(function() {
    "use strict";
    let magic_box_size=3;
    let last = magic_box_size*magic_box_size;
    //let magicbox=[];

    //TODO: We need to find a better name like process_magicbox() instead of statement
    function statement (magic_box_size, last)
    {    

        if (check_odd_number(magic_box_size)==true)
        {
            let magicbox=[];
            console.log("Input value is a valid ODD number ... PROCEEDING");

            for (let m=0;m<magic_box_size;m++)
                magicbox[m]=[];
                let i = 0;
                let j = Math.floor(magic_box_size/2);

            for (let counter=1; counter<=last; counter++)
            {
                // case 1
                i = case_1(magic_box_size,i);

                // case 2
                if(i>=magic_box_size) 
                    {
                        i=i-magic_box_size;
                        console.log("I am in case 2");
                    }

                // case 3
                if(j<0)              
                    {
                        j=magic_box_size-(-j);
                        console.log("I am in case 3");
                    }

                j = case_4(magic_box_size,j);
                magicbox[i][j]=counter;
                if(counter%magic_box_size==0)
                {
                    // case 5
                    i++;
                }
                else
                {
                    // case 6
                    i--;
                    j++;
                }
            } // end of for loop

            return magicbox;
        } // if (check_odd_number(magic_box_size)==true)
 else
            {
                console.log("Input value is not valid!");
                return null;
            }
     }//end of function statement()      

   

    function check_odd_number(value){
        console.log("------- input value -------", value);
        if (value==null) return false;
        if (value < 3) return false;
        else if (value % 2 == 0) return false;
        else return true;
    }

    function case_1(magic_box_size,row_value){
        if (row_value < 0 )
            return magic_box_size-(-row_value); // 3 - (-1) = 2 (for 3 * 3)
        else return row_value;
    }

    function case_4(magic_box_size,col_value){
        if (col_value >= magic_box_size)
            return col_value-magic_box_size; // 3 - (-1) = 2 (for 3 * 3)
        else return col_value;
    }

    function test_case_1(){
        console.log("------- Running test for case 1 -------");
        let expected=2; // for 3 by 3 square
        let magic_box_size_for_test= 3;
        let row_value = -1;
        let total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        let result = case_1(magic_box_size_for_test,row_value);
        myAssert(expected,result);
    } // end of function test_case_1

    function test_case_4(){
        console.log("------- Running test for case 4 -------");
        let expected=0; // for 3 by 3 square
        let magic_box_size_for_test= 3;
        let col_value = 3;
        let total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        let result = case_4(magic_box_size_for_test,col_value);
        myAssert(expected,result);
    } // end of function test_case_4

    function test_statement_for_rowsum_3by3(){
        let expected=45; // if you all all the cell values of a 3 by 3, the number will be 45
        let magic_box_size_for_test= 3;
        let total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        let magicBoxTest = statement(magic_box_size_for_test,total_cells_for_test);
        let result = 0; 

        for (let row = 0; row <= 2; row++){
            for (let col = 0; col <= 2; col++){
                let temp = 0;
                temp = parseInt(magicBoxTest[row][col]);
                result = result + parseInt(temp);
            }
        }  // for outerloop
        myAssert(expected,result);
    } //teststatement_for_rowsum_3by3()

    function test_statement_for_3by3(){
        let expected=8; // since the first cell of a 3 by 3 (row =0,column=0) will have the value 8 if filled correctly
        let magic_box_size_for_test= 3;
        let total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        let magicBoxTest = statement(magic_box_size_for_test,total_cells_for_test);
        myAssert(expected,magicBoxTest[0][0]);
    }

    function test_statement_for_5by5(){
        let expected=[];
        expected [0]  = 17; // row 0, column 1 
        expected [1]  = 24; // row 0, column 2 
        expected [2]  = 1;  // row 0, column 3
        expected [3]  = 8;  // row 0, column 4
        expected [4]  = 15; // row 0, column 5

        let magic_box_size_for_test= 5;
        let total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        let result = statement(magic_box_size_for_test,total_cells_for_test);
        myAssert(expected[0],result[0][0]);
    }

    function myAssert(expected, result){
        if (expected== result)
        {
            //console.log("test has passed -> result =",result, " expected value = ", expected);
        }
        else {
            //console.log("test has failed -> result =",result, " expected value = ", expected);
            //console.log("expected was: ",expected);
            //console.log("result was: ",result);
        }
    } // end of myAssert

    function test_middle_value_into_bottom_value_3by3(){
        //       We can add a unit test to multiply the middle value 1,1 with bottom middle value 2,1 
        //       that should be equal to the sum of all values
        //       for example in a 3 by 3 we have 5 * 9 = 45
        //       which is also the total of all cells in a 3 by 3
        //       applies to all cases for larger odd number boxes

        let expected=45; // if you add all the cell values of a 3 by 3, the number will be 45
        let magic_box_size_for_test= 3;
        let total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        let magicBox = statement(magic_box_size_for_test,total_cells_for_test);
        let result = parseInt(magicBox[1,1]) * parseInt(magicBox[2,1]);

        //console.log("1,1 ", parseInt(magicBox[1,1]), " 2,1 ", parseInt(magicBox[2,1]));
        /*
        for (let row = 0; row <= 2; row++){
            for (let col = 0; col <= 2; col++){
                let temp = 0;
                temp = parseInt(magicBoxTest[row][col]);
                result = result + parseInt(temp);
            }
        }  // for outerloop
        */
        myAssert(expected,result);
    } //teststatement_for_rowsum_3by3()

    function printstatement(mymagicbox){
        for (let row=0; row<=magic_box_size-1; row++){
            console.log("\n");
            for (let col=0; col<=magic_box_size-1; col++)
            {
                console.log("value of magic box cell is: ",mymagicbox[row][col], 
                " where row is: ",row, " and column is: ",col);
            }
        }
    } 

 // start of actual code execution
    if (statement(magic_box_size,last)!=null)
        printstatement(magicbox);

     console.log(" =================== Running Tests ====================");
     test_statement_for_3by3();
     test_statement_for_5by5();
     test_statement_for_rowsum_3by3();
     test_case_1();
     test_case_4();
     test_middle_value_into_bottom_value_3by3()
}());
