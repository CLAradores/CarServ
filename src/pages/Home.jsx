import HeroCarousel from "../components/HeroCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faCertificate } from "@fortawesome/free-solid-svg-icons";
import AboutSection from "../components/AboutSection";
import Counter from "../components/Counter";
import ServiceSection from "../components/ServiceSection";
import BookService from "../components/BookService";
import OurTech from "../components/OurTech";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <HeroCarousel />

            {/* Three Features */}
            <div className="features">
                <div className="feature-item feature1">
                    <span>
                        <FontAwesomeIcon icon={faCertificate} size="2xl" />
                    </span>
                    <div className="feature-text">
                        <h3>Quality Servicing</h3>
                        <p>
                            Diam dolor diam ipsum sit amet diam et eos erat
                            ipsum
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="feature-item feature2">
                    <span>
                        <FontAwesomeIcon icon={faUsersGear} size="2xl" />
                    </span>
                    <div className="feature-text">
                        <h3>Expert Workers</h3>
                        <p>
                            Diam dolor diam ipsum sit amet diam et eos erat
                            ipsum
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="feature-item feature3">
                    <span>
                        <FontAwesomeIcon
                            icon={faScrewdriverWrench}
                            size="2xl"
                        />
                    </span>
                    <div className="feature-text">
                        <h3>Modern Equipment</h3>
                        <p>
                            Diam dolor diam ipsum sit amet diam et eos erat
                            ipsum
                        </p>
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            <AboutSection />
            <Counter />
            <ServiceSection />
            <BookService />
            <OurTech />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Home;
