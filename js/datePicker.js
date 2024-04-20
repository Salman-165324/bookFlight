import { easepick } from '@easepick/core';
import { RangePlugin } from '@easepick/range-plugin';

const picker = new easepick.create({
  element: document.getElementById('departure-date'),

  css: [
    'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
    'https://cdn.jsdelivr.net/npm/@easepick/range-plugin@1.2.1/dist/index.css',
  ],
  calendars:2,
  grid: 2,
  plugins: [RangePlugin],
  RangePlugin: {
    elementEnd: document.getElementById('return-date'),
  }
  
});