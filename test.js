import test from 'ava';
import charToASCII from '.';

test('throws an error if the input is not a string', t => {
  try {
    charToASCII(123);
  } catch (err) {
    t.is(err.message, 'Expected a string, got number');
  }
});