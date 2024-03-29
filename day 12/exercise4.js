function naikTangga(n) {
  if (n === 1) {
    return 1;
  }

  let dp = new Array(n + 1).fill(0);

  console.log(dp);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(naikTangga(4)); // Output: 1111 112 211 121 22
