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
function validateEmail() {

}
