// Author Name: Davi Mello
//Date: 2/28/2021
//Program Name: Mello_module7_word_occurrence
//Purpose: "word occurrences" application.

// import './App.css';
import { useState, useEffect } from "react";
const cheerio = require("cheerio");
const axios = require("axios");

// https://cors-anywhere.herokuapp.com/

const App = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    const getData = async () => {
      await axios
        .get(
          "https://secret-ocean-49799.herokuapp.com/http://shakespeare.mit.edu/macbeth/full.html"
        )
        .then((res) => {
          const $ = cheerio.load(res.data);
          const text = $("html").text();
          const words = text
            .toLowerCase()
            .replace(/[^a-zA-Z ]/g, " ")
            .replace(/\s\s+/g, " ")
            .split(" ");

          words.forEach((currentWord) => {
            if (array.some((object) => object.word === currentWord)) {
              const findObject = array.find(
                (object) => object.word === currentWord
              );
              findObject.count += 1;
            } else {
              array.push({ word: currentWord, count: 1 });
            }
          });
          setArray(
            array.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 20)
          );
        });
    };
    getData();
  }, []);
  return (
    <div
      style={{
        margin: "0 auto",
        padding: "2rem",
        background: "#121212",
        color: "#fff",
        fontFamily: "Helvetica, arial",
      }}
    >
      <table style={{ width: "100%" }}>
        <h2>Word Frequency Table</h2>
        <tr>
          <th style={{ width: "50%", paddingBottom: "2rem" }}>Word</th>
          <th style={{ width: "50%", paddingBottom: "2rem" }}>
            Word Frequency
          </th>
        </tr>
        {array.map((object) => (
          <tr>
            <td style={{ textAlign: "center", paddingBottom: "0.5rem" }}>
              {object.word}
            </td>
            <td style={{ textAlign: "center", paddingBottom: "0.5rem" }}>
              {object.count}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
