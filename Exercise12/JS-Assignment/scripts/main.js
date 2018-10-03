function update() {
    /* ===================
        Your code starts here
    =====================*/
	
    //Create new array.

    let messages = [];

    //If first name is empty. Add it to the array
    if (!fname) {
        messages.push("First Name is required");
    }

    //If last name is empty. Add it to the array
    if (!lname) {
        messages.push("Last  Name is required");
    }

    //Email is empty. Add it to the array
    if (!email) {
        messages.push("Email is required");
    }

    //Loop through array
    let error="";
    for (let i = 0; i < messages.length; i++) {
        error+=messages[i] + "</br>";
    }
    document.getElementById("error-list").innerHTML = error;

    //Create javascript object for the user
    let user = {fname:"shelby", lname:"neubeck", email:"email@email.com"};

    let fullName =  "fname" + " " + "lname";

    //log the user object to the console
    console.log(user);

    //Check to see if everything is valid

    //Create string for today's date. Remember, if you hard code this, it will be invalid tomorrow.
    let submittedDate = new Date().toDateString();


    //Make the alert box.
    alert("submitted on" + " " + submittedDate);

    /* ===================
        Your code ends here
    =====================*/


}



var btn = document.getElementById('btnUpdate');
btn.addEventListener('click', update);

function getValue(id) {
    return getElm(id).value;
}

function getElm(id) {
    return document.getElementById(id);
}