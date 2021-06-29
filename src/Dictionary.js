import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const pexelsApiKey =
      "563492ad6f91700001000001fee8c1b1dc45498cbc7f8aa70dbe814e";
    let pexelesApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    const headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelesApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    event.currentTarget.reset();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>Dictionary App</h1>
        <h2 id="what-word">What word are you looking for?</h2>
        <form onSubmit={handleSubmit}>
          <input
            id="search-bar"
            type="search"
            autoComplete="off"
            placeholder="Enter a word"
            onChange={handleKeywordChange}
          />
          <input
            id="search-button"
            type="submit"
            value="Search"
            onChange={handleKeywordChange}
          ></input>
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
