const assert = require('assert');
const calc = require('./calc-core');

function test(name, fn) {
  try {
    fn();
    console.log('✓', name);
  } catch (err) {
    console.error('✗', name);
    console.error(err.message);
    process.exitCode = 1;
  }
}

// Basic arithmetic
test('evaluate addition', () => {
  assert.strictEqual(calc.evaluate('2+3'), 5);
});

test('evaluate parentheses', () => {
  assert.strictEqual(calc.evaluate('(1+2)*3'), 9);
});

// Scientific functions
const epsilon = 1e-10;

test('sin function', () => {
  assert.ok(Math.abs(calc.sin('0') - 0) < epsilon);
});

test('cos function', () => {
  assert.ok(Math.abs(calc.cos('0') - 1) < epsilon);
});

test('tan function', () => {
  assert.ok(Math.abs(calc.tan('0') - 0) < epsilon);
});

test('log10 function', () => {
  assert.ok(Math.abs(calc.log10('100') - 2) < epsilon);
});

test('sqrt function', () => {
  assert.strictEqual(calc.sqrt('9'), 3);
});
