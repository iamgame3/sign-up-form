addEventListener('click', () => {
    const pass = document.getElementById('pass');
    const conpass = document.getElementById('conpass');
    const passMatchError = document.querySelector('.pass-error')

    if (pass.value !== conpass.value) {
        passMatchError.textContent = 'Passwords do not match *';
        pass.setCustomValidity('Passwords must match.');
        conpass.setCustomValidity('Passwords must match.');
    } else {
        passMatchError.textContent = '';
        pass.setCustomValidity('');
        conpass.setCustomValidity('');
    }
});