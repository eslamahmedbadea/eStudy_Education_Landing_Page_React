// Importing
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";

// NavBar basic function
function NavBar() {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    // NavBar parent container
    <div>
      <div className="flex flex-row justify-between p-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        
        {/* Our logo container */}
        <div>
          <Link to="/" className="font-semibold text-2xl p-1 cursor-pointer">
            eStudy
          </Link>
        </div>

        {/* NavBar elements */}
        <nav className="hidden md:flex flex-row justify-between gap-10 font-medium p-1 cursor-pointer">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-pointer"
          >
            About
          </Link>
          <Link
            to="courses"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-pointer"
          >
            Courses
          </Link>
          <Link
            to="reviews"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-pointer"
          >
            Reviews
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightGreen transition-all cursor-pointer"
          >
            Contact
          </Link>
        </nav>

        {/* Shows and hidden NavBar elements by hamburger icon */}
        <div
          className="flex md:hidden cursor-pointer hover:text-blue-200"
          onClick={handleChange}
        >
          <div className="p-2">
            <FaBars size={22} />
          </div>
        </div>
      </div>

      {/* NavBar elements show */}
      {menu && (
        <div>
          <div>
            <nav className="flex flex-col gap-4 font-medium p-5 cursor-pointer md:hidden">
              <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightGreen transition-all cursor-pointer"
              >
                Home
              </Link>
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightGreen transition-all cursor-pointer"
              >
                About
              </Link>
              <Link
                to="courses"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightGreen transition-all cursor-pointer"
              >
                Courses
              </Link>
              <Link
                to="reviews"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightGreen transition-all cursor-pointer"
              >
                Reviews
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="hover:text-brightGreen transition-all cursor-pointer"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
