import React, { useState } from "react";
import GifImg from "./GifImg";

export default function App() {
  const [gifs, setGifs] = useState([]);
  const [keyword, setKeyword] = useState("pokemon");

  const api_key = "ll5jVWbjSxKR3YSbIpWFxQsFsVGIbH3k";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=10`;

  async function fetchGifs() {
    const reponseAPI = await fetch(url);
    console.log(reponseAPI);
    const jsonAPI = await reponseAPI.json();
    console.log(jsonAPI);
    setGifs(jsonAPI.data);
  }

  function handleChangeKeyword(evt) {
    setKeyword(evt.target.value);
  }

  return (
    <div
      style={{
        margin: "0px auto",
        padding: "10px 50px",
      }}
    >
      <h1>CODERGIFS</h1>
      <input
        onChange={handleChangeKeyword}
        placeholder="pokemon"
        name="keyword"
      ></input>
      <button onClick={fetchGifs}>Get gif</button>
      <div
        style={{
          justifyContent: "space-around",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {gifs.map((gif) => (
          <GifImg
            key={gif.title}
            url={gif.images.downsized_medium.url}
            title={gif.title}
          />
        ))}
      </div>
    </div>
  );
}
