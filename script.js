const form = document.getElementById('signin-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const signinStatus = document.getElementById('signin-status');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = usernameInput.value;
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (password === confirmPassword) {
		// Passwords match, create a new user account
		signinStatus.textContent = 'Account created successfully!';
	} else {
		signinStatus.textContent = 'Passwords do not match.';
	}
});