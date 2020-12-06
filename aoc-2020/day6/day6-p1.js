const fs = require('fs');
const input = fs.readFileSync('aoc-2020/day6/day6-input.txt', 'utf8');

const output = input.split('\n\n').reduce((countSum, group) => {
  const persons = group.split('\n');
  const uniqueGroupAnswers = new Set();

  persons.forEach(person =>
    person.split('').forEach(answer => uniqueGroupAnswers.add(answer))
  );

  return countSum += uniqueGroupAnswers.size;
}, 0);

console.log('output:', output);
