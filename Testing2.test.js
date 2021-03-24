//Author Name: Davi Mello
//Date: 3/07/2021
//Program Name: Mello_module8_unit_testing
//Purpose: unit testing word occurrences.

const { test, expect } = require("@jest/globals");
const getData = require("./Testing");

test(`Test 2: returns the most recurring word in the file (expected: 'the').`, async () => {
  getData().then((data) => {
    const mostRecurringWord = data[0].word;

    expect(mostRecurringWord).toBe("the");
  });
});
