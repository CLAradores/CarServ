import React from "react";

const BookService = () => {
    return (
        <div className="bookService">
            <div className="bookServiceFlex">
                <div className="bookText">
                    <h2>
                        Certified and Award Winning Car Repair Service Provider
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Officiis modi eius asperiores rem id voluptas dolor
                        saepe, nulla impedit possimus excepturi ex, corporis,
                        deserunt quibusdam facere earum fuga ipsum eum?
                    </p>
                </div>
                <div className="bookForm">
                    <h2>Book For A Service</h2>
                    <form action="process.php">
                        <input
                            className="form1"
                            type="text"
                            placeholder="Your Name"
                        />
                        <input
                            className="form2"
                            type="email"
                            placeholder="Your Email"
                        />
                        <select className="form3" name="cars" id="cars">
                            <option value="volvo">Select A Service</option>
                            <option value="saab">Service 1</option>
                            <option value="mercedes">Service 2</option>
                            <option value="audi">Service 3</option>
                        </select>
                        <input
                            className="form4"
                            id="date"
                            type="text"
                            placeholder="Service Date"
                        />

                        <textarea
                            className="form5"
                            name=""
                            id=""
                            cols="40"
                            rows="2"
                            placeholder="Special Request"
                        ></textarea>
                        <button>BOOK NOW</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookService;
