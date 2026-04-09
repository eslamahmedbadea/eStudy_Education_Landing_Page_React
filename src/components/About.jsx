// Importing
import img from "../assets/about.svg";
import Button from "../layout/Button";
import { Link } from "react-scroll";

function About() {
  return (
    <div className="md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14">
      
      {/* Left Side */}
      <div className="w-full md:w-2/4">
        <img src={img} alt="aboutImg" />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/4 text-xl text-center space-y-4">
        <h2 className="text-4xl font-semibold">
          Why Choose <span className="text-brightGreen font-bold">eStudy?</span>
        </h2>
        <p className="text-lightText">
          At eStudy, we offer expert-led courses designed to help you grow
          academically and professionally learn anything, anytime, at your own
          pace.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>
    </div>
  );
}

export default About;
