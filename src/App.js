import React, { useState } from "react";

const dictionaryData = [
  {
    word: "React",
    meaning: "A JavaScript library for building user interfaces.",
  },
  { word: "Component", meaning: "A reusable building block in React." },
  { word: "State", meaning: "An object that stores data for a component." },
];

const XDictionary = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [meaning, setMeaning] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    const foundWord = dictionaryData.find(
      (item) => item.word.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundWord) {
      setMeaning(foundWord.meaning);
      setError("");
    } else {
      setMeaning("");
      setError("Word not found in the dictionary.");
    }
  };

  return (
    <div>
      <h1>Dictionary</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <h2>Definition:</h2>
      {error === "Word not found in the dictionary." && <p>{error}</p>}
      {meaning && !error && <p>{meaning}</p>}
    </div>
  );
};

export default XDictionary;
