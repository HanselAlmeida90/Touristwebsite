import React from "react";
import Navbar from "../components/Navbar";
import "./Dashboard.css";
import Eiffel from "../pages/images/eiffel.jpg"
import Bali from "../pages/images/Bali.jpg"
import China from "../pages/images/china.jpg"
import Europe from "../pages/images/Europe.jpg"
import Santorini from "../pages/images/Santorini.jpg"

const destinations = [
  {
    name: "Eiffel Tower",
    location: "Paris, France",
    description: "Iconic symbol of Paris with breathtaking views and rich history.",
    image: Eiffel,
  },
  {
    name: "Great Wall of China",
    location: "Beijing, China",
    description: "A historic marvel spanning over 13,000 miles of ancient defense architecture.",
       image: China,
  },
  {
    name: "Santorini",
    location: "Greece",
    description: "Famous for blue-domed buildings, sunsets and Mediterranean views.",
    image: Santorini,
  },
];

const packages = [
  {
    title: "7-Day Europe Tour",
    details: "Explore France, Germany, and Italy with flights and hotels included.",
    image: Europe,
  },
  {
    title: "Bali Relaxation",
    details: "Enjoy 5 nights in a private villa, daily spa, and beach hopping.",
    image: Bali,
  },
];

const tips = [
  "📌 Always carry a digital copy of your passport and visa.",
  "💳 Inform your bank before traveling internationally.",
  "💊 Pack basic medicine and a small first-aid kit.",
  "🔌 Carry a universal travel adapter.",
];

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        {/* Hero Section */}
        <section className="hero">
          <h1>Explore the World with TravelXplorer 🌍</h1>
          <p>Plan your next big adventure with top destinations and curated travel packages.</p>
        </section>

        {/* Featured Destinations */}
        <section className="section">
          <h2>Top Destinations</h2>
          <div className="cards-container">
            {destinations.map((place, i) => (
              <div className="card" key={i}>
                <img src={place.image} alt={place.name} />
                <h3>{place.name}</h3>
                <p><strong>{place.location}</strong></p>
                <p>{place.description}</p>
                <button className="book-btn">Book Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Travel Tips */}
        <section className="section tips-section">
          <h2>Travel Tips</h2>
          <ul>
            {tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </section>

        {/* Travel Packages */}
        <section className="section">
          <h2>Trending Packages</h2>
          <div className="cards-container">
            {packages.map((pkg, i) => (
              <div className="card" key={i}>
                <img src={pkg.image} alt={pkg.title} />
                <h3>{pkg.title}</h3>
                <p>{pkg.details}</p>
                <button className="book-btn">Check Availability</button>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="section call-to-action">
          <h2>Start Your Journey Today ✈️</h2>
          <p>Let TravelXplorer be your guide to the world. Plan, pack, and go!</p>
          <a href="/explore">
            <button className="explore-btn">Explore More</button>
          </a>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
