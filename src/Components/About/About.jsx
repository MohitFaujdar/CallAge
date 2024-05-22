import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img
          src={play_icon}
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
          voluptate dolor provident facere magni, quia eligendi debitis
          mollitia, aut, fuga libero quis autem fugiat fugit dolore error saepe
          ipsa asperiores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          culpa doloremque asperiores saepe corrupti aspernatur perferendis
          voluptas veniam numquam facere eum dicta fuga ducimus non aliquid
          iusto, unde vitae modi!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, ut nisi
          voluptas modi inventore nostrum consectetur nulla nobis tempora cumque
          tenetur? Dicta sint explicabo fugiat odio itaque quo quam laboriosam.
        </p>
      </div>
    </div>
  );
};

export default About;
