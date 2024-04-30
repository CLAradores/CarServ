import testimonial1 from "../assets/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial-2.jpg";
import testimonial3 from "../assets/testimonial-3.jpg";
import testimonial4 from "../assets/testimonial-4.jpg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
const Testimonials = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    let appendNumber = 4;
    let prependNumber = 1;
    return (
        <div className="testimonials">
            <div>
                <h4>// TESTIMONIAL //</h4>
                <h2>Our Clients Say!</h2>
            </div>
            <Swiper
                onSwiper={setSwiperRef}
                slidesPerView={"auto"}
                centeredSlides={true}
                spaceBetween={30}
                modules={[Pagination, Navigation]}
                className="mySwiper swipeContainer"
            >
                <SwiperSlide>
                    {" "}
                    <div className="person">
                        <img src={testimonial1} alt="testimonial1" />
                        <div>
                            <h3>Client Name</h3>
                            <p>Profession</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque vitae aperiam, expedita quidem autem
                            dicta nemo ab sed cupiditate dolor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="person">
                        <img src={testimonial2} alt="testimonial1" />
                        <div>
                            <h3>Client Name</h3>
                            <p>Profession</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque vitae aperiam, expedita quidem autem
                            dicta nemo ab sed cupiditate dolor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="person">
                        <img src={testimonial3} alt="testimonial1" />
                        <div>
                            <h3>Client Name</h3>
                            <p>Profession</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque vitae aperiam, expedita quidem autem
                            dicta nemo ab sed cupiditate dolor.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <div className="person">
                        <img src={testimonial4} alt="testimonial1" />
                        <div>
                            <h3>Client Name</h3>
                            <p>Profession</p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Neque vitae aperiam, expedita quidem autem
                            dicta nemo ab sed cupiditate dolor.
                        </p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Testimonials;
