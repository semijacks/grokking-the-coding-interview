let testcase = 'aabccbb',
  testcase1 = 'abbbb',
  testcase2 = 'abccde';

function noRepeatSubstring(str) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      windowStart = Math.max(windowStart, charFrequency[rightChar] + 1);
    }
    charFrequency[rightChar] = windowEnd;
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

console.log(`Length of the longest substring: ${noRepeatSubstring(testcase)}`);
console.log(`Length of the longest substring: ${noRepeatSubstring(testcase1)}`);
console.log(`Length of the longest substring: ${noRepeatSubstring(testcase2)}`);
