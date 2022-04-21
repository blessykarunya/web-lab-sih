function validateForm() {
    var x = document.forms["feedbackForm"]["fname"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["feedbackForm"]["lname"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["feedbackForm"]["mail"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["feedbackForm"]["num"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["feedbackForm"]["birthday"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["feedbackForm"]["exp"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["feedbackForm"]["rate"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
  }