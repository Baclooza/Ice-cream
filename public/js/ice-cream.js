document.getElementById("ice-cream-form").onsubmit = () => {

  let isValid = true;

  // Clear all errors
  clearErrors();

  // Validate name
  let name = document.getElementById("name").value.trim();
  if (name == "") {
    document.getElementById("err-name").style.display = "block";
    isValid = false;
  }

  // Validate email
  let isEmailValid = false;
  let email = document.getElementById("email").value.trim();
  if (email == "") {
    document.getElementById("err-email-empty").style.display = "block";
    isValid = false;
  } else {
    for (let i = 0; i < email.length; i++) {
      if (email[i] == '@') {
        isEmailValid = true;
      }
    }

    if (!isEmailValid) {
      document.getElementById("err-email-format").style.display = "block";
      isValid = false;
    }
  }

  // Validate flavor
  let flavor = document.getElementById("flavor").value.trim();
  if (flavor == "none"){
    document.getElementById("err-flavor").style.display = "block";
    isValid = false;
  }

  // Validate cone
  let coneSelected = false;
  let coneButtons = document.getElementsByName("cone");
  for (let i = 0; i < coneButtons.length; i++){
    if (coneButtons[i].checked){
      coneSelected = true;
    }
  }

  if (!coneSelected){
    document.getElementById("err-cone").style.display = "block";
    isValid = false;
  }

  return isValid;
};

function clearErrors() {
  let errors = document.getElementsByClassName("err");

  for (let i = 0; i < errors.length; i++) {
    errors[i].style.display = "none";
  }
}
