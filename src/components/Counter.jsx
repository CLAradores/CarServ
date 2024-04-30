import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faUsersGear } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

const Counter = () => {
    return (
        <div className="counter">
            <div className="count">
                <span>
                    <FontAwesomeIcon icon={faCheck} />
                </span>
                <h2>1234</h2>
                <p>Years Experience</p>
            </div>
            <div className="count">
                <span>
                    <FontAwesomeIcon icon={faUsersGear} />
                </span>
                <h2>1234</h2>
                <p>Expert Technicians</p>
            </div>
            <div className="count">
                <span>
                    <FontAwesomeIcon icon={faUsers} />
                </span>
                <h2>1234</h2>
                <p>Satisfied Clients</p>
            </div>
            <div className="count">
                <span>
                    <FontAwesomeIcon icon={faCar} />
                </span>
                <h2>1234</h2>
                <p>Compleate Projects</p>
            </div>
        </div>
    );
};

export default Counter;
