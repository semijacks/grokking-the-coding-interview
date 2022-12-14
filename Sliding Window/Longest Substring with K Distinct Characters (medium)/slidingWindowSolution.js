const inputString = 'araaci';
const K = 2;

function longestSubstringWithKDistint(str, K) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    while (Object.keys(charFrequency).length > K) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(
  `Length of the longest substring: ${longestSubstringWithKDistint(
    inputString,
    K
  )}`
);
