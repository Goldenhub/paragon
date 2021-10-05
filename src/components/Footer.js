import React from "react";

class Footer extends React.Component {
    
  render() {
    return (
      <div className="footer">
        <div className="innerFooter">
            <ul className="options">
                <li>Solutions</li>
                <li><a href="/">Students</a></li>
                <li><a href="/">Companies</a></li>
                <li><a href="/">Institutions</a></li>
            </ul>
            <ul className="options">
                <li>Success Stories</li>
                <li><a href="/">Case Studies</a></li>
            </ul>
            <ul className="options">
                <li>Contact</li>
                <li><a href="/">Contact Us</a></li>
                <li><a href="/">info@paragonone.com</a></li>
            </ul>
            <ul className="options">
                <li>Policies</li>
                <li><a href="/">EEO Policy</a></li>
                <li><a href="/">Privacy Policy</a></li>
            </ul>
            <ul className="imgContainer">
                <li><a href="/"><img width="20%" src="/img/facebook.svg" alt="facebook" /></a></li>
                <li><a href="/"><img width="20%" src="/img/linkedin.svg" alt="linkedin" /></a></li>
                <li><a href="/"><img width="20%" src="/img/instagram.png" alt="instagram" /></a></li>
            </ul>
        </div> 
        <div className="copy">
            <p>&copy; 2021 Paragon One. All rights reserved.</p>
        </div>
      </div>
    );
  }
}


export default Footer;
