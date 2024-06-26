import { useState } from "react";

function App() {
  const [dictionary, setDictionary] = useState([
    {
      word: "React",
      meaning: "A JavaScript library for building user interfaces.",
    },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ]);
  const [search, setSearch] = useState("");
  const [defination, setDefination] = useState("");

  const searchHandler = (valueToSearch) => {
    if (valueToSearch) {
      const result = dictionary.find(
        (entry) => entry.word.toLowerCase() === valueToSearch.toLowerCase()
      )?.meaning;

      result
        ? setDefination(result)
        : setDefination("Word not found in the dictionary.");
    }
  };

  return (
    <>
      <h1>Dictionary App</h1>
      <input
        placeholder="Search for a word"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
      />
      <button onClick={() => searchHandler(search)}>Search</button>
      <h4>Defination :</h4>
      {defination && <p>{defination}</p>}
    </>
  );
}

export default App;
