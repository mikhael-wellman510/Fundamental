function konversi(huruf) {
  let a = huruf.split("");
  let alpha = " abcdefghijklmnopqrstuvwxyz";
  let arr = [];
  //   console.log(a);
  for (let i = 0; i < a.length; i++) {
    // const char = huruf.charAt(i); // .. ini untuk mengurai . cnth abc = a b c kebawah
    // index1 = a[0].charCodeAt(0) - 96; // 1
    // index2 = char.charCodeAt(0) - 96; // char = a = 1, z = 26 ,, kenapa a = 97??
    // console.log(char);
    // console.log(index2);
    arr.push(alpha.indexOf(a[i]));
  }
  console.log(arr);
  //   if (a.length <= 1) {
  //     console.log(`hasil dari ${inputHuruf} : adalah ${index1}`);
  //   } else if (a.length <= 2) {
  //     let a = 26 * index1 + index2; // misal ab => yg di ambil b , b= 2
  //     console.log(`hasil dari ${inputHuruf}: adalah ${a}`);
  //   } else if (a.length <= 3) {
  //     console.log(index1);
  //     let b = 26 * 26 + index1 * 26 + index2;
  //     console.log(`hasil dari ${inputHuruf}: adalah ${b}`);
  //   }
}
let inputHuruf = "zzz";
konversi(inputHuruf);
/// a

// console.log(parseInt("a", 36) - 9);

let huruf = "azz";
let alpha = " abcdefghijklmnopqrstuvwxyz";

let x = huruf
  .split("")
  .reduce((prev, curr) => prev * 26 + alpha.indexOf(curr), 0);

console.log(x);
console.log(parseInt("a", 36) - 9);
//1
//26+26 = 52
// 52*26 + 26
