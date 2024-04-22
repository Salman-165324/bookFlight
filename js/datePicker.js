import { easepick } from '@easepick/core';
import { RangePlugin } from '@easepick/range-plugin';

// Elements for picker
const departureDateElement = document.getElementById('departure-date');
const returnDateElement = document.getElementById('return-date');

const initializePicker = (gridCount) => {
  return new easepick.create({
    element: departureDateElement,
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css',
       '/customizeCalender.css',
      '/styles/customizeCalender.css'
    ],
    calendars: 2,
    grid: gridCount,
    plugins: [RangePlugin],
    RangePlugin: {
      elementEnd: returnDateElement,
    }
  });
};

// Initially set the picker with default values
let datepicker = initializePicker(2);

// Function to update the picker settings based on the window width with arrow function syntax
const updatePickerSettings = () => {
  const width = window.innerWidth;
  const remSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const breakpoint = 78 * remSize; // Converts 78rem to pixels

  if (width <= breakpoint) {
    // Reinitialize the picker with 1 grid
    datepicker.destroy(); // Destroy the existing picker instance
    datepicker = initializePicker(1);
  } else {
    // Maintain the picker with 1 grid
    datepicker.destroy(); // Destroy the existing picker instance
    datepicker = initializePicker(2);
  }
};

// Event listener for window resize using arrow function syntax
window.addEventListener('resize', updatePickerSettings);
