    function changeColor() {
        document.getElementById("color_p").style.color = "green";
    }

    function displayDate () {
        document.getElementById("date_p").innerText = Date();
    }

    function changePStyle() {
        document.getElementById("css_p").className = "unique";
    }

    function shiftTextAreaContentsDown() {
        let textArea_three_value = document.getElementById("textArea_three").value;
        document.getElementById("textArea_three").value = document.getElementById("textArea_two").value;
        document.getElementById("textArea_two").value = document.getElementById("textArea_one").value;
        document.getElementById("textArea_one").value = textArea_three_value;
        document.getElementById("textArea_one").focus();
    }

    function unSpoil() {
        document.getElementById("spoiler").className = "normal";
    }

/************************************************************************************/
/*************** These are all functions for the calculator *************************/
/************************************************************************************/
    var equalsWasPressedLast = false;
    var calculationString = "";
    
    function addToCalculation(buttonValue) {
        calculationString += buttonValue;
        if (document.getElementById("calculationDisplay").innerText == "NULL" || equalsWasPressedLast == true) {
            document.getElementById("calculationDisplay").innerText = "";
        }
        document.getElementById("calculationDisplay").innerText = calculationString;
        equalsWasPressedLast = false;
    }

    /**
     * @param {string} input 
     */
    function calculate () {
        if (calculationString == "") {
            document.getElementById("calculationResult").innerText = '0';
        } else {
            if (validCalculation(calculationString))  {
                calculationArray = calculationString.split("");
                var result = doCalc (calculationArray);
                document.getElementById("calculationResult").style = "color: #2aa198;" //green
                document.getElementById("calculationResult").innerText = result;
            } else {
                document.getElementById("calculationResult").style = "color: #dc322f;" //red
                document.getElementById("calculationResult").innerText = "ERROR";
            }
        }

        calculationString = "";
        equalsWasPressedLast = true;
    }

    function doCalc (input) {
        //we know it is a valid calculation string already
        //it only contains positive integers, and only uses +-/* operators
        var calcArray = [];
        while (input.length != 0) {
            var currVal = getNextVal(input);
            calcArray.push(currVal);

            if (input.length == 0) {
                break;
            }
            var currOperator = input.shift();
            calcArray.push(currOperator);
        }

        while (calcArray.length != 1) {
            var currVal = calcArray.shift();
            var operator = calcArray.shift();
            var nextVal = calcArray.shift();
            if (operator == '+') {
                calcArray.unshift(nextVal + currVal);
            } else if (operator == '-') {
                calcArray.unshift(nextVal - currVal);
            } else if (operator == '*') {
                calcArray.unshift(nextVal * currVal);
            } else if (operator == '/') {
                calcArray.unshift(nextVal / currVal);
            }
        }

        return calcArray.shift();
    }

    /**
     * Checks that the string doesn't start or end in an operator, or have 2 operators in a row
     * @param {String} input 
     */
    function validCalculation(input) {
        for (var i = 0; i < input.length; i++) {
            if (isOperator(input[i]) && i == 0) {
                return false;
            } else if (isOperator(input[i]) && i < input.length-1) {
                if (isOperator(input[i+1])) {
                    return false;
                }
            } else if (isOperator(input[i]) && i == input.length-1) {
                return false;
            }
        }
        return true;
    }
    
    function isOperator(input) {
        if (input == '*' || input == '/' || input == '+' || input == '-') {
            return true;
        }
        return false;
    }

    function isNumber(input) {
        if (input <= '9' && input >= '0') {
            return true;
        }
        return false;
    }

    /**
     * Gets a number from a string compliant with validCalculation(), ends at '\0' or an operator
     * @param {string} input 
     */
    function getNextVal (input) {
        var shiftVal = "";
        var val = 0;
        while (input.length != 0) {
            shiftVal = input.shift();
            if (isOperator(shiftVal)) {
                input.unshift(shiftVal);
                break;
            } else {
                val = val*10 + parseInt(shiftVal);
            }
        }
        return val;
    }

/************************************************************************************/
/***************************** Stopwatch functions **********************************/
/************************************************************************************/

