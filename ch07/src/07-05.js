let arr = [10, 20, 30, 40];
let [a1, a2, a3] = arr;

console.log(a1, a2, a3);

let p1 = { name: '홍', age: 20, genter: 'M' };

let { name: n, age: a, gender } = p1;
console.log(n, a, gender);