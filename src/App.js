import GifImg from "./GifImg";
import React, { useState } from "react";

export default function App() {
  const [dataGifs, setDataGifs] = useState([]);

  const APIKEY = "EKhf4RvvCY28KgzIN1lnGlSNkOMO27dH";

  function fetchGifs(searchKeyword) {
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchKeyword}&api_key=${APIKEY}&limit=10`;
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setDataGifs(json.data);
      });
  }

  return (
    <div>
      <h1>CODERGIFS</h1>
      <button onClick={() => fetchGifs("pokemon")}>Get Pokemons</button>
      <button onClick={() => fetchGifs("cats")}>Get Cats</button>
      {dataGifs.map((gif) => (
        <GifImg
          key={gif.title}
          url={gif.images.downsized.url}
          title={gif.title}
        />
      ))}
    </div>
  );
}
