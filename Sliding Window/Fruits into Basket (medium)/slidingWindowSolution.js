let testcase = ['A', 'B', 'C', 'A', 'C'],
  testcase1 = ['A', 'B', 'C', 'B', 'B', 'C'];

function fruitsIntoBasket(fruits) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruits)) {
      charFrequency[rightFruit] = 0;
    }

    charFrequency[rightFruit] += 1;

    while (Object.keys(charFrequency).length > 2) {
      const leftFruit = fruits[windowStart];
      charFrequency[leftFruit] -= 1;
      if (charFrequency[leftFruit] === 0) {
        delete charFrequency[leftFruit];
      }
      windowStart += 1;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(`Maximum number of fruits: ${fruitsIntoBasket(testcase)}`);
console.log(`Maximum number of fruits: ${fruitsIntoBasket(testcase1)}`);
