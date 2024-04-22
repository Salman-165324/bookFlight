const increment = (inputId, maxCount) => {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? 0 : value;
    value = value < maxCount ? value + 1 : maxCount;
    input.value = value;
  };
  
  const decrement = (inputId, minCount) => {
    const input = document.getElementById(inputId);
    let value = parseInt(input.value, 10);
    value = isNaN(value) ? minCount : value;
    value = value > minCount ? value - 1 : minCount;
    input.value = value;
  };
  

  document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for incrementing and decrementing adult traveler count
    document.getElementById('adult-increment-btn').addEventListener('click', () => increment('adult-traveler-count', 8));
    document.getElementById('adult-decrement-btn').addEventListener('click', () => decrement('adult-traveler-count', 1));

    // Add event listeners for incrementing and decrementing child traveler count
    document.getElementById('increment-children-btn').addEventListener('click', () => increment('child-traveler-count', 9));
    document.getElementById('decrement-children-btn').addEventListener('click', () => decrement('child-traveler-count', 0));
});
