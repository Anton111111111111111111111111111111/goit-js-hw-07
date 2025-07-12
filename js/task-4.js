const formElem = document.querySelector('.login-form');
formElem.addEventListener('submit', evt => {
  evt.preventDefault();
  const formData = new FormData(formElem);
  let userData = Object.fromEntries(formData.entries());
  const userEmail = userData.email.trim();
  const userPassword = userData.password.trim();
  userData.email = userEmail;
  userData.password = userPassword;
  if (userEmail === '' || userPassword === '') {
    alert('All form fields must be filled in');
    return;
  }
  console.log(userData);
  formElem.reset();
});
