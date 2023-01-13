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

  let params = useParams();

  const APIKEY = "EKhf4RvvCY28KgzIN1lnGlSNkOMO27dH";

  const asyncFetch = async () => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${params.keyword}&api_key=${APIKEY}&limit=10`;

    try {
      const respuesta = await fetch(url);
      const json = await respuesta.json();
      setDataGifs(json.data);
    } catch (err) {
      alert(err);
    }
  };

  useEffect(() => {
    asyncFetch();
  }, [params.keyword]);

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
          <Link to="/search/cats">Gatos</Link>
          <Link to="/search/javascript">Javascript</Link>
        </nav>
        <Routes>
          <Route path="/" element={<h1>todo</h1>}></Route>
          <Route path="/search/:keyword" element={<SearchGifs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
