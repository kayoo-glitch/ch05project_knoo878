/*
Name: Kay Nae Oo
Date: 9/22/2026
*/

function checkMissing() {
    
    var emptyField = "";

    if (document.getElementById('fullName').value == "" && document.getElementById('email').value == "" && document.getElementById('writeDown').value == "" ) {
        emptyField += "You have 3 input that is incomplete";
    }

    if (document.getElementById('fullName').value == "" && document.getElementById('writeDown').value == "") {
        emptyField += "You have 2 input that is incomplete";
    }
    if (document.getElementById('fullName').value == "" && document.getElementById('email').value == "") {
        emptyField += "You have 2 input that is incomplete";
    }
    if (document.getElementById('email').value == "" && document.getElementById('writeDown').value == "") {
        emptyField += "You have 2 input that is incomplete";
    }

    if (document.getElementById('fullName').value == "") {
        emptyField += "You have 1 input that is incomplete";
    }
    if (document.getElementById('email').value == "") {
        emptyField += "You have 1 input that is incomplete";
    }
    if (document.getElementById('writeDown').value == "") {
        emptyField += "You have 1 input that is incomplete";
    }
}
const emailInput = document.getElementById('email')
Input.addEventListener('email', validateEmail)

function validateEmail() {
    const emailLength = input.value.length
    const minimumLength = 8
    var response = "";

    if (emailLength === minimumLength) {
        response += "The email input has 8 characters."
    } else {
        response += "The email input has to have at least 8 characters."
    }
}
