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
    var calculatorString = "";
    /**
     * @param {string} input 
     */
    function calculate () {
        if (calculatorString == "") {
            document.getElementById("calculatorResultString").innerText = '0';
        } else {
            if (validCalculation(calculatorString) == true)  {

            }
            let calculation = 
            document.getElementById("calculatorResultString").innerText = calculatorString;
        }





        calculatorString = "";
        equalsWasPressedLast = true;
    }

    function calculatorButtonPress (buttonString) {
        calculatorString += buttonString;
        if (document.getElementById("buttonString_p").innerText == "NULL" || equalsWasPressedLast == true) {
            document.getElementById("buttonString_p").innerText = "";
        }
        document.getElementById("buttonString_p").innerText += buttonString;
        equalsWasPressedLast = false;
    }
