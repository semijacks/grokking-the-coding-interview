const input = [1, 3, 2, 6, -1, 4, 1, 8, 2];
const K = 5;
function maxSubArrayOfSizeK(K, arr) {
  const result = [];
  for (let i = 0; i < arr.length - K + 1; i++) {
    let sum = 0.0;
    for (let j = i; j < i + K; j++) {
      sum += arr[j];
    }
    result.push(sum / K);
  }
  return result;
}

const result = maxSubArrayOfSizeK(K, input);
console.log(`Averages of subarray of size K: ${result}`);
