document.getElementById("ice-cream-form").onsubmit = () => {

  let isValid = true;

  // Clear all errors
  clearErrors();

  // Validate name
  let name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("err-name").style.display = "block";
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
