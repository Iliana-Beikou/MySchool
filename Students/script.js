document.getElementById("myForm").addEventListener("submit", function(event){
    var fistName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName");
    var dateofbirth = document.getElementById("dateofbirth");
    var tuition = document.getElementById("tuition");
    var emptyMessage = "All fields must be completed";

    if (fistName.value === "" || lastName.value === "" || dateofbirth.value == "" || tuition.value == "") {
        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById("emptyInputs").innerHTML = "";
        var now = new Date();
        var dateofbirthObject = new Date(dateofbirth.value);

        if((now.getFullYear() - dateofbirthObject.getFullYear()) < 18){
            var dateerror = "Student must be at least 18 years old";
            document.getElementById("dateofbirthValidation").innerHTML = dateerror;
            event.preventDefault();
        } 
    }
});
