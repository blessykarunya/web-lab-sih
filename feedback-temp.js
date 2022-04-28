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
}