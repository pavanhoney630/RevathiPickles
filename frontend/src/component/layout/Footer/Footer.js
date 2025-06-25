import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
    return(
        <footer id = "footer">
            <div className = "leftFooter">
                <h4>Download Our App<a href=""></a></h4>
                <img src={playStore} alt="playStore" />
                <img src={appStore} alt="appStore" />
            </div>
            <div className = "middleFooter">
                <h1>Revathi Pickles</h1>
                <p>One stop destination for all kinds of freshly homemade pickles, from Jangam Traditions</p>
                <p> Copyrights &copy;Pavan</p>
            </div>
            <div className = "rightFooter">
                <h4>Follow US</h4>
                <a href = "https://www.facebook.com/profile.php?id=61565508457367" target = "_blank" rel = "noreferrer">Facebook</a>
                <a href = "https://www.instagram.com/pavanhoney7/" target = "_blank" rel = "noreferrer">Instagram</a>
                <a href = "https://x.com/pavanhoney17574" target = "_blank" rel = "noreferrer">Twitter</a>
            </div>

        </footer>
    );
};

export default Footer;