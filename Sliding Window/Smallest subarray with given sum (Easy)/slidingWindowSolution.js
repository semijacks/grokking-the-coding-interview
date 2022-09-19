const sum = 7,
  sum1 = 8;

const testcase = [2, 1, 5, 2, 3, 2],
  testcase1 = [2, 1, 5, 2, 8],
  testcase2 = [3, 4, 1, 1, 6];

function smallestSubarrayWithGivenSum(s, arr) {
  let windowSum = 0,
    minLength = Infinity,
    windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //add the next element in the array
    windowSum += arr[windowEnd];
    //shrink the window as small as possible until the windowSum is less than s
    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1);
      windowSum -= arr[windowStart];
      windowStart += 1;
    }
  }

  if (minLength === Infinity) {
    return 0;
  }

  return minLength;
}

console.log(
  `smallest subarray length: ${smallestSubarrayWithGivenSum(sum, testcase)}`
);
console.log(
  `smallest subarray length: ${smallestSubarrayWithGivenSum(sum, testcase1)}`
);
console.log(
  `smallest subarray length: ${smallestSubarrayWithGivenSum(sum1, testcase2)}`
);
