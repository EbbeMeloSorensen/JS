const ebbes_js_code = require('./ebbes_js_code');

test('adds 1 + 2 to equal 3', () => {
  let a = ebbes_js_code.add(3, 2);
  expect(a).toBe(5);

  let b = ebbes_js_code.subtract(3, 2);
  expect(b).toBe(1);
});
