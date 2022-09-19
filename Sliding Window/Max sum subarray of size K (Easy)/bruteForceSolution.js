const testcase = [2, 1, 5, 1, 3, 2];
const K = 3;
function maxSubArrayOfSizeK(K, arr) {
  let maxSum = 0,
    windowSum = 0;

  for (let i = 0; i < arr.length - K + 1; i++) {
    windowSum = 0;
    for (let j = i; j < i + K; j++) {
      windowSum += arr[j];
    }
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}

const result = maxSubArrayOfSizeK(K, testcase);
console.log(`Maximum sum of a subarray of size K: ${result}`);
