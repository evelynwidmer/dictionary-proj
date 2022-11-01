import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");


function handleResponse(response) {
    console.log(response[0]);
}

  function search(event) {
    event.preventDefault();

    // documentation: https://dictionaryapi.dev/

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  https://api.dictionaryapi.dev/api/v2/entries/en/hello

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSumit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
