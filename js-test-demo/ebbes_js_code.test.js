const ebbes_js_code = require('./ebbes_js_code');

test('add 3 + 2 to equals 5', () => {
  let a = ebbes_js_code.add(3, 2);
  expect(a).toBe(5);
});

test('subtract 3 - 2 to equals 1', () => {
  let b = ebbes_js_code.subtract(3, 2);
  expect(b).toBe(1);
});