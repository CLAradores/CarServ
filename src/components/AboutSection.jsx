import React from "react";
import ReadMoreButton from "../components/ReadMoreButton";
import aboutIMG from "../assets/about.jpg";

const AboutSection = () => {
    return (
        <div className="aboutUsSection">
            <div className="item about-img">
                <img src={aboutIMG} alt="AboutIMG" />
                <div className="abs-texts">
                    <h3>15</h3> <span>Years</span>
                    <h4>Experience</h4>
                </div>
            </div>
            <div className="item aboutSection-text">
                <h4>// ABOUT US //</h4>
                <h2>
                    <span>CarServ</span> Is The Best Place For Your Auto Care
                </h2>
                <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                </p>
                <div className="parent-expert">
                    <div className="expert">
                        <h3>01</h3>
                        <div>
                            <h4>Professional & Expert</h4>
                            <p>Diam dolor diam ipsum sit amet diam et eos</p>
                        </div>
                    </div>
                    <div className="expert">
                        <h3>01</h3>
                        <div>
                            <h4>Professional & Expert</h4>
                            <p>Diam dolor diam ipsum sit amet diam et eos</p>
                        </div>
                    </div>
                    <div className="expert">
                        <h3>01</h3>
                        <div>
                            <h4>Professional & Expert</h4>
                            <p>Diam dolor diam ipsum sit amet diam et eos</p>
                        </div>
                    </div>
                </div>
                <ReadMoreButton />
            </div>
        </div>
    );
};

export default AboutSection;
