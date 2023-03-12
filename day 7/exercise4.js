function membalikanIsiObj(arr) {
    const result = []; 
    // arr.forEach(obj => console.log(obj))
//   console.log(arr) // nama: david umur : 20
    arr.forEach(obj => {// membuat jadi object {nama: 'david' , umur:20} , menhilangkan array

        // console.log(obj)
      const newObj = {}; 
            // console.log(obj) // 
            // for (let prop in obj){console.log(prop)}
      for (let prop in obj) { //** OBJ MENJADIKAN  nama , umur (loop ke bawah)
        newObj[obj[prop]] = prop; // **prop = nama umur //**obj[prop]] = ['david] [20] looping
        // console.log(newObj)
        // console.log(prop)
      }
    //   console.log(newObj)
      result.push(newObj);
    });
  
    return result;
}
const input = [{ nama: `David`, umur: 20 }];

const output = membalikanIsiObj(input);

console.log(output); // Output: [{ David: 'name', 20: 'age' }]