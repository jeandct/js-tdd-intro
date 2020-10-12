const assert = require('assert');

const test = 'ceci est un test';

const capitalizeFirstLetters = (test) => {
  return test;
};

assert.strictEqual(typeof capitalizeFirstLetters, 'function');
assert.strictEqual(capitalizeFirstLetters(''), '');
assert.strictEqual(capitalizeFirstLetters(test), 'Test');
assert.strictEqual(capitalizeFirstLetters(test), 'Ceci Est Un Test');
