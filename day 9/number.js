let angka = 100000;

console.log(angka.toLocaleString("id-ID"));
console.log(angka.toFixed(2)); // bilangan decimal
console.log(angka.toExponential());

let inf = Infinity;
let minInf = -Infinity;

console.log(1000000000000000000000000000000000000000000000000000000 > inf); // false

let strNumber = angka.toString();
console.log(strNumber);
console.log(typeof strNumber);

let hasil = angka + "";
console.log(hasil);
console.log(typeof hasil);

let angka1 = 10000;
console.log((angka += 1));
