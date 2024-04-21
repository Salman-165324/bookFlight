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
  