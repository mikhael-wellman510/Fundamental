// luas persegi
// rumus persegi panjang 2x(p+l)
let p = 2;
let l = 5;


let hasilKeliling = 2*(p+l);
let hasilLuas = p * l;

console.log(hasilKeliling)// *** jawaban soal no 1
console.log(hasilLuas);// **** jawbaan soal no 2


// ***** MENCARI DIAMETER , KELILING , DAN LUAS LINGKARAN





let v = 3.14 ;// 
let jari2 = 8;

let diameter = 2 * jari2;
console.log(diameter)//jawaban soal no 3 (DIAMETER)

let keliling = 2 * v * jari2
console.log(keliling)// jawaban soal no 4 (KELILING)

let hasilLuasLingkaran = v * jari2**2

console.log(hasilLuasLingkaran)// Jawaban soal no 5 (LUAS)



// soal no 6 

let lineA = 20;
let lineB = 30;
let sum = 180

let hasilSegitiga = sum - (lineA + lineB)

console.log(hasilSegitiga) // jawaban soal no 6




// rumus hari
// perbedaan tanggal dalam beberapa hari

let kemarin = 10
let sekarang = 20

console.log(`kemarin tanggal ${kemarin} , lalu sekarang tanggal ${sekarang} , perbedaan nya adalah ${sekarang-kemarin} hari`)


// tulis kode untuk mengubah hari 

// 500 hari
let hari = 500; // 500 - 365 - 120
//dengan 1 tahun 365
let tahun = parseInt(hari / 365 ); // 1 tahun
let bulan = parseInt( 145 / 30 ); // 145 hari convert bulan = 4 bulan
let hasilHari = hari - (365 + 120)  // hasil hari 





console.log(`${hari} hari adalah ${tahun} tahun , ${bulan}bulan , ${hasilHari}hari`) // *** hasil soal no 7

















// for(let i = 1; i <= 20 ; i++){
//     if(i % 15 === 0){
//         console.log("FizzBuzz")
//     }else if(i % 3 === 0){
//         console.log('fizz');
//     }else if(i % 5 === 0 ){
//         console.log('buzz');
//     }else{
//         console.log(i)
//     }
// }
