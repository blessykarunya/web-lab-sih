function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["lname"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["mail"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["num"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["birthday"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["exp"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
    var x = document.forms["myForm"]["rate"].value;
    if (x == "" || x == null)
     {
      alert("The given fields must be filled out");
      return false;
    }
  }