test('Declaring variables', () => {
  let a = 1; // declaring a variable
  a = 'Bamse'; // reassigning a variable to a different type (legal in JavaScript)
  const b = 'Kylling'; // declaring a constant variable (cannot be reassigned)
  let firstName = "Ebbe"; // Best practice is to use camel case for variable names
  let c; // Declaring a variable without initializing it. Its value is undefined
  console.log(a); // Writing the value of a varable to the console (can be seen when activating devtools in the browser by pressing F12)
  console.log(a, b); // You can simultaneously log multiple values

  var d = 3; // Declaring a variable using var. Legal but deprecated
             // (var is "function scoped" while let is "block scoped")  
});

test('Writing to the console', () => {
  if (false) {
      alert('hej'); // display a modal messagebox in the browser
      // (this won't work in a test environment, but it would work in a browser)
  }  
});

test('Primitive data types', () => {
  let number1 = 1; // Number
  let number2 = 3.14; // Another Number. Note that we dont distinguish between integers and floats
  let string1 = 'a'; // String
  let string2 = "I'm hungry"; // Another String
  let string3 = 'She said: "Hi"'; // Another String
  let boolean1 = false; // Boolean
  let boolean2 = true; // Another Boolean
  let undefined1 = undefined; // Undefined
  let null1 = null; // Null  
});

test('Arithmetic operators', () => {
  expect(1 + 2).toBe(3);
  expect(3 - 1).toBe(2);
  expect(3 * 2).toBe(6);
  expect(3 / 2).toBe(1.5);
  expect(2 ** 3).toBe(8); // 2 to the power of 3
});

test('Assignment operators', () => {
  let a = 1;
  a = 7;
  a += 2;
  a -= 1;
  a *= 3;
  a /= 2;
  a++;
  a--;
  expect(a).toBe(12);
});

test('Comparison operators', () => {
  expect(1 < 2).toBe(true);
  expect(1 <= 1).toBe(true);
  expect(2 > 1).toBe(true);
  expect(1 >= 1).toBe(true);
});

test('Template literals', () => {
  // (Resembles string interpolation in C#)
  let firstName = "Ebbe";
  expect(`Name: ${firstName}`).toBe("Name: Ebbe"); // Notice the use of backticks

  // Using template literals for making multiline string
  console.log(`string with
  multiple
  lines`);

  // Multiline strings can also be made in a more traditional way
  console.log('other\nmultiline\nstring');
});

test('Control flow', () => {
  if (1 > 2) {
      console.log('control flow 1');
  }
  else if (1 > 3) {
      console.log('control flow 2');
  }
  else {
      console.log('control flow 3');
  }  
});

test('Type conversion', () => {
  expect(Number("1975")).toBe(1975);
  expect(String(1975)).toBe("1975");
});

test('Type coercion', () => {
  // (Type coercion happens when an operator that "expects" multiple values of same type receives values of different types)

  // Here, the number is coerced into a string, so the result is "32"
  expect(3 + '2').toBe("32");

  // Here, the string is coerced into a number, so the result is 1
  expect(3 - '2').toBe(1);
});

test('Truthy & Falsy', () => {
  // A falsy value is characterized by evaluating to false, when coerced into a boolean
});

// Det her fik jeg fra IDE'en
test('Loops', () => {
  let sum = 0;

  for (let i = 1; i <= 5; i++) {
    sum += i;
  }

  expect(sum).toBe(15);
});

test('Functions', () => {
  function add(x, y) {
    return x + y;
  }

  expect(add(3, 2)).toBe(5);
});

test('Bla bla', () => {
});

// TODO: Overfør resten af eksemplerne fra sektion 2 af Jonas Schmedtmanns JavaScript course (https://www.udemy.com/course/the-complete-javascript-course/)