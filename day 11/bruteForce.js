function cekDuplikat(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // intinya
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}

console.log(cekDuplikat([1, 2, 3, 1]));
