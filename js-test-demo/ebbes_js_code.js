// A simple function
function add(a, b) {
  return a + b;
}

// Another simple function
function subtract(a, b) {
  return a - b;
}

// Notice how we export 2 functions here. You only use the module.exports instruction once
module.exports = {
  add,
  subtract
};
