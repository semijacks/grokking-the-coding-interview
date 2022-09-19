let testcases = [
  { str: 'aabccbb', k: 2 },
  { str: 'abbcb', k: 1 },
  { str: 'abccde', k: 1 },
];

function lengthOfLongestSubstring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];

    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }

    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(lengthOfLongestSubstring(testcases[0].str, testcases[0].k));
console.log(lengthOfLongestSubstring(testcases[1].str, testcases[1].k));
console.log(lengthOfLongestSubstring(testcases[2].str, testcases[2].k));
