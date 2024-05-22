import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We ensure the best education</h1>
        <p>
          A college’s quality of education is often reflected in its commitment
          to academic excellence, fostering a vibrant community of scholars and
          learners. With a curriculum designed to challenge and inspire,
          students are encouraged to think critically and creatively. Supportive
          faculty, state-of-the-art facilities, and a diverse array of research
          opportunities contribute to a dynamic learning environment.
        </p>
        <button className="btn">
          Explare more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
