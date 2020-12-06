const fs = require('fs');
const input = fs.readFileSync('aoc-2020/day6/day6-input.txt', 'utf8');

const output = input.split('\n\n').reduce((countSum, group) => {
  const persons = group.split('\n');
  const uniqueGroupAnswers = new Set();

  persons.forEach(person => {
    person.split('').forEach(answer => uniqueGroupAnswers.add(answer))
  });

  const answeredByAll = [...uniqueGroupAnswers].reduce((acc, predicate) => {
    if (persons.every(pAns => pAns.indexOf(predicate) > -1)) return ++acc;
    return acc;
  }, 0);

  return countSum += answeredByAll;
}, 0);

console.log('output:', output);
