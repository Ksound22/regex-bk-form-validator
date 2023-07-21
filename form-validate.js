// Get the form element
const form = document.querySelector('form');
// Get the div element that shows the error(s)
const errorMessageDiv = document.querySelector('#error-message');

// The RegEx patterns in a "patterns" object
const patterns = {
  nameRe: /^[a-zA-Z]{2,35}\s[a-zA-Z]{2,35}$/,
  usernameRe: /^[a-zA-Z]{3,30}(\d{1,4})?$/,
  emailRe: /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
  passwordRe:
    /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$?%"';^}{&:*()∞+=-]).*$/,
};

// Hide error message div when the page loads
errorMessageDiv.style.display = 'none';

// Add a submit event to the form
form.addEventListener('submit', validateAndSubmitForm);

// Form validation and submit function
function validateAndSubmitForm(e) {
  e.preventDefault();

  // Clear previous error messages
  errorMessageDiv.innerHTML = '';

  let nameInputValue = document.querySelector('#name').value;
  let usernameInputValue = document.querySelector('#username').value;
  let emailInputValue = document.querySelector('#email').value;
  let passwordInputValue = document.querySelector('#password').value;

  // Validate Name
  if (!patterns.nameRe.test(nameInputValue)) {
    showError('Name must have first name and last name separated by a space');
  }

  // Validate Username
  if (!patterns.usernameRe.test(usernameInputValue)) {
    showError(
      'Username must have between 3 and 30 characters and can include up to 4 digits at the end'
    );
  }

  // Validate Email
  if (!patterns.emailRe.test(emailInputValue)) {
    showError('Enter a valid email address');
  }

  // Validate Password
  if (!patterns.passwordRe.test(passwordInputValue)) {
    showError(
      'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one digit, and one special character.'
    );
  }

  // If there are no error messages, the form is valid, so you can submit it
  if (errorMessageDiv.innerHTML === '') {
    console.log(nameInputValue);
    console.log(usernameInputValue);
    console.log(emailInputValue);
    console.log(passwordInputValue);

    // Hide the errorMessageDiv element since there are no errors
    errorMessageDiv.style.display = 'none';

    // Greet user
    alert(`Hi ${usernameInputValue} 👋🏽 \nThanks for filling this form`);

    // Clear input fields with the reset() method
    document.forms[0].reset();
  } else {
    // Show the errorMessageDiv element if there are errors
    errorMessageDiv.style.display = 'block';
  }
}

// The function responsible for showing error(s)
function showError(message) {
  const errorMessageElement = document.createElement('p');

  errorMessageElement.innerText = message;
  errorMessageDiv.appendChild(errorMessageElement);
}
