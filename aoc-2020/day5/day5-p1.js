const fs = require('fs');
const input = fs.readFileSync('aoc-2020/day5/day5-input.txt', 'utf8');

function bisect(instructions, min, max) {
  const command = instructions.charAt(0);
  const newInstructions = instructions.substring(1);
  const range = max - min;
  if(range === 0) return min;
  if(command === 'F' || command === 'L') return bisect(newInstructions, min, Math.floor(min + (range / 2))); // lower half
  if(command === 'B' || command === 'R') return bisect(newInstructions, Math.ceil(min + (range / 2)), max); // upper half
  return min;
}

// console.log('row:', bisect('FBFBBFF', 0, 127));
// console.log('col:', bisect('RLR', 0, 7));

const output = input.split('\n').reduce((highestSeatId, line) => {
  console.log('line:', line);
  const rowInstructions = line.slice(0,7);
  const colInstructions = line.slice(7);

  const rowPlace = bisect(rowInstructions, 0, 127);
  const colPlace = bisect(colInstructions, 0, 7);

  const seatId = (rowPlace * 8) + colPlace;
  if (seatId > highestSeatId) return seatId;
  return highestSeatId;
}, 1);

console.log('output:', output)
