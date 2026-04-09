// Importing
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Courses from "../components/Courses";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;
