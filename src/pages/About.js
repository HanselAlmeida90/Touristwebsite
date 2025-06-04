import React from "react";
import Navbar from "../components/Navbar";
import "./About.css";
import Hansel from "../pages/images/Hansel.jpg"

const About = () => {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <section className="about-hero">
          <h1>About Our Travel Journey</h1>
          <p>
            We believe travel opens minds, connects people, and builds unforgettable experiences. Our mission is to help you explore the world effortlessly.
          </p>
        </section>

        <section className="about-team">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="member">
              <img src={Hansel} alt="Founder" />

              <h3>Hansel Almeida</h3>
              <p>Founder & Travel Enthusiast</p>
            </div>
            <div className="member">
             <img src="https://i.pravatar.cc/150?img=47" alt="Co-Founder" />

              <h3>Merlyn Almeida</h3>
              <p>Co-Founder & Tour Planner</p>
            </div>
          </div>
        </section>

        <section className="about-stats">
          <h2>Our Impact</h2>
          <div className="stats-grid">
            <div className="stat-box">
              <h3>50+</h3>
              <p>Destinations</p>
            </div>
            <div className="stat-box">
              <h3>10,000+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-box">
              <h3>5 Years</h3>
              <p>Experience</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
