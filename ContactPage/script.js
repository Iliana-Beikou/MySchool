document.getElementById("myForm").addEventListener("submit", function (event) {

    var fistName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    var email = document.getElementById("email");
    var emptyMessage = "All fields must be completed";

    if (fistName.value === "" || lastName.value === "" || email.value === "") {

        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    }


});
