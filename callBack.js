function square(a) {
  return a * a;
}

function cube(b) {
  return b * b * b;
}

function someOfSomething(a, b, fn) {
  const value1 = fn(a);
  const value2 = fn(b);
  return value1 + value2;
}

let a = 2;
let b = 3;

console.log(someOfSomething(a, b, square));
console.log(someOfSomething(a, b, cube));
