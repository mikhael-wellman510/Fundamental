//** SOAL 1 */ mengubah celcius ke farenheit 

let celcius = 40;
let fahrenheit = 32;
let fix = 9 / 5

let hasil1 = (fix * celcius)+ fahrenheit; 

console.log(`jika suhu celcius = ${celcius} derajat celcius , maka jika d konversi ke Fahrenheit adalah ${hasil1} fahrenheit`)



// ** SOAL 2 (ANGKA GANJIL GENAP)


for(let i = 0 ; i < 10 ; i++){
    if(i % 2 === 0){
        console.log(`${i} adalah bilangan genap`);
    }else{
        console.log(`${i} adalah bilangan ganjil`);
    }
}

// ** SOAL NO 3 (mengecek bilangan prima atau bukan)

// contoh bilangan prima 2,3,5,7,11,13

// hanya bisa d bagi dengan diri nya sendiri dan angka 1

let tampung_prima = []; // 2 , 3 , 5
for(let i = 1; i <= 11; i++){ // 1 , 2 ,3 , 4 ,5
    let bill = 0; // 
    for(let a= 1; a <= i; a++){ // 
        if(i % a == 0){   
            bill++ 
        }
    }

    if(bill == 2){ // bil == 2 ini untuk menampung prima , karena hanya bisa di bagi 1 dan bilangan dia sendiri 
        tampung_prima = [...tampung_prima, i];
    }
}
console.log(tampung_prima)



  
  
// ****  soal no 4 

// *** TULISKAN KODE MENJUMLAHKAN BILANGAN 1 SAMPAI 5 , EX = 1+2+3+4+5 =  15 ;



// **** SOAL NO 5 BILANGAN FAKTORIAL

let bill = 4;
let faktorial = 1;
for( i = bill ; i >= 1 ; i--){
    faktorial = faktorial * i ; 
}

console.log(faktorial)


// **** soal no 6 Fibonacci

let a = 0; // 1 , 1 
let b = 1;  // 1 , 1
let fib = a+b;  // 1 ,2 , 2 
let suku = 10;

for(i = 1 ; i <= suku ; i++){ // 2
    console.log(fib);  // 1 , 1 , 
    fib = a + b;  
    a = b ; 
    b = fib ;  
}


