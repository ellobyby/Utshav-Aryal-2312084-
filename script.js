// Function to validate the community feedback form
function validateFeedbackForm() {
    // Get form elements
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var feedbackInput = document.getElementById('feedback');

    // Get error message elements
    var nameError = document.getElementById('nameError');
    var emailError = document.getElementById('emailError');
    var feedbackError = document.getElementById('feedbackError');

    // Reset previous error messages
    nameError.innerText = '';
    emailError.innerText = '';
    feedbackError.innerText = '';

    // Flag to track form validity
    var isValid = true;

    // Validate name
    if (nameInput.value.trim() === '') {
        nameError.innerText = 'Name is required';
        isValid = false;
    }

    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.innerText = 'Invalid email address';
        isValid = false;
    }

    // Validate feedback
    if (feedbackInput.value.trim() === '') {
        feedbackError.innerText = 'Feedback is required';
        isValid = false;
    }

    // Return the overall form validity
    return isValid;
}

// Add an event listener to the form submission
document.getElementById('feedbackForm').addEventListener('submit', function (event) {
    // Prevent the default form submission if validation fails
    if (!validateFeedbackForm()) {
        event.preventDefault();
    }
});
