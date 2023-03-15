let a = 0;
let b = 1;
let fib = a + b;

function prob(angka) {
  for (let i = 0; i < angka; i++) {
    fib = a + b;
    a = b;
    b = fib;
  }
  return fib;
}

console.log(prob(6));
