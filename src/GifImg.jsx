function GifImg({ url, title }) {
  const styleGif = {
    border: "solid 1px #87a0b0",
    borderRadius: "10px",
    padding: "15px",
    marginBottom: "25px",
  };
  return (
    <div style={styleGif}>
      <h4>{title}</h4>
      <img src={url} alt={title} />
    </div>
  );
}

export default GifImg;
