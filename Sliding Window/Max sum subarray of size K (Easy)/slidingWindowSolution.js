const testcase = [2, 1, 5, 1, 3, 2];
const K = 3;
function maxSubArrayOfSizeK(K, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //add the next element
    windowSum += arr[windowEnd];
    //slide the window, we don't need to slide the window if we've not hit the required windows size of 'K'
    if (windowEnd >= K - 1) {
      //calculate the maxSum
      maxSum = Math.max(maxSum, windowSum);
      //subtract the element going out
      windowSum -= arr[windowStart];
      //slide the window ahead
      windowStart += 1;
    }
  }
  return maxSum;
}

const result = maxSubArrayOfSizeK(K, testcase);
console.log(`Maximum sum of a subarray of size K: ${result}`);
