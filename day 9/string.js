let str = new String("");
let str2 = "Ayam Goyeng"; /// Sample

console.log(str);
console.log(str2);

const tes = str2.charAt(10); // mencari karakter
console.log(tes);

const tes2 = str2.length; // hitung semua karakter
console.log(tes2);

const tes3 = str2.includes("goyeng"); // mencari kata2 , dan print true / false
console.log(tes3);
// contoh

if (str2.includes("Ayam")) {
  console.log("ada ayam di kalimat tersebut");
}

const tes4 = str2.indexOf("a");
console.log(tes4);

const tes5 = str2.indexOf("Ayam Goyeng"); ///
console.log(tes5);

const tes6 = str2.lastIndexOf(); /// ini belum paham
console.log(tes6);

let baru = "ayam goreng";
const testB = baru.replace("kucing");
const testA = baru.replace(/ayam/g, "kucing"); // pakai regex menghilangkan string di tengah
console.log(testA);
console.log(testB);

const aa = baru.split(" "); //memisahkan menjadi 2;
const bb = baru.split(); // mengubah menjadi array
const cc = baru.split(""); // mengubah menjadi array satu2
console.log(aa);
console.log(bb);
console.log(cc);
