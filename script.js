function validateForm() {
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username.length < 3
        || firstName.length < 3
        || lastName.length < 3
        || password.length < 3
        || password.length > 8
        || confirmPassword.length < 3
        || confirmPassword.length > 8) {
        alert('Пожалуйста, убедитесь, что все поля соответствуют требованиям.');
    } else if (password !== confirmPassword) {
        alert('Пароль и подтверждение пароля не совпадают.');
    } else {
        alert('Форма успешно отправлена!\n\nUser Name: ' + username + '\nFirst Name: ' + firstName + '\nLast Name: ' + lastName + '\nEmail: ' + email);
    }
}