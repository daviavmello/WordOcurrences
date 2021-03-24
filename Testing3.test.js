//Author Name: Davi Mello
//Date: 3/07/2021
//Program Name: Mello_module8_unit_testing
//Purpose: unit testing word occurrences.

const { test, expect } = require("@jest/globals");
const getData = require("./Testing");

test(`Test 3: returns the sum of words of the top three most recurring words in the file (expected: 1,700 words — the: 732 words; and: 565 words; to: 403). `, async () => {
  getData().then((data) => {
    const topthreeWordsSum = data[0].count + data[1].count + data[2].count;

    expect(topthreeWordsSum).toBe("1700");
  });
});
