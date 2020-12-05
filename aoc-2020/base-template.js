const fs = require('fs');
const input = fs.readFileSync('aoc-2020/day/input.txt', 'utf8');
// const input = ``;

const output = input.split('').reduce((acc, value) => {
  console.log('value:', value);

  if (value === 'other') return ++acc;
  return acc;
}, 0);

  console.log('output:', output)