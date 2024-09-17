import "../Header/Header.scss";
import { useState } from "react";
import backgroung_video from "../../assets/videos/baby_walk.mp4";

export default function HeaderContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="header-container">
      <div className="header-grid">
        <div className="nav-slide">
          <div className="nav-bar">
            <a href="#home">Home</a>
            <a href="#aboutUs">About Us</a>
            <a href="#ourTeam">Our Team</a>
            <a href="#service">Services</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="burger-menu" onClick={toggleMenu}>
            {!isMenuOpen ?
              <div>
                <img src="./menu.png" />
              </div>
              :
                <div className="close_btn">
                  <img src="./close.png" />

                <div className="menu_list">
                  <a href="#home">Home</a>
                  <a href="#aboutUs">About Us</a>
                  <a href="#ourTeam">Our Team</a>
                  <a href="#service">Services</a>
                  <a href="#contact">Contact</a>
                </div>
              </div>
              
            }
          </div>
        </div>
      </div>
      <video autoPlay loop muted>
        <source src={backgroung_video} type="video/mp4" />
      </video>

      <header className="viewport-header">
        <div className="transparent_div">
          <div className="flex_header">
            <div className="top_header">
              <h1>Rehab</h1>
            </div>
            <div>
              <img src="./back_logo.png" className="back_logo" alt="logo"></img>
            </div>
            <div className="bottom_header">
              <h1>Rituals</h1>
            </div>
          </div>
          <div>
            <p>Pioneering Healthcare</p>
          </div>
        </div>
        <div className="bottom_content">
          <span>
            SPECIALITY CLINIC FOR AUTISM ADHD & OTHER EXPECPTIONALITIES.
          </span>
        </div>
      </header>
    </div>
  );
}
