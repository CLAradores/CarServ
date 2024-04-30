import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";

const OurTech = () => {
    return (
        <div className="techSection">
            <div>
                <h4>// OUR TECHNICIANS //</h4>
                <h2>Our Expert Technicians</h2>
            </div>
            <div className="technicians">
                <div className="technician">
                    <div className="profile">
                        <div className="socials">
                            <img src={team1} alt="" />
                            <div className="hoverBG">
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="details">
                            <h3>Full Name</h3>
                            <p>Designation</p>
                        </div>
                    </div>
                </div>
                <div className="technician">
                    <div className="profile">
                        <div className="socials">
                            <img src={team2} alt="" />
                            <div className="hoverBG">
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="details">
                            <h3>Full Name</h3>
                            <p>Designation</p>
                        </div>
                    </div>
                    <div className="hoverBG">
                        <span>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </div>
                </div>
                <div className="technician">
                    <div className="profile">
                        <div className="socials">
                            <img src={team3} alt="" />
                            <div className="hoverBG">
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="details">
                            <h3>Full Name</h3>
                            <p>Designation</p>
                        </div>
                    </div>
                    <div className="hoverBG">
                        <span>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </div>
                </div>
                <div className="technician">
                    <div className="profile">
                        <div className="socials">
                            <img src={team4} alt="" />
                            <div className="hoverBG">
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faFacebookF} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </span>
                                <span>
                                    <a href="#">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div className="details">
                            <h3>Full Name</h3>
                            <p>Designation</p>
                        </div>
                    </div>
                    <div className="hoverBG">
                        <span>
                            <FontAwesomeIcon icon={faFacebookF} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faTwitter} />
                        </span>
                        <span>
                            <FontAwesomeIcon icon={faInstagram} />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTech;
