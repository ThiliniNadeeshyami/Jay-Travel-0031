
  function validEntry() {
    var fname = document.forms["FormContact"]["Firstname"].value;
    var lname = document.forms["FormContact"]["Lastname"].value;
    // var chkbox = document.forms["FormContact"]["signIn"].value;
   
    if (lname == null || fname =="") {
        alert("First Name and Last Name cannot be Null");
    }
    else{
      alert("success")
    }
   
  }
