let arr = [4, 2, 2, 1, 1, 5];

function unik(arr) {
  let u = [];
  for (let i = 0; i < arr.length; i++) {
    //4 2 2 1
    let tampung = arr.filter((a) => a === arr[i]); //[4] [2,2] [2,2] [1,1] [1,1] [5]

    if (tampung.length < 2) {
      u.push(arr[i]); //[4]
    }
  }

  return u;
}

console.log(unik(arr));
