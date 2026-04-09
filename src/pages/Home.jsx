// Importing
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <>
      <NavBar />

      <section id="home" className="pt-16">
        <HeroSection />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="courses">
        <Courses />
      </section>

      <section id="reviews">
        <Reviews />
      </section>
    </>
  );
}

export default Home;
