// Building a magic box: https://www.hackerrank.com/challenges/magic-square-forming/problem

(function() {
    "use strict";

    const magicBoxSize = 3;
    const last = magicBoxSize * magicBoxSize;
    const magicBox = [];

    function processMagicBox(magicBoxSize, last) {
        if (checkOddNumber(magicBoxSize)) {
            console.log("Input value is a valid ODD number... PROCEEDING");

            for (let m = 0; m < magicBoxSize; m++) {
                magicBox[m] = [];
            }

            let i = 0;
            let j = Math.floor(magicBoxSize / 2);

            for (let counter = 1; counter <= last; counter++) {
                i = handleCase1(magicBoxSize, i);
                if (i >= magicBoxSize) {
                    i -= magicBoxSize;
                    console.log("I am in case 2");
                }
                if (j < 0) {
                    j = magicBoxSize - (-j);
                    console.log("I am in case 3");
                }
                j = handleCase4(magicBoxSize, j);
                magicBox[i][j] = counter;
                if (counter % magicBoxSize === 0) {
                    i++;
                } else {
                    i--;
                    j++;
                }
            }

            return magicBox;
        } else {
            console.log("Input value is not valid!");
            return null;
        }
    }

    function printMagicBox() {
        for (let row = 0; row < magicBoxSize; row++) {
            console.log("\n");
            for (let col = 0; col < magicBoxSize; col++) {
                console.log(
                    "Value of magic box cell is: ",
                    magicBox[row][col],
                    " where row is: ",
                    row,
                    " and column is: ",
                    col
                );
            }
        }
    }

    function checkOddNumber(value) {
        console.log("------- input value -------", value);
        if (value === null) return false;
        if (value < 3) return false;
        return value % 2 !== 0;
    }

    function handleCase1(magicBoxSize, rowValue) {
        if (rowValue < 0) {
            return magicBoxSize - (-rowValue);
        } else {
            return rowValue;
        }
    }

    function handleCase4(magicBoxSize, colValue) {
        if (colValue >= magicBoxSize) {
            return colValue - magicBoxSize;
        } else {
            return colValue;
        }
    }

    function myAssert(expected, result) {
        if (expected === result) {
            console.log(
                "Test has passed -> result =",
                result,
                " expected value =",
                expected
            );
        } else {
            console.log(
                "Test has failed -> result =",
                result,
                " expected value =",
                expected
            );
            console.log("Expected:", expected);
            console.log("Result:", result);
        }
    }

    function runTests() {
        console.log("========= Running Tests =========");
        testCase1();
        testCase4();
        testProcessMagicBox();
    }

    function testCase1() {
        console.log("------- Running test for case 1 -------");
        const expected = 2; // for 3 by 3 square
        const magicBoxSizeForTest = 3;
        const rowValue = -1;
        const result = handleCase1(magicBoxSizeForTest, rowValue);
        myAssert(expected, result);
    }

    function testCase4() {
        console.log("------- Running test for case 4 -------");
        const expected = 0; // for 3 by 3 square
        const magicBoxSizeForTest = 3;
        const colValue = 3;
        const result = handleCase4(magicBoxSizeForTest, colValue);
        myAssert(expected, result);
    }

    function testProcessMagicBox() {
        const expected = 45; // if you add all the cell values of a 3 by 3, the number will be 45
        const magicBoxSizeForTest = 3;
        const totalCellsForTest = magicBoxSizeForTest * magicBoxSizeForTest;
        const magicBoxTest = processMagicBox(
            magicBoxSizeForTest,
            totalCellsForTest
        );
        let result = 0;

        for (let row = 0; row < magicBoxSizeForTest; row++) {
            for (let col = 0; col < magicBoxSizeForTest; col++) {
                const temp = parseInt(magicBoxTest[row][col]);
                result += parseInt(temp);
            }
        }

        myAssert(expected, result);
    }

    // Start of actual code execution

    const magicBoxResult = processMagicBox(magicBoxSize, last);
    if (magicBoxResult !== null) {
        printMagicBox();
    }

    function testCheckOddNumber() {
        console.log("------- Running test for checkOddNumber -------");
        let expected = true;
        let value = 3;
        let result = checkOddNumber(value);
        myAssert(expected, result);
      
        expected = false;
        value = 4;
        result = checkOddNumber(value);
        myAssert(expected, result);
      
        expected = false;
        value = 2;
        result = checkOddNumber(value);
        myAssert(expected, result);
      
        expected = false;
        value = 1;
        result = checkOddNumber(value);
        myAssert(expected, result);
      }
      
      function testHandleCase1() {
        console.log("------- Running test for handleCase1 -------");
        const expected = 2; // for 3 by 3 square
        const magicBoxSizeForTest = 3;
        const rowValue = -1;
        const result = handleCase1(magicBoxSizeForTest, rowValue);
        myAssert(expected, result);
      }
      
      function testHandleCase4() {
        console.log("------- Running test for handleCase4 -------");
        const expected = 0; // for 3 by 3 square
        const magicBoxSizeForTest = 3;
        const colValue = 3;
        const result = handleCase4(magicBoxSizeForTest, colValue);
        myAssert(expected, result);
      }
      
      function runAllTests() {
        console.log("========= Running All Tests =========");
        testCheckOddNumber();
        testHandleCase1();
        testHandleCase4();
        testProcessMagicBox();
      }
      
      runAllTests();
    
})();

