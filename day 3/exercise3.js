// **** Soal no 1  Write a code to display the multiplication table of a given integer

for(let i = 0 ; i <= 10 ; i++){
    let a = 3;
    let hasil = a * (i+1)

    console.log(`${a} x ${i+1} = ${hasil}`)
}



// **** Soal no 2 
    
function checkPalindrome(inputString) { // 
    let strArray = inputString.split(''); //array //kodok
    let newArr = strArray.join(''); // string
    let revArr =  [...newArr].reverse().join('') //string
   
    
    if ( newArr === revArr) {
        return true;
    } else {
        return false;
    }
}


let a = "kodok"
let b = "nenek"
let c = "ketek"

console.log(checkPalindrome(a))
console.log(checkPalindrome(b))
console.log(checkPalindrome(c))

// soal no 3 . Mengkonversi centimeter menjadi kilometer

// 1km = 100.000 cm

function konversi(a){

   let rumus;
   rumus = a / 100000
   console.log(`${a} centimeter adalah ${rumus} kilometer`)

   return rumus
}


konversi(400000);



// **SOAL NO 4 FORMAT MATA UANG



// const rupiah = function(number){
//     return new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR"
//     }).format(number);
//   }

// console.log(rupiah(2000000)) // "Rp 20.000,00"


let	angka = 1225000;
		
let	reverse = angka.toString().split('').reverse().join(''), // , jadikan string , [ '2', '5', '0', '0', '0' ], lalu d reverse =  [ '0', '0', '0', '5', '2', '1' ] , join jadi = 00052
	ribuan 	= reverse.match(/\d{1,3}/g), // memecah dan hasil = ['000', '520' ,]
	ribuan1	= ribuan.join('.').split('').reverse().join(''); // di join jadi string hasil = 000.52, lalu di split [ '0', '0', '0', '.', '5', '2' ] , lalu di reverse lagi[ '2', '5', '.', '0', '0', '0' ]

let abc = "kucing anjing tikus"

console.log(abc.replaceAll(' ',''))
// Cetak hasil	
// console.log(ribuan)
console.log(`Rp.${ribuan1}.00;-`)// Hasil: rp.125.000.00;-

// console.log(ribuan)
// console.log(ribuan.join('.').split('').reverse().join(''))
// console.log(ribuan)// maksud???
// console.log(reverse)



// ** soal no 5  ○ Contoh: String = “Hello World”, Search String = “Ell” → “Ho World”

let string1 = 'Hello guys !'

let hasilString1 = string1.substring(1, 4) // mengambil kalimat sepotong(ell) dari hello world
let hasilString2 = string1.replace('ell','') // ho guys
console.log(hasilString1)
console.log(hasilString2)


// ** soal no 6 ○ Contoh: Example : “hello world” → “Hello World” mengubah huruf depan jadi kapital

let tes2 = 'hello world'

let hasil23 = tes2.replace('h' , 'H').replace('w' , 'W' )
console.log(hasil23)


// ** soal no 7 

let replaceHuruf = 'purwhadika';

let hasilJawaban = replaceHuruf.split('').reverse().join('')

console.log(`${replaceHuruf} di replace menjadi ${hasilJawaban}`)