import "./Gallery.css";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
  ];

  return (
    <section className="gallery">
      <h1>Better Beats Best</h1>
      <div className="images">
        {gallery.map((element, index) => (
          <div key={index}>
            <img src={element} alt={`gallery-${index}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
