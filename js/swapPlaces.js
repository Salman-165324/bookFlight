const swapValues = () => {
    const departureField = document.getElementById('departure-input');
    const destinationField = document.getElementById('destination-input');
    const temp = departureField.value;
    departureField.value = destinationField.value;
    destinationField.value = temp;
};
  

document.addEventListener('DOMContentLoaded', () => {

    const swapButton = document.getElementById('swapButton'); 
    swapButton.addEventListener('click', swapValues); 
})