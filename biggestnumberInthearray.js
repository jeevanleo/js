let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let a = arr[0];

for (let i = 1; i < arr.length; i++) {
  a = Math.max(a, arr[i]);
}
console.log(a);
