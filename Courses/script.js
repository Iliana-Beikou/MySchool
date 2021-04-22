


  document.getElementById("myForm").addEventListener("submit", function(event){

    var title = document.getElementById("title");
    var stream = document.getElementById("stream");
    var type = document.getElementById("type");
    var startdate = document.getElementById("startdate");
    var enddate = document.getElementById("enddate");
    var emptyMessage = "All fields must be completed";

    if(title.value === "" || stream.value === "" || type.value === "" || startdate.value === "" || enddate.value === "" ){
        
        document.getElementById("emptyInputs").innerHTML = emptyMessage;
        event.preventDefault();
    }else{
        document.getElementById("emptyInputs").innerHTML = "";
        var now = new Date();
        var startdateObject = new Date(startdate.value);

        if((now.getFullYear() - startdateObject.getFullYear()) > 2){
            var dateerror = "Date is not valid. Coding bootcamp has been running for only 2 years.";
            document.getElementById("startdateValidation").innerHTML = dateerror;
            event.preventDefault();
        } 
        
        var pattern = /^CB/;

        var titleFormat = pattern.test(title.value);

        if(titleFormat !== true){
            var message = "Course name must start with CB";
            document.getElementById("titleValidation").innerHTML = message;
            event.preventDefault();
        }
        else{
            document.getElementById("titleValidation").innerHTML = "";
        }


    }

});






