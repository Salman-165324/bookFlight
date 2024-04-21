// Add event listeners to input fields to prevent form submission on Enter key press
const disableEnterKeySubmission = () => {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // This stops the form from submitting
                // Optionally, you can add logic here if you want something else to happen on Enter
            }
        });
    });
};

// Call the function to activate the prevention mechanism
disableEnterKeySubmission();