// Importing
import { Link } from "react-scroll";
import Button from "../layout/Button";
import img from "../assets/hero.svg";

function HeroSection() {
  return (
    <div className="min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10">
      
      {/* Left Side */}
      <div className="md:w-2/4 text-left space-y-5">
        <h2 className="text-5xl font-semibold leading-tight text-start">
          Knowledge With{" "}
          <span className="text-brightGreen font-bold">eStudy</span>
        </h2>
        <p className="text-lightText text-xl text-start">
          eStudy is your gateway to a world of limitless learning possibilities.
          With our cutting-edge eLearning platform, you can explore a vast
          library of courses, from academic subjects to practical skills, all
          designed to help you achieve your goals.
        </p>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/4">
        <img src={img} alt="heroImg" />
      </div>
    </div>
  );
}

export default HeroSection;
