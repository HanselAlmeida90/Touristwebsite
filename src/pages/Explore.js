// src/pages/Explore.js
import React from "react";
import Navbar from "../components/Navbar";
import "./Explore.css";

const Explore = () => {
  return (
    <>
      <Navbar />
      <div className="explore">
        <h1>Explore Destinations</h1>
        <p>Discover the beauty of different countries and cities.</p>
        <div className="explore-grid">
          <div className="explore-card">
            <img src="https://source.unsplash.com/400x300/?maldives" alt="Maldives" />
            <h3>Maldives</h3>
            <p>Crystal clear water, white sand beaches and luxury resorts.</p>
          </div>
          <div className="explore-card">
            <img src="https://source.unsplash.com/400x300/?tokyo" alt="Tokyo" />
            <h3>Tokyo</h3>
            <p>A vibrant city blending tradition and modernity in Japan.</p>
          </div>
          <div className="explore-card">
            <img src="https://source.unsplash.com/400x300/?newyork" alt="New York" />
            <h3>New York</h3>
            <p>The city that never sleeps. Full of life and skyscrapers.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
