function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Simple password strength check
    if (password.length < 6) {
        alert('Password should be at least 6 characters long.');
        return;
    }

    // Check if the password and confirm password match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Display success message and reset form
    document.getElementById('successMessage').classList.remove('hidden');
    document.getElementById('registrationForm').reset();
}
function goToAnotherPage() {
    // Set the new URL
    var newPageURL = "Register.html";

    // Navigate to the new page
    window.location.href = newPageURL;
}