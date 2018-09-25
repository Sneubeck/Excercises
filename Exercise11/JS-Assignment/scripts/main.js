var arrayItems = [];

function update() {
    //////////////////////Your Code Starts here


    ///Part 1
    var firstName = getValue('firstName');
    var lastName = getValue('lastName');
    console.log(firstName);
    console.log(lastName);

    var complete = !!(firstName && lastName);

    document.getElementById('p1_fullName').innerHTML = firstName + " " + lastName;
    document.getElementById('p1_valid').innerHTML = complete;
    document.getElementById('p1_fullNameLength').innerHTML = (firstName + lastName).length;


    // Part 2
    var emailAddress = getValue('emailAddress');
    console.log(emailAddress);

    document.getElementById('p2_email').innerHTML = emailAddress;

    var emailValid = true;
    if(emailAddress.indexOf("@") == -1) {
        emailValid = false;
    } 
    document.getElementById('p2_valid').innerHTML = emailValid;
    document.getElementById('p2_emailLength').innerHTML = emailAddress.length;

    // Part 3
    var randomNumber = getValue('randomNumber');
    console.log(randomNumber);

    document.getElementById('p3_number').innerHTML = randomNumber;

    var isNumber = !isNaN(randomNumber);
    document.getElementById('p3_valid').innerHTML = isNumber;


    // Part 4
    var arrayInput = getValue('arrayValue');
    console.log(arrayInput);

    arrayItems.push(arrayInput);

    document.getElementById('p4_arraylength').innerHTML = arrayItems.length;
    document.getElementById('p4_valid').innerHTML = arrayItems.join(" ");

    ////////////////////////Your code ends here.

}


////
var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}

