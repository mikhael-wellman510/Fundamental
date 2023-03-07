let n = 5;
let output = ''; //'' '' '' ''  
let counter = 1;

for (let i = 1; i <= n; i++) {
  // Menambahkan spasi sebelum angka
  for (let j = 1; j <= n - i; j++) {
    output += ' ';
  }

  // Menambahkan angka ke output
  for (let k = 1; k <= i; k++) {
    output += counter + ' ';
    counter++;
  }

  // Mengakhiri baris
  output += '\n';
}

console.log(output);


