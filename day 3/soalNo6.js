// ** soal no 6 ○ Contoh: Example : “hello world” → “Hello World” mengubah huruf depan jadi kapital

let string = `hallo nama saya mikhael`;

let tampung = string.split(",");

console.log(tampung)

for(  i = 0 ; i < tampung.length ; i++ ){
    tampung[i] = tampung[i].charAt(0).toUpperCase() + tampung[i].slice(1);
    
}


let string2 = tampung.join(" ");

console.log(`${string} ->  ${tampung}`)