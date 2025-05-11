import React from "react";
import Navbar from "../components/Navbar";
// import "./Dashboard.css";
import "../pages/Dashboard.css"

const images = [
  "https://source.unsplash.com/400x300/?beach",
  "https://source.unsplash.com/400x300/?mountains",
  "https://source.unsplash.com/400x300/?cityscape",
  "https://source.unsplash.com/400x300/?desert",
  "https://source.unsplash.com/400x300/?waterfall",
  "https://source.unsplash.com/400x300/?temple",
  "https://source.unsplash.com/400x300/?adventure",
  "https://source.unsplash.com/400x300/?forest",
];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery-container">
        <h2>Explore Our Travel Gallery</h2>
        <div className="image-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt={`travel-${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
