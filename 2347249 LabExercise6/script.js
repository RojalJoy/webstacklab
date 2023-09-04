const form = document.getElementById('registration-form');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const dobInput = document.getElementById('dob');
const submitBtn = document.getElementById('submitBtn');

const statusElements = {
    fullName: document.getElementById('fullNameStatus'),
    email: document.getElementById('emailStatus'),
    password: document.getElementById('passwordStatus'),
    confirmPassword: document.getElementById('confirmPasswordStatus'),
    dob: document.getElementById('dobStatus')
};


const nameRegex = /^[a-zA-Z\s]{3,}$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;

function updateStatus(element, isValid, message) {
    statusElements[element].textContent = message;
    statusElements[element].className = isValid ? 'success-icon' : 'error-icon';
}

fullNameInput.addEventListener('input', () => {
    const isValid = nameRegex.test(fullNameInput.value);
    updateStatus('fullName', isValid, isValid ? 'Valid' : 'Invalid');
});

emailInput.addEventListener('input', () => {
    const isValid = emailRegex.test(emailInput.value);
    updateStatus('email', isValid, isValid ? 'Valid' : 'Invalid');
});

passwordInput.addEventListener('input', () => {
    const isValid = passwordRegex.test(passwordInput.value);
    updateStatus('password', isValid, isValid ? 'Valid' : 'Invalid');
});

confirmPasswordInput.addEventListener('input', () => {
    const isValid = passwordInput.value === confirmPasswordInput.value && passwordRegex.test(passwordInput.value);
    updateStatus('confirmPassword', isValid, isValid ? 'Match' : 'Not matching');
});


dobInput.addEventListener('input', () => {
    const dob = new Date(dobInput.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - dob.getFullYear();

    const isValid = dob instanceof Date && !isNaN(dob) && age >= 18;
    updateStatus('dob', isValid, isValid ? `Age: ${age}` : 'Must be at least 18 years old');


    submitBtn.disabled = !(
        nameRegex.test(fullNameInput.value) &&
        emailRegex.test(emailInput.value) &&
        passwordRegex.test(passwordInput.value) &&
        passwordInput.value === confirmPasswordInput.value &&
        isValid
    );
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert('Registration submitted!');
});