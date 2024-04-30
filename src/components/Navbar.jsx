import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className="container">
                <div className="bgcolor2">
                    <div className="nav m-auto  ">
                        <div className="navLeft">
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <p>123 Street, New York, USA</p>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faClock} />
                                </span>
                                <p>Mon - Fri : 09.00 AM - 09.00 PM</p>
                            </div>
                        </div>
                        <div className="navRight">
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <p>+012 345 6789</p>
                            </div>
                            <div>
                                <a href="#">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a href="#">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lowerNav dd">
                    <div className="navLeft logo">
                        <span className="car">
                            <FontAwesomeIcon icon={faCar} size="2xl" />
                        </span>
                        <h2>Car Services</h2>
                    </div>
                    <div className="lowerNavRight">
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>SERVICES</li>
                            <li>PAGES</li>
                            <li>CONTACT</li>
                        </ul>
                        <div className="quote">
                            <a href="#">
                                GET A QUOTE &nbsp;&nbsp;
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="displayContainer">
                <div className="logo">
                    <span className="car">
                        <FontAwesomeIcon icon={faCar} size="2xl" />
                    </span>
                    <h2>Car Services</h2>
                </div>
                <FontAwesomeIcon
                    onClick={() => setShow((prev) => !prev)}
                    className="menu"
                    icon={faBars}
                    size="xl"
                />
            </div>
            <div className={`navMenu ${show ? "navMenuShow" : "navMenuHide"}`}>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>PAGES</li>
                    <li>CONTACT</li>
                </ul>
            </div>
        </>
    );
};

export default Navbar;
