// mengetahui apakah dua object tersebut true atau false !

let obj1 =  {nama : 'mikhael'}; // masukan object pembanding 1
let obj2 = {nama : 'mikhael'} // masukan object pembanding 2


function isEqual(obj1, obj2) {
    const arr1 = Object.keys(obj1);// untuk menjadikan object menjadi array dan mengambil key nya
    const arr2 = Object.keys(obj2);// di ubah untuk mengetahui nama keys nya
    
    
   
    if (arr1.length !== arr2.length) {
      return false;
    }
 
    for (let key of arr1) { //  arr1
        
      if (obj1[key] !== obj2[key]) {  // menggunakan [key] untuk mengakses value
        return false;
      }
    }
    return true;

   
}

const tes = isEqual(obj1,obj2)
console.log(tes)
