import GifImg from "./GifImg";
import React, { useState } from "react";

export default function App() {
  const [dataGifs, setDataGifs] = useState([]);

  const APIKEY = "Icvi503hE2SlujmS9Q9r8bvlgX5Zgue9";
  const searchwords = "cats";

  const url = `http://api.giphy.com/v1/gifs/search?q=${searchwords}&api_key=${APIKEY}&limit=10`;

  function fetchGifs() {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => setDataGifs(json.data));
  }

  return (
    <div>
      <h1>CODERGIFS</h1>
      <button onClick={fetchGifs}>Get gif</button>
      {dataGifs.map((item) => (
        <GifImg
          key={item.id}
          url={item.images.downsized_large.url}
          title={item.title}
        />
      ))}
    </div>
  );
}
