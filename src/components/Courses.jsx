// Importing
import CoursesCard from "../layout/CoursesCard";
import webImg from "../assets/web-dev.svg";
import appImg from "../assets/App-dev.svg";
import graphicImg from "../assets/graphic.svg";
import digitalImg from "../assets/digital.svg";

function Courses() {
  return (
    <div className="min-h-screen flex flex-col items-center md:px-32 px-5 my-10">
      {/* Courses headling */}
      <h2 className="text-4xl font-semibold">
        Our <span className="text-brightGreen font-bold">Courses</span>
      </h2>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <CoursesCard
          img={webImg}
          title="Web Development"
          description="Learn to build modern, responsive websites using HTML, CSS, JavaScript, and popular frameworks like React and Next.js."
        />
        <CoursesCard
          img={appImg}
          title="App Development"
          description="Master mobile app development for iOS and Android using React Native and Flutter to create powerful cross-platform applications."
        />
        <CoursesCard
          img={graphicImg}
          title="Graphic Design"
          description="Develop your creative skills in visual design, branding, typography, and tools like Adobe Photoshop and Illustrator."
        />
        <CoursesCard
          img={digitalImg}
          title="Digital Marketing"
          description="Grow brands online through SEO, social media marketing, email campaigns, and data-driven advertising strategies."
        />
      </div>
    </div>
  );
}

export default Courses;
