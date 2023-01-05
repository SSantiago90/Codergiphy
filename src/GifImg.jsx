function GifImg({ url, title }) {
  return (
    <div style={{ margin: "20px 10px" }}>
      <h4>{title}</h4>
      <img width={250} src={url} alt={title} />
    </div>
  );
}

export default GifImg;
