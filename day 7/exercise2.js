function getObjectIntersection(obj1, obj2) {
    const tampung = {}; // 1
    
    for (let i in obj1) { 
        // console.log(i) hasilnya a , b (looping)
      if (obj2.hasOwnProperty(i)) {//false   // a: 1 c : 3 //  a = 'a' = true a= a = false
        if (obj1[i] === obj2[i]) { // [i] menjadi nama keys , karena cari value = obj1.keys
          tampung[i] = obj1[i]; // obj1[i] mendapatkan 1
        }
      }
    }
    
    return tampung; // kembalikan ke function
  }

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };

const intersection = getObjectIntersection(obj1, obj2);

console.log(intersection); // Output: { a: 1 }


// const hero = {
//     name: 'Batman',
//     tes : 'crot'
//   };
//   console.log(hero.hasOwnProperty('tes'));     // => true
  