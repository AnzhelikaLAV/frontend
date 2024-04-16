function validateForm() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    alert("Data submitted");
  } else {
    alert("Password and Confirm Password do not match");
  }
}
