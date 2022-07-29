const password = document.querySelector('.password-input');
const passWordC = document.querySelector(".password-confirm");

passWordC.addEventListener('keyup', () => {
    if(password != passWordC.textContent) {
        console.log('These passwords do not match')
    }
})