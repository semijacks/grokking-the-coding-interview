const testcases = [
  { arr: [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k: 2 },
  { arr: [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k: 3 },
];

function lengthofLongestSubarrayWithOnes(arr, k) {
  let windowStart = 0,
    maxLength = 0,
    maxOnesCount = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] === 1) {
      maxOnesCount += 1;
    }

    if (windowEnd - windowStart + 1 - maxOnesCount > k) {
      if (arr[windowStart] === 1) {
        maxOnesCount -= 1;
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(lengthofLongestSubarrayWithOnes(testcases[0].arr, testcases[0].k));
console.log(lengthofLongestSubarrayWithOnes(testcases[1].arr, testcases[1].k));
