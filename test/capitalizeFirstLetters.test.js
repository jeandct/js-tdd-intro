const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it("It's a function accepting one argument", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
    assert.strictEqual(capitalizeFirstLetters.length, 1);
  });

  it('works with an empty string', () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });

  it('works with one word', () => {
    assert.strictEqual(capitalizeFirstLetters('test'), 'Test');
  });

  it('works with many word', () => {
    assert.strictEqual(
      capitalizeFirstLetters('ceci est un test'),
      'Ceci Est Un Test'
    );
  });
});
