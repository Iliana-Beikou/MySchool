document.getElementById("myForm").addEventListener("submit", function(event){

    var title = document.getElementById("title");
    var description = document.getElementById("description");
    var deadline = document.getElementById("deadline");
    var oralMark = document.getElementById("oralmark");
    var totalMark = document.getElementById("totalmark");
    var emptyMessage = "All fields must be completed";

    if(title.value === "" || description.value === "" || deadline.value === "" || oralMark.value === "" || totalMark.value === "" ){
        
        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    }else{
        if(oralMark.value > 20){
            var oralmarkError = "Oral mark must not exceed 20 points.";
            document.getElementById("oralmarkValidation").innerHTML = oralmarkError;
            event.preventDefault();
        }
        else if(oralMark.value < 1){
            var oralmarkError = "Oral mark cannot be less than 0.";
            document.getElementById("oralmarkValidation").innerHTML = oralmarkError;
            event.preventDefault();
        }
        if(totalMark.value > 100){
            var totalmarkError = "Total mark must not exceed 100 points.";
            document.getElementById("totalmarkValidation").innerHTML = totalmarkError;
            event.preventDefault();
        }else if(totalMark.value < 1 ){
            var totalmarkError = "Total mark cannot be less than 0.";
            document.getElementById("totalmarkValidation").innerHTML = totalmarkError;
            event.preventDefault();
        }
    }

});