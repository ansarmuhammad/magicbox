// test case 1 only where in a 3 by 3 magic box we start with first row, middle column
// then we try to find next cell which should be last row and last column

(function() {
    "use strict";

    let magic_box_size=3;
    let last = magic_box_size*magic_box_size;
    let magicbox=[];

    function statement (magic_box_size, last)
    {    
            console.log("Input value is a valid ODD number ... PROCEEDING");
            for (let m=0;m<magic_box_size;m++)
                magicbox[m]=[];

            let i = 0;
            let j = Math.floor(magic_box_size/2);
            for (let counter=1; counter<=last; counter++)
            {
                // case 1

                if (i < 0 )
                    i = case_1(magic_box_size,i);
                
                else 
                    console.log("in the else for i<0");
            
                counter = last; //to end the for loop            }
            }

 

            return magicbox;


    

     }//end of function statement()      


 
    function case_1(magic_box_size,row_value){

            return magic_box_size-(-row_value);// 3 - (-(-1)) = 3 -1 = 2

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

 

    function myAssert(expected, result){
    if (expected== result)
    {
        console.log("test has passed",result, expected);
    }
    else {
        console.log("test has failed", result, expected);
        console.log("expected was: ",expected);
        console.log("result was: ",result);
    }

 

    } // end of myAssert

 // start of actual code execution


     console.log(" =================== Running Tests ====================");
     test_case_1();

    }());
        
