import { TextField, Button } from "@mui/material";
import "../ContactUs/Footer.scss"

export default function FooterContainer() {
    return (<div id='contact' className="footer">
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
                    <div className="contact">
                        <div>
                            <img src="./mail.png"></img>
                        </div>
                        <div>
                            <p>rehabrituals@gmail.com</p>
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
                            <img src="whatsapp.png"></img>
                            <img src="mail.png"></img>
                            <img src="facebook.png" style={{padding:"0px"}}></img>
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
                            <div>{/* //         <img src="./target.png"></img> */}</div>
                        </div>

                        <div className="map-container">
                            <img src="./map.png" className="map-image" alt="Map" />
                            <p>
                                19-10,
                                <br />
                                Balaji Nagar 1st Main Rd,
                                <br />
                                Defence Colony,
                                <br />
                                Ekkatuthangal,
                                <br />
                                Chennai,
                                <br />
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
                                <TextField
                                    fullWidth
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={6}
                                />
                            </div>
                            <div>
                                <Button fullWidth variant="outlined">
                                    SEND
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_social">
                <p>Copyright © 2024 Rehab Rituals - All Rights Reserved.</p>
            </div>
        </div>
    </div>)
}