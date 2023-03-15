function search(a, b) {
  let i;

  for (i = 0; i < a.length; i++) {
    if (a[i] === b) {
      return `ada bilangan yg sama`;
    }
  }
  return -1;
}

console.log(search([2, 20, 10, 3], 20));
