let nums = [2, 2, 1, 1, 1, 2, 2];

let urut = [];

for (let i = 0; i < nums.length; i++) {
  let loop = nums.filter((a) => a === nums[i]);

  if (loop.length >= nums.length / 2) {
    urut.push(...loop);
  }
}

console.log(urut[0]);
