import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import carousel1 from "../assets/carousel-1.png";
import carousel2 from "../assets/carousel-2.png";

const HeroCarousel = () => {
    return (
        <>
            <Swiper
                navigation={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero_section1">
                        <div className="carousel1">
                            <div className="leftCarousel">
                                <h4>// CAR SERVICING //</h4>
                                <h1>Qualified Car Repair Service Center</h1>

                                <a href="#">
                                    LEARN MORE &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                            <div className="rightCarousel">
                                <img src={carousel1} alt="image1" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero_section2">
                        <div className="carousel1 ">
                            <div className="leftCarousel">
                                <h4>// CAR SERVICING //</h4>
                                <h1>Qualified Car Repair Service Center</h1>

                                <a href="#">
                                    LEARN MORE &nbsp;
                                    <FontAwesomeIcon icon={faArrowRight} />
                                </a>
                            </div>
                            <div className="rightCarousel">
                                <img src={carousel2} alt="image1" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default HeroCarousel;
