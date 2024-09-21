import "../Header/Header.scss";
import { useState } from "react";
import backgroung_video from "../../assets/videos/baby_walk.webm";

export default function HeaderContainer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div id="home" className="header-container">
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
              <div className="burger">
                <div>
                <img src="./header/menu/menu.png" /></div>
              </div>
              :
              <div className="close_btn">
                <img src="./header/menu/close.png" />

                <div className={`menu_list ${isMenuOpen ? "animation" : ""}`} >
                  <div className="menu_img">
                    <div><img src="./header/menu/home.png"></img></div>
                    <div> <a href="#home">Home</a></div>
                  </div>
                  <div className="menu_img">
                    <div><img src="./header/menu/information.png"></img></div>
                    <div> <a href="#aboutUs">About Us</a></div>
                  </div>

                  <div className="menu_img">
                    <div><img src="./header/menu/group.png"></img></div>
                    <div><a href="#ourTeam">Our Team</a></div>
                  </div>
                  <div className="menu_img">
                    <div><img src="./header/menu/service.png"></img></div>
                    <div><a href="#service">Services</a></div>
                  </div>
                  <div className="menu_img">
                    <div><img src="./header/menu/contact.png"></img></div>
                    <div><a href="#contact" style={{paddingBottom:"5px"}}>Contact</a></div>
                  </div>
                </div>
              </div>

            }
          </div>
        </div>
      </div>
      <video autoPlay loop muted>
        <source src={backgroung_video} type="video/webm" />
      </video>

      <header className="viewport-header">
        <div className="transparent_div">
          <div className="flex_header">
            <div className="top_header">
              <h1>Rehab</h1>
            </div>
            <div>
              <img src="./header/back_logo.png" className="back_logo" alt="logo"></img>
            </div>
            <div className="bottom_header">
              <h1>Rituals</h1>
            </div>
          </div>
          <div>
            <p>Pioneering Research Driven Therapy</p>
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
