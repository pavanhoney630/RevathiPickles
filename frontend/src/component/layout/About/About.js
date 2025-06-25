import React from 'react';
import "./About.css";
import { Button, Avatar, Typography } from '@mui/material';
import { GitHub, YouTube, Instagram, LinkedIn } from '@mui/icons-material';
import Logo2 from "../../../images/logo2.png";

const About = () => {
    const visitInstagram = () => {
        window.location="https://www.instagram.com/iamsumankd/";
    };
  return (
    <div className="aboutSection">
    <div></div>
    <div className="aboutSectionGradient"></div>
    <div className="aboutSectionContainer">
      <Typography component="h1">About Jangam Pickels</Typography>

      <div>
        <div>
          <Avatar
            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            src= {Logo2}
            alt="logopickle"
          />
          <Typography>Revathi Pickles</Typography>
          <Button onClick={visitInstagram} color="primary">
          Welcome to Jangam Pickels, your one-stop destination for Jangam pickles. 
          We take immense pride in offering you a diverse range of locally crafted, freshly homemade pickles that 
          are deeply rooted in Jangam tradition and culture. Our mission is to bring 
          the rich flavors and traditional essence of Jangam tastes to your table, wherever you are in the world.
          </Button>
          
        </div>
        <div className="aboutSectionContainer2">
          <Typography component="h2">Follow US</Typography>
          <a
            href="https://www.youtube.com/@Pavanhoney0405"
            target="blank"
          >
            <YouTube className="youtubeSvgIcon" />
          </a>

          <a href="https://www.instagram.com/pavanhoney7/" target="blank">
            <Instagram className="instagramSvgIcon" />
          </a>
          <a href="https://github.com/pavanhoney630" target="blank">
            <GitHub className="instagramSvgIcon" />
          </a>
          <a href="https://www.linkedin.com/in/pavankalyan-sivalingam-453298239/" target="blank">
            <LinkedIn className="instagramSvgIcon" />
          </a>
          <Typography component="h2">Our Story</Typography>
          <p>
          <Button color="primary">
          Our journey began with a deep appreciation for the flavors of Jangam Tradition. The art of making
           Pickles has been passed down through generations, and we saw the need to share these unique
            tastes with pickle enthusiasts globally. Each jar of pickle represents the love, heritage, 
            and meticulous attention to detail that Jangam households have put into their culinary traditions 
            for years. We work closely with Jangam family artisans and home cooks to curate a collection
           that celebrates the diversity of Jangam Tradition, offering you a taste of the Revathi's kitchen.
          </Button>
          </p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
