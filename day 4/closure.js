// function perkenalan(nama){
//     const sapa = 'hallo';

//     return function(){
//         return `${nama} ${sapa}`
//     }
// }

// let hasil = perkenalan('mikhael');

// console.log(hasil())



// hallo nama saya barak , saya siswa purwadhika , saya hobby lari
function biodata(nama){
    let kampus = 'purwadhika'
    return function(){
        let hobby = 'lari'
        return `hallo , nama saya ${nama}, saya siswa ${kampus} , hobby saya ${hobby} `
    };
}



const hasil = biodata('barak');
console.log(hasil())