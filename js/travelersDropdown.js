// Function to show the travelers-dropdown
const showDropdown = () => {
    document.getElementById('travelers-dropdown').style.display = 'block';
    document.getElementById('travelers-and-more').setAttribute('aria-expanded', 'true');
    document.getElementById('travelers-and-more').classList.add('active');
  };
  
  // Function to hide the dropdown
  const hideDropdown = () => {
    document.getElementById('travelers-dropdown').style.display = 'none';
    document.getElementById('travelers-and-more').setAttribute('aria-expanded', 'false');
    document.getElementById('travelers-and-more').classList.remove('active');
  };
  
  // Update display value when selections change
  const updateDisplayValue = () => {
    const adults = document.getElementById('adult-traveler-count').value || 1;
    const children = document.getElementById('child-traveler-count').value || 0;
    const cabinClass = document.getElementById('cabin-class').value || 0; 
    const displayValue = `${adults} Adult${adults > 1 ? 's' : ''}, ${children} Child${children > 1 ? 'ren' : ''}, ${cabinClass}`;
    document.getElementById('travelers-and-more').value = displayValue;
  };
  
  // Function to apply selection and close dropdown
  const applySelection = () => {
    updateDisplayValue();
    hideDropdown();
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const travelersAndMore = document.getElementById('travelers-and-more');
    const dropdown = document.getElementById('travelers-dropdown');
  
    // Toggle dropdown on input click
    travelersAndMore.addEventListener('click', (event) => {
      const isExpanded = travelersAndMore.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        hideDropdown();
      } else {
        showDropdown();
      }
      event.stopPropagation();
    });
  
    // Hide dropdown when clicking outside of it
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target) && event.target !== travelersAndMore) {
        hideDropdown();
      }
    });
  
    // Add change event listeners to inputs
    document.getElementById('adults').addEventListener('change', updateDisplayValue);
    document.getElementById('children').addEventListener('change', updateDisplayValue);
  
    // Call the update display function to set the initial value
    updateDisplayValue();
  });
  