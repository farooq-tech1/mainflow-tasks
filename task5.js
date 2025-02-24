document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');

    // Event listener for form submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get the username and password values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Validation
        if (!username || !password) {
            displayError("Both fields are required!");
            return;
        }

        if (username.length < 3) {
            displayError("Username must be at least 3 characters.");
            return;
        }

        if (password.length < 6) {
            displayError("Password must be at least 6 characters.");
            return;
        }

        // Successful submission (for now, just clearing the form and success message)
        displayError(""); // Clear error
        alert('Login Successful!');
        
        // Redirect to the dashboard page
        window.location.href = "successful.html"; // Change "dashboard.html" to the page you want to redirect to

        loginForm.reset();
    });

    // Function to display error messages
    function displayError(message) {
        errorMessage.textContent = message;
    }
});
