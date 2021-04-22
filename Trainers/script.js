document.getElementById("myForm").addEventListener("submit", function (event) {

    var fistName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var subject = document.getElementById("subject");
    var emptyMessage = "All fields must be completed";

    if (fistName.value === "" || lastName.value === "" || subject.value === "") {

        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    }

});
