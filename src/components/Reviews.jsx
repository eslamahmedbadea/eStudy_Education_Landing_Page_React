// Importing
import ReviewsCard from "../layout/ReviewsCard";
import img1 from "../assets/images/pic1.png";
import img2 from "../assets/images/pic2.png";
import img3 from "../assets/images/pic3.png";

function Reviews() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5">
      <h2 className="text-4xl font-semibold">
        Our <span className="text-brightGreen font-bold">Reviews</span>
      </h2>
      <div className="flex flex-col md:flex-row gap-5 mt-5">
        <ReviewsCard
          img={img1}
          review="This platform completely changed how I learn. The web development course was clear, practical, and incredibly well structured." cls
        />
        <ReviewsCard 
          img={img2}
          review="The app development course gave me the skills to build my first mobile app in just a few weeks. Highly recommended!" cls
        />
        <ReviewsCard
          img={img3}
          review="I enrolled in the graphic design course as a complete beginner and now I'm working freelance. The instructors are amazing."  cls
        />
      </div>
    </div>
  );
}

export default Reviews;
