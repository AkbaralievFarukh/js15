const email = document.querySelector('#input-email').value;
const lastName = document.querySelector('#input-last-name').value;
const firstName = document.querySelector('#input-first-name').value;
const userName = document.querySelector('#input-user-name').value;
const password = document.querySelector('#password').value;
const confirmPassword = document.querySelector('#confirm-password').value;
const formUser = document.querySelector('#form-user')

formUser.addEventListener('submit', () => {
    if (
        email.length > 2 &&
        lastName.length > 2 &&
        (password.length > 2 && password.length < 8) &&
        (confirmPassword.length > 2 && confirmPassword.length < 8) &&
        firstName.length > 2 && userName.length > 2
        && password === confirmPassword
    ) {
        alert('Успешная регистрация');
    } else {
        alert('Проверьте правильность полей');
    }
})

