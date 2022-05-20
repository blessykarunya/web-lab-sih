function validateForm() {
    var fname = document.forms["feedbackForm"]["fname"].value;
    var lname = document.forms["feedbackForm"]["lname"].value;
    var mail = document.forms["feedbackForm"]["mail"].value;
    var num = document.forms["feedbackForm"]["num"].value;
    var birthday = document.forms["feedbackForm"]["birthday"].value;
    var exp = document.forms["feedbackForm"]["exp"].value;
    var rate = document.forms["feedbackForm"]["rate"].value;
    
    if (fname == "" || fname == null || lname == "" || lname == null || mail == "" || mail == null || num == "" || num == null || birthday == "" || birthday == null || exp == "" || exp == null || rate == "" || rate == null) {
        alert("The given fields must be filled out");
    }
    else
    {
        alert("FEEDBACK RECEIVED.....Thanks for filling the form");
    }
}

function checkEmpty(element) {
    var obj = document.getElementById(element);
    var alert_obj = document.getElementById(element + "-alert");
    if (obj.value == null || obj.value == "") {
        obj.style.borderColor = "rgb(255, 79, 47)"
        alert_obj.style.display = "block";
    }
    else {
        obj.style.borderColor = "#1C55A2";
        alert_obj.style.display = "none";
    }
}