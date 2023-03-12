// function recursif(a) {
//   if (a === 6) return 0;
//   return a + recursif(a + 1);
// }

// console.log(recursif(1));

function recur2(a, sum = 1) {
  sum *= a;
  if (a === 1) {
    return sum;
  }
  return recur2(a - 1, sum);
}

console.log(recur2(5));
