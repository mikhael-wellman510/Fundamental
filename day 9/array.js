const arr = [5, 1, 6, 4, 9, 0];

let hasil = arr.map((a) => a * 2); // mengalikan / menambahkan seluruh array

console.log(hasil);

let hasil1 = arr.find((a) => a > 8); // mencari yang lebih besar

console.log(hasil1);

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
let hasil2 = words.filter((arr) => arr.length > 6); // mencari jumlah huruf yang lebih dari 6
console.log(hasil2);

const tes2 = [2, 5, 6, 24, 56, 78, 96, 45, 34, 23, 55, 89, 90];

const hasilJawab = tes2.filter((a) => a > 6); // mencari jumlah angka yang lebih besar

console.log(hasilJawab);

let arr8 = [1, 2, 3, 4, 5];

let hasil12 = arr8.reduce((a, b) => a + b); // menjumlahkan

console.log(hasil12);

let arr9 = [1, 2, 3, 4, 5, 6, 7];





let tampung = 0;  // basic tampung

for (let i = 0; i < arr9.length; i++) {
  tampung += arr9[i];
}

console.log(tampung);



