import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to the Tourist Explorer</h1>
      <p>Discover top destinations around the world.</p>
      <Link to="/explore">Explore Destinations</Link>
    </div>
  );
}

export default Home;
