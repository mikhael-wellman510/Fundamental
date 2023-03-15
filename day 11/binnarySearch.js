function binarySearch(arr, l, r, x) {
  // arr = 2,3,4,10,40  .. l = 0 .. r = 4 .. x=10
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2); // 0 + 2 = 2

    if (arr[mid] == x) return mid; //
    console.log(arr[2]);
    if (arr[mid] > x) return binarySearch(arr, l, mid - 1, x);

    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}

let arr = [2, 3, 4, 10, 40];
let x = 10;

console.log(binarySearch(arr, 0, arr.length - 1, x));
