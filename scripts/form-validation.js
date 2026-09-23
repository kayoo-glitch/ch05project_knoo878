/*
Name: Kay Nae Oo
Date: 9/22/2026
*/

/*
This function will tell you how many amount of your input is incomplete.
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

/*
This reads how many character you typed.
*/
const emailInput = document.getElementById('email')
Input.addEventListener('email', validateEmail)
/*
This function will tell you if the email input has 8 character or not.
*/
function validateEmail() {
    const emailLength = input.value.length
    const minimumLength = 8
    var response = "";

    if (emailLength >= minimumLength) {
        response += "The email input has 8 characters."
    } else {
        response += "The email input has to have at least 8 characters."
    }
}
/*
This function will alert only if input is empty or invalid.
*/
function alert() {
    if (document.getElementById('fullName').value == "" || document.getElementById('email').value == "" || document.getElementById('writeDown').value == "") {
        alert("If form submission is blocked Its due to incomplete or invalid fields.")
    }
}

