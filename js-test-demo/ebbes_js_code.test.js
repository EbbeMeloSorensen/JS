const ebbes_js_code = require('./ebbes_js_code');

test('add 3 + 2 to equals 5', () => {
  let a = ebbes_js_code.add(3, 2);
  expect(a).toBe(5);
});

test('subtract 3 - 2 to equals 1', () => {
  let b = ebbes_js_code.subtract(3, 2);
  expect(b).toBe(1);
});

test('declaration_of_primitive_datatypes', () => {
  let number1 = 1; // A Number
  let number2 = 3.14; // Another Number. Note that we dont distinguish between integers and floats
  let string1 = 'a'; // String
  let string2 = "I'm hungry"; // Another String
  let string3 = 'She said: "Hi"'; // Another String
  let boolean1 = false; // Boolean
  let boolean2 = true; // Another Boolean
  let undefined1 = undefined; // Undefined
  let null1 = null; // Null

  var d = 3; // Declaring a variable using var. Legal but deprecated
             // (var is "function scoped" while let is "block scoped")  
});

test('simple arithmetic operations', () => {
  expect(1 + 2).toBe(3);
  expect(2 - 1).toBe(1);
  expect(3 * 2).toBe(6);
  expect(3 / 2).toBe(1.5);
  expect(2 ** 3).toBe(8); // 2 to the power of 3
  expect('Ebbe' + ' ' + 'Sorensen').toBe('Ebbe Sorensen'); // String concatenation
});

test('Comparison', () => {
  expect(1 < 2).toBe(true);
  expect(1 <= 1).toBe(true);
  expect(2 > 1).toBe(true);
  expect(1 >= 1).toBe(true);
});

test('Template literals', () => {
  let firstName = "Ebbe";
  expect(`Name: ${firstName}`).toBe("Name: Ebbe");
});

test('Control flow', () => {
  let a = 0;

  if (1 > 2) {
    a = 1;
  } else if (1 > 3) {
    a = 2;
  }
  else {
    a = 3;
  }

  expect(a).toBe(3);
});

test('Type conversion', () => {
  expect(Number("1975")).toBe(1975);
  expect(String(1975)).toBe("1975");
});

test('Type coercion', () => {
  // Here, the number is coerced into a string, so the result is "32"
  expect(3 + '2').toBe("32");

  // Here, the string is coerced into a number, so the result is 1
  expect(3 - '2').toBe(1);
});