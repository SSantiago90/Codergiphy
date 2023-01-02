function GifImg({ url, title }) {
  return (
    <div>
      <h4>{title || "Not found"}</h4>
      <img src={url} alt={title} />
    </div>
  );
}

export default GifImg;
