function cekDuplikat(arr) {
  arr.sort(); // mengurutkan dari terkecil ke terbesar ... 1,1,3,5

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}

console.log(cekDuplikat([5, 1, 3, 1]));
