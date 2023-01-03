import GifImg from "./GifImg";
import React, { useState } from "react";

export default function App() {
  const [dataGifs, setDataGifs] = useState([]);

  const APIKEY = "Icvi503hE2SlujmS9Q9r8bvlgX5Zgue9";

  function fetchGifs(searchwords) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchwords}&api_key=${APIKEY}&limit=10`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => setDataGifs(json.data));
  }

  function handleInputSearch(evt) {
    const searchword = evt.target.value;
    fetchGifs(searchword);
  }

  return (
    <div>
      <h1>CODERGIFS</h1>

      <label>
        Buscar:
        <input onChange={handleInputSearch} name="searchword"></input>
      </label>

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
