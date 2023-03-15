// function cekDuplikat(arr) {
//   const uniqueData = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueData.has(arr[i])) return true;
//     else uniqueData.add(arr[i]);
//   }

//   return false;
// }

// console.log(cekDuplikat([1, 2, 3, 1]));

// console.log(has);

function cekDuplikat(arr) {
  const cariData = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (cariData.has(arr[i]))
      return true; //jika ada no di array yg sama dia akan mengembalikan nilaii true
    else cariData.add(arr[i]); // add itu jika ada angka yg sama tidak akan masuk ke dalam arr ,,
  }
  return false;
}

console.log(cekDuplikat([1, 2, 3, 4, 1]));
