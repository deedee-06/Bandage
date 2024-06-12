import "../About/About.css"
import user from "../../assets/images/user.png";
import camera from "../../assets/images/camera.png";
import model1 from "../../assets/images/model1.png";
import city from "../../assets/images/city.png";
import icecream from "../../assets/images/icecream.png";
import model2 from "../../assets/images/model2.png";
import writer from "../../assets/images/writer.png";
import mountain from "../../assets/images/mountain.png";
import land from "../../assets/images/land.png";
import sea from "../../assets/images/sea.png";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

function About() {
  return (
    <div className="contain">
      <div className="left">
        <h3>What they say about us</h3>
        <div className="user">
          <img src={user} alt="image" />
          <span>
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <FaStar className="star" />
            <CiStar className="bg-star" />
          </span>
          <p>
            Slate helps you see how many more days you need to work to reach
            your financial goal.
          </p>
          <h5>Regina Miles</h5>
          <h6>Designer</h6>
        </div>
      </div>

      <div className="right">
        <img src={camera} alt="images" />
        <img src={model1} alt="images" />
        <img src={city} alt="images" />
        <img src={icecream} alt="images" />
        <img src={model2} alt="images" />
        <img src={writer} alt="images" />
        <img src={mountain} alt="images" />
        <img src={land} alt="images" />
        <img src={sea} alt="images" />
      </div>
    </div>
  );
}

export default About;
