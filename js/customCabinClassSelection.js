document.addEventListener('DOMContentLoaded', () => {
    const customSelect = document.querySelector('.custom-select');
    const optionsContainer = document.getElementById('custom-options');
    const options = document.getElementsByClassName('option');

    // Toggle dropdown when the custom-select is clicked
    customSelect.addEventListener('click', () => {
        optionsContainer.classList.toggle('show');
    });

    // Close the dropdown if clicked outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.custom-select, .custom-select *')) { // Modified to check for children elements as well
            var dropdowns = document.getElementsByClassName("options-container");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    };

    // Handling option selection for cabin class
    Array.from(options).forEach(option => {
        option.addEventListener('click', function() {
            var selectedText = this.textContent;
            document.getElementById('selected-value').textContent = selectedText;
            optionsContainer.classList.remove('show');
        });
    });
});
