const assert = require('assert');
const Rectangle = require('../rectangle');

describe('Rectangle', () => {
  it('should have same height and width', () => {
    assert.strictEqual(new Rectangle(2, 2).isSquare(), true);
    assert.strictEqual(new Rectangle(3, 2).isSquare(), false);
  });

  it('returns the area', () => {
    assert.strictEqual(new Rectangle(3, 5).getArea(), 15);
  });

  it('returns the perimeter', () => {
    assert.strictEqual(new Rectangle(3, 4).getPerimeter(), 14);
  });
});
