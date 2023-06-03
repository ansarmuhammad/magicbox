// building a magic box
// this is old code, we should change var to let???

(function() {
    "use strict";
    var magic_box_size=3;
    var last = magic_box_size*magic_box_size;
    var magicbox=[];

    function statement (magic_box_size, last)
    {    

        if (check_odd_number(magic_box_size)==true)
        {
            console.log("Input value is a valid ODD number ... PROCEEDING");

            for (var m=0;m<magic_box_size;m++)
                magicbox[m]=[];
                var i = 0;
                var j = Math.floor(magic_box_size/2);

            for (var counter=1; counter<=last; counter++)
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

    function printstatement(){
        for (var row=0; row<=magic_box_size-1; row++){
            console.log("\n");
            for (var col=0; col<=magic_box_size-1; col++)
            {
                console.log("value of magic box cell is: ",magicbox[row][col], " where row is: ",row, " and column is: ",col);
            }
        }
    } 

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
        var expected=2; // for 3 by 3 square
        var magic_box_size_for_test= 3;
        var row_value = -1;
        var total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        var result = case_1(magic_box_size_for_test,row_value);
        myAssert(expected,result);
    } // end of function test_case_1

    function test_case_4(){
        console.log("------- Running test for case 4 -------");
        var expected=0; // for 3 by 3 square
        var magic_box_size_for_test= 3;
        var col_value = 3;
        var total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        var result = case_4(magic_box_size_for_test,col_value);
        myAssert(expected,result);
    } // end of function test_case_4

    function teststatement_for_rowsum_3by3(){
        var expected=45; 
        var magic_box_size_for_test= 3;
        var total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        var magicBoxTest = statement(magic_box_size_for_test,total_cells_for_test);
        var result = 0; 

        for (var row = 0; row <= 2; row++){
            for (var col = 0; col <= 2; col++){
                let temp = 0;
                temp = parseInt(magicBoxTest[row][col]);
                result = result + parseInt(temp);
            }
        }  // for outerloop
        myAssert(expected,result);
    } //teststatement_for_rowsum_3by3()

    function teststatement_for_3by3(){
        var expected=8; 
        var magic_box_size_for_test= 3;
        var total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        var magicBoxTest = statement(magic_box_size_for_test,total_cells_for_test);
        myAssert(expected,magicBoxTest[0][0]);
    }

    function teststatement_for_5by5(){
        var expected=[];
        expected [0]  = 17;
        expected [1]  = 24;
        expected [2]  = 1;
        expected [3]  = 8;
        expected [4]  = 15;

        var magic_box_size_for_test= 5;
        var total_cells_for_test = magic_box_size_for_test * magic_box_size_for_test;
        var result = statement(magic_box_size_for_test,total_cells_for_test);
        myAssert(expected[0],result[0][0]);
    }

 

    function myAssert(expected, result){

 

        if (expected== result)

        {

            console.log("test has passed -> result =",result, " expected value = ", expected);

        }

        else {

            console.log("test has failed -> result =",result, " expected value = ", expected);

            console.log("expected was: ",expected);

            console.log("result was: ",result);

        }

 

    } // end of myAssert

 // start of actual code execution

 

    if (statement(magic_box_size,last)!=null)

         printstatement();

     

     console.log(" =================== Running Tests ====================");

     teststatement_for_3by3();

     teststatement_for_5by5();

     teststatement_for_rowsum_3by3();

     test_case_1();

     test_case_4();

          

}());
