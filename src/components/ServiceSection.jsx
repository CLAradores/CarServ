import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarSide } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faOilCan } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import ReadMoreButton from "./ReadMoreButton";
import service1 from "../assets/service-1.jpg";

const ServiceSection = () => {
    return (
        <div className="servicesSection">
            <div className="servicesTitle">
                <h4>// OUR SERVICES //</h4>
                <h2>Explore Our Services</h2>
            </div>
            <div className="servicesChoices">
                <div className="services">
                    <div className="service active">
                        <span>
                            <FontAwesomeIcon icon={faCarSide} />
                        </span>
                        <h3>Dianostic Test</h3>
                    </div>
                    <div className="service">
                        <span>
                            <FontAwesomeIcon icon={faCar} />
                        </span>
                        <h3>Engine Servicing</h3>
                    </div>
                    <div className="service">
                        <span>
                            <FontAwesomeIcon icon={faGear} />
                        </span>
                        <h3>Tires Replacement</h3>
                    </div>
                    <div className="service">
                        <span>
                            <FontAwesomeIcon icon={faOilCan} />
                        </span>
                        <h3>Oil Changing</h3>
                    </div>
                </div>
                <div className="servicesIMG">
                    <img src={service1} alt="Services IMG" />
                </div>
                <div className="serviceDescription">
                    <h3>15 Years Of Experience In Auto Servicing</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt ipsa nobis necessitatibus nam, tempore
                        hic quas tenetur quod aut sapiente magni vero labore
                        rerum illum adipisci est consequuntur a commodi?
                    </p>
                    <div className="serviceChecks">
                        <div className="serviceCheck">
                            <span>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <p>Quality Servicing</p>
                        </div>
                        <div className="serviceCheck">
                            <span>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <p>Expert Workers</p>
                        </div>
                        <div className="serviceCheck">
                            <span>
                                <FontAwesomeIcon icon={faCheck} />
                            </span>
                            <p>Modern Equipment</p>
                        </div>
                    </div>
                    <ReadMoreButton />
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;
