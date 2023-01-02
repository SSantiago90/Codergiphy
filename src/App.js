import GifImg from "./GifImg";
import React, { useState } from "react";

export default function App() {
  const [dataGifs, setDataGifs] = useState([]);

  const APIKEY = "EKhf4RvvCY28KgzIN1lnGlSNkOMO27dH";

  const url = `http://api.giphy.com/v1/gifs/search?q=simpsons&api_key=EKhf4RvvCY28KgzIN1lnGlSNkOMO27dH`;

  function fetchGifs() {
    console.log("fetch...");
  }

  return (
    <div>
      <h1>CODERGIFS</h1>
      <button onClick={fetchGifs}>Get gif</button>
    </div>
  );
}
