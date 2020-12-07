const fs = require('fs');
const input = fs.readFileSync('aoc-2020/day7/day7-input.txt', 'utf8');

const bagRegex = /(\d)+\s([\w\s\w])*(?=\sbag)/g;

let outputSet = new Set();

function flatDeep(arr, d = 1) {
   return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
                : arr.slice();
};

function checkInBag(bagColor, fillThisSet) {
  const hasBagColor = Object.entries(cleanBags).filter(([key, val]) => {
    return Object.keys(val).some(rule => rule.includes(bagColor));
  });
  if (hasBagColor.length > 0) {
    // debugger;
    return hasBagColor.map((hbcEntry) => {
      fillThisSet.add(hbcEntry[0]);
      return checkInBag(hbcEntry[0], fillThisSet);
    });
  }
  // return bagColor;
}

const cleanBags = input.split('\n').reduce((recepticles, ruleset) => {
  // console.log('ruleset:', ruleset)
  const [ holder, rest ] = ruleset.split(' bags contain ');
  const matches = rest.match(bagRegex) || [];
  const contains = matches.reduce((obj, match) => {
    return { ...obj, [match.substring(1)]: parseInt(match.charAt(0))}
  }, {})

  return {...recepticles, [holder]: contains };
}, {});

console.log('cleanBags:', cleanBags);

// const shinyGoldContainers = flatDeep(checkInBag('shiny gold', outputSet), Infinity);
const shinyGoldContainers = checkInBag('shiny gold', outputSet);

debugger;
console.log('shinyGoldContainers:', shinyGoldContainers)

console.log('outputSet:', outputSet)
console.log('output:', outputSet.size)