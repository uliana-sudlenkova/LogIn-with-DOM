/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/
document.getElementById('username').insertAdjacentHTML('beforeBegin','<label for="username"> Username </label>');

document.getElementById('password').insertAdjacentHTML('beforeBegin','<label for="password"> Password </label>');

document.getElementById('confirmPassword').insertAdjacentHTML('beforeBegin','<label for="confirmPassword"> Confirm Password </label>');

/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/

const checkInput = (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));

    if (event.target.value === '' && !errorElement.length){
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-red-600"> Required </span>');
    }

    if (errorElement && event.target.value !== '') {
        errorElement.forEach(elem => elem.remove());
    }

/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
   // verificamos si el campo está vacío y si no se ha agregado un mensaje de error.
   // Si es así, se agrega un span con el mensaje de error "Required" después del campo.
   // Si el campo no está vacío pero hay mensajes de error presentes,
   // se eliminan los mensajes de error.

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const passwordError = document.getElementById('passwordError');
    const errorConfirmPassword = document.getElementById('confirmPasswordError');

    if (password !== confirmPassword && !errorConfirmPassword) {
        document.getElementById('confirmPassword').insertAdjacentHTML('afterEnd', '<span id="confirmPasswordError" class="text-red-600">Passwords do not match</span>');
    } else if (password === confirmPassword && errorConfirmPassword) {
        errorConfirmPassword.remove();
    }

    const inputs = document.querySelectorAll('input[required]');

    let allInputsFilled = true;
    inputs.forEach(input => {
        if (input.value === '') {
            allInputsFilled = false;
        }
    });

    const registerButton = document.getElementById('registerButton');
    registerButton.disabled = !allInputsFilled;
};

document.getElementById('username').addEventListener('blur', checkInput);
document.getElementById('password').addEventListener('blur', checkInput);
document.getElementById('confirmPassword').addEventListener('blur', checkInput);

document.getElementById('registerButton').addEventListener('click', (event) => {
    event.preventDefault();
    alert('Registration successful!');
});







/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/


/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/