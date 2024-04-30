import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div className="subFooter">
                    <div className="address">
                        <h3>Address</h3>
                        <div className="contactInfo">
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} />
                                </span>
                                <h5>123 Street, New York, USA</h5>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>
                                <h5>+012 345 67890</h5>
                            </div>
                            <div>
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                <h5>info@example.com</h5>
                            </div>
                        </div>
                        <div className="socialIcons">
                            <span>
                                <FontAwesomeIcon icon={faTwitter} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faFacebookF} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faYoutube} />
                            </span>
                            <span>
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </span>
                        </div>
                    </div>
                    <div className="openingHours">
                        <h3>Opening Hours</h3>
                        <div>
                            <h4>Monday - Friday:</h4>
                            <p>09.00 AM - 09.00 PM</p>
                        </div>
                        <div>
                            <h4>Saturday - Sunday:</h4>
                            <p>09.00 AM - 09.00 PM</p>
                        </div>
                    </div>

                    <div className="footerServices">
                        <h3>Services</h3>
                        <div className="servicesLink">
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                                Diagnostic Test
                            </a>
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                                Engine Servicing
                            </a>
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                                Tire Replacement
                            </a>
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                                Oil Changing
                            </a>
                            <a href="#">
                                <span>
                                    <FontAwesomeIcon icon={faAngleRight} />
                                </span>
                                Vacuam Cleaning
                            </a>
                        </div>
                    </div>

                    <div className="newsLetter">
                        <h3>Newsletter</h3>
                        <p>Lorem ipsum dolor sit amet consectetur gasgsdgs.</p>
                        <form action="process.php">
                            <div class="input-container">
                                <input type="email" placeholder="Your email" />
                                <button type="submit">SIGNUP</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="mainFooter">
                    <div>
                        &copy;<span>CarSrv</span>, All Right Reserved. Designed
                        By Charles
                    </div>
                    <div>Home | Cookies | Help | FQAs</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
