import GifImg from "./GifImg";
import React, { useEffect, useState } from "react";

export default function App() {
  const [dataGifs, setDataGifs] = useState([]);

  const APIKEY = "Icvi503hE2SlujmS9Q9r8bvlgX5Zgue9";
  const searchwords = "javascript";

  useEffect(() => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchwords}&api_key=${APIKEY}&limit=10`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => setDataGifs(json.data));
  }, []);

  return (
    <div>
      <h1>CODERGIFS</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "95vw",
          padding: "15px",
          justifyContent: "space-around",
        }}
      >
        {dataGifs.map((item) => (
          <GifImg
            key={item.id}
            url={item.images.downsized_large.url}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
