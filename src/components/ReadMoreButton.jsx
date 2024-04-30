import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ReadMoreButton = () => {
    return (
        <div className="readMoreButton">
            Read More &nbsp; &nbsp;{" "}
            <FontAwesomeIcon icon={faArrowRight} size="lg" />
        </div>
    );
};

export default ReadMoreButton;
