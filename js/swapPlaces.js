const swapValues = () => {
    const departureField = document.getElementById('departure-field');
    const destinationField = document.getElementById('destination-field');
    const temp = departureField.value;
    departureField.value = destinationField.value;
    destinationField.value = temp;
};
  