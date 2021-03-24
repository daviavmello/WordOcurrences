//Author Name: Davi Mello
//Date: 3/07/2021
//Program Name: Mello_module8_unit_testing
//Purpose: unit testing word occurrences.

const cheerio = require("cheerio");
const axios = require("axios");

async function getData() {
  try {
    let array = [];
    const res = await axios.get(
      "https://secret-ocean-49799.herokuapp.com/http://shakespeare.mit.edu/macbeth/full.html"
    );
    const $ = cheerio.load(res.data);
    const text = $("html").text();
    const words = text
      .toLowerCase()
      .replace(/[^a-zA-Z ]/g, " ")
      .replace(/\s\s+/g, " ")
      .split(" ");

    words.forEach((currentWord) => {
      if (array.some((object) => object.word === currentWord)) {
        const findObject = array.find((object) => object.word === currentWord);
        findObject.count += 1;
      } else {
        array.push({ word: currentWord, count: 1 });
      }
    });
    array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 20);

    return array;
  } catch (error) {
    console.log("Error" + error);
    throw error;
  } finally {
    console.log("Done");
  }
}

// console.log(getData());

// getData().then((data) => {
//   console.log(data);
// });

module.exports = getData;
