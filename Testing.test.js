//Author Name: Davi Mello
//Date: 3/07/2021
//Program Name: Mello_module8_unit_testing
//Purpose: unit testing word occurrences.

const { test, expect } = require("@jest/globals");
const getData = require("./Testing");
test(`Test 1: returns object length of array of objects, also known as the amount of unique words in the file (expected: 3,202 words).`, async () => {
  getData().then((data) => {
    const arrayLength = data.length;

    expect(arrayLength).toBe("3202");
  });
});
