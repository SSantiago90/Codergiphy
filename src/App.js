import GifImg from "./GifImg";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";

function SearchGifs() {
  const [dataGifs, setDataGifs] = useState([]);
  // /search/pokemon
  // { keyword: "pokemon"}

  let { keyword } = useParams();

  const APIKEY = "EKhf4RvvCY28KgzIN1lnGlSNkOMO27dH";

  useEffect(() => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=${APIKEY}&limit=10`;

    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((json) => setDataGifs(json.data));
  }, [keyword]);

  return (
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
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <h1>CODERGIFS</h1>
        <nav>
          <Link to="/search/pokemon">Pokemon</Link>
          <Link to="/search/dogs">Perros</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>todo</h1>}></Route>
          <Route path="/search/:keyword" element={<SearchGifs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
