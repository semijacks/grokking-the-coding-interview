const input = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const K = 5;
function maxSubArrayOfSizeK(K, arr) {
  const result = [];
  let windowSum = 0.0,
    windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    //add the next element
    windowSum += arr[windowEnd];
    //slide the window, we don't need to slide the window if we've not hit the required windows size of 'K'
    if (windowEnd >= K - 1) {
      //calculate the average
      result.push(windowSum / K);
      //subtract the element going out
      windowSum -= arr[windowStart];
      //slide the window ahead
      windowStart += 1;
    }
  }
  return result;
}

const result = maxSubArrayOfSizeK(K, input);
console.log(`Averages of subarray of size K: ${result}`);
