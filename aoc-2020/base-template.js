const input = ``;

const output = input.split('').reduce((acc, value) => {
  console.log('value:', value);

  if (value === 'other') return ++acc;
  return acc;
}, 0);

  console.log('output:', output)