import "./App.scss";
import backgroung_video from "./assets/videos/baby_walk.mp4";
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import butterfly from "../public/butterfly.json";
import { SERVICE_CATEGORIES, SERVICES, OUR_TEAM } from "./ListConstants.js";
import { TextField, Button } from '@mui/material';

function App() {
  const animationContainer = useRef(null);
  const animationContainer2 = useRef(null);
  const flowerContainer = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Change the renderer type if needed (canvas, html)
      loop: true,
      autoplay: true,
      animationData: butterfly, // Your own JSON animation data
    });

    const anime = lottie.loadAnimation({
      container: animationContainer2.current,
      renderer: "svg", // Change the renderer type if needed (canvas, html)
      loop: true,
      autoplay: true,
      animationData: butterfly, // Your own JSON animation data
    });

    anime.setSpeed(0.8);
    return () => {
      anim.destroy();
      anime.destroy();
    };
  }, []);

  const [selectedTopic, setSelectedTopic] = useState(SERVICES["OT"]);
  const [selectedTopicLable, setSelectedTopicLable] = useState(
    SERVICE_CATEGORIES[0].label
  );
  // const [selectedButtonId, setSelectedButtonId] = useState('OT')
  const [categoryId, setCategoryId] = useState(SERVICE_CATEGORIES[0].id);

  console.log(SERVICES["OT"]);

  function handleSelect(selectedButton) {
    // setSelectedButtonId(selectedButton.id)
    setSelectedTopic(SERVICES[selectedButton.id]);
    setSelectedTopicLable(selectedButton.label);
    setCategoryId(selectedButton.id);
  }
  // console.log(selectedButton.id)
  // console.log(categoryId, selectedButtonId)

  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = (key) => {
    setIsReadMore((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  console.log();
  

  return (
    <>
      <div className="header-container">
        <div className="header-grid">
          <div className="nav-slide">
            <div className="nav-bar">
              <a href="#home">Home</a>
              <a href="#aboutUs">About Us</a>
              <a href="#">Our Team</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
        <video autoPlay loop muted>
          <source src={backgroung_video} type="video/mp4" />
        </video>

        <header className="viewport-header">
          <div className="transparent_div">
            <h1>
              <div className="flex_header">
                <div className="top_header">
                  {" "}
                  <header>Rehab</header>
                </div>
                <div>
                  <img
                    src="./back_logo.png"
                    className="back_logo"
                    alt="logo"
                  ></img>
                </div>
                <div className="bottom_header">
                  {" "}
                  <header>Rituals</header>
                </div>
              </div>
            </h1>
            <div><p>Pioneering Healthcare</p></div>
          </div>
          <div className="bottom_content">
            {" "}
            <span>
              SPECIALITY CLINIC FOR AUTISM ADHD & OTHER EXPECPTIONALITIES.
            </span>
          </div>
        </header>
      </div>

      <div id="aboutUs" className="aboutus">
        <div ref={animationContainer} className="anim"></div>
        <div className="about_container">
          <div className="aboutus_flex">
            <div className="image_about">
              <div className="photo-style">
                <div style={{ paddingBottom: "40px" }}>
                  <img src="./about_img_01.jpg"></img>
                </div>
              </div>
            </div>
            <div className="about_content">
              <h2>Welcome to Rehab Rituals</h2>
              <p>
                Rehab Rituals is a private healthcare clinic, established since
                2022. The clinic houses different streams of professionals
                striving on the developmental needs and challenges of the child.
                Rehab Rituals was started with a vision to create a holistic
                developmental opportunities for every child.{" "}
              </p>
              <h2>Our Philosophy</h2>
              <p>
                Rehab Rituals was started with a vision to create a holistic
                developmental opportunities for every child. We constantly
                endeavor, bridging the gap between research and practice to
                ensure the best outcomes in the children with developmental
                needs
              </p>
            </div>
          </div>
        </div>
        <div ref={animationContainer2} className="anime"></div>
        <div className="about_container">
          <div className="aboutus_flex_reverse">
            <div className="image_about">
              <div className="photo-style">
                <img src="./about_img_01.jpg"></img>

                <p>Vinodhini C</p>
              </div>
            </div>
            <div className="about_content_reverse">
              <h2>Know me</h2>
              <p>
                Warm greetings, from my side of the desk. <b>I’m Vinodhini C</b>
                , <span>Lead Occupational Therapist</span> and Owner of Rehab
                Rituals. I have completed my Master’s in Occupational Therapy in
                the Specialty of Neurosciences. I own certifications for various
                other adjunct modalities like yoga and therapeutic listening. My
                passion for Neurology, the amazement towards the complexity of
                the brain and the connecting dots between knowing to doing had
                lead to discovering effective methods of interventions. In our
                striving effort to help our little brains excel, we are onwards
                in extending our services to all children in need, to offer our
                helping hands in uplifting them from their developmental gaps.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="services_container">
        <div className="services">
          <div className="service_header">
            <h1>Our Professional Services</h1>
            <p>"We provide professional services such as Occupational Therapy, Physiotherapy, Speech Therapy, Special Education, Yoga, Physical Fitness and Nutrition.
              Our Services extend to both neurotypical and neurodivergent individuals with and without developmental delays"</p>
          </div>
          <div className="service_list">
            {SERVICE_CATEGORIES.map((btnMenu, index) => (
              <div
                onClick={() => handleSelect(btnMenu)}
                className={
                  selectedTopicLable === btnMenu.label ? "selected-service" : ""
                }
              >
                <p
                  className={
                    selectedTopicLable === btnMenu.label ? "selected-text" : ""
                  }
                >
                  {btnMenu.label}
                </p>
                <div
                  className={
                    selectedTopicLable === btnMenu.label
                      ? "selected-line"
                      : "hover_line"
                  }
                ></div>
              </div>
            ))}
          </div>
          <div className="service_detail_container">
            {/* <div div className='service_Detail_header'> <h2>{selectedTopicLable}</h2>
              </div> */}

            <div className="service_cards_container">
              {Object.keys(selectedTopic).map((key) => (
                <div
                  key={key}
                  className={`service-card ${categoryId ? "zoom_in" : ""}`}
                >
                  <div className="image_container">
                    <div className="image_card">
                      <img
                        src={selectedTopic[key].image}
                        alt={selectedTopic[key].title}
                        className="service-image"
                      />
                    </div>
                  </div>
                  <div
                    key={key}
                    className={`service_card_img_content ${isReadMore[key] ? "expanded" : ""
                      }`}
                  >
                    <h3>{selectedTopic[key].title}</h3>
                    <p>
                      {isReadMore[key]
                        ? selectedTopic[key].description
                        : selectedTopic[key].description.slice(0, 300)}
                      {selectedTopic[key].description.length > 300 && (
                        <span onClick={() => toggleReadMore(key)}>
                          {isReadMore[key] ? "Show Less" : "...Read More"}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="our_team_container">
        <div className="our_team">
          <div className="our_team_header">
            <h1>Our Team and Facilities</h1>
            <p>
                "Our team at Rehab Rituals consists of highly trained medical
                professionals who are dedicated to helping our patients achieve
                optimal health. We offer a wide range of services to meet the
                needs of our community."
              </p>
          </div>

          <div className="our_team_facility">
            <div>
              <div className="our_team_img">
                <img src="./about_img_01.jpg"></img>
                <h4>Vinodhini C</h4>
                <p>Lead & Occupational Therapist</p>
              </div>
            </div>
            <div className="our_team_details">
              <h2>Our Facilities</h2>
              <p>
                We take pride in our state-of-the-art facilities at Rehab
                Rituals. Our clinics are equipped with the latest technology to
                provide our patients with the best possible care.
              </p>
              <h2>Our Set Apart Clinic</h2>
              <p>We house the most innovative snoezelen multisensory  room in the city. Virtual reality system sets apart our sensory room experience to maximize the learning process.
                We provide research based interventions with the most innovative and holistic methods</p>
            </div>
          </div>
          <div className="our_team_content">
            {OUR_TEAM.map((content, index) => (
              <div className="our_team_border">
                <div className="our_team_img">
                  <img src={content.image}></img>
                </div>
                <h4>{content.name}</h4>
                <p>{content.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer_flex">
          <div className="footer_div">
            <div className="header_test">
              <div>
                <h5>Need Help ?</h5>
              </div>
              <div>
                <h1>Contact Us</h1>
              </div>
              <div className="contact">
                <div>
                  <img src="./telephone.png"></img>
                </div>
                <div>
                  <p>9994927394</p>
                </div>
              </div>
            </div>

            <div className="footer_aboutus_container">
              <div className="footer_aboutus">
                <div>
                  <img src="./day-care-logo.jpg"></img>
                </div>
                <div>
                  <p>
                    We love our customers, so feel free to visit during normal
                    business hours.
                  </p>
                </div>
                <div className="socia_icons">
                  <img src="instagram.png"></img>
                  <img src="twitter.png"></img>
                  <img src="facebook.png"></img>
                  <img src="youtube.png"></img>
                  <img src="linkedin.png"></img>
                </div>
              </div>
              <div className="working_hours">
                <h4>Working Hours</h4>
                <div>
                  <p>Monday to Saturday</p>
                  <p>09:00 AM - 05:00 PM</p>
                </div>
              </div>
              <div className="address">
                <div className="address_flex">
                  <div>
                    <h4>Address </h4>
                  </div>
                 <div>
           {/* //         <img src="./target.png"></img> */}
                 </div>
                </div>


                <div className="map-container">
                  <img src="./map.png" className="map-image" alt="Map" />
                  <p>
                    19-10,<br />
                    Balaji Nagar 1st Main Rd,<br />
                    Defence Colony,<br />
                    Ekkatuthangal,<br />
                    Chennai,<br />
                    Tamil Nadu, India
                  </p>
                </div>
              </div>
            </div>
            <div className="footer_container_right">
              <div className="message_header">
                <p>Talk to Us</p>
              </div>
              <div className="message_box_conrtainer">
                <div className="textfield_div">
                  <div>
                    <TextField fullWidth label="Name" id="fullWidth" />
                  </div>
                  <div>
                    <TextField fullWidth label="Mail ID" id="fullWidth" />
                  </div>
                  <div>
                    <TextField fullWidth
                      id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={6}
                    />
                  </div>
                  <div>
                    <Button fullWidth variant="outlined">SEND</Button></div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_social">
            <p>Copyright © 2024 Rehab Rituals - All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;