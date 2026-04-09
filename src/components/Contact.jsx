// Importing
import img from "../assets/contact.svg";
import Button from "../layout/Button";

function Contact() {
  return (
    // Main container
    <div className="min-h-screen flex flex-col items-center justify-center md:mx-32 mx-5 mt-10">

      {/* Section heading */}
      <h2 className="text-4xl font-semibold">
        Contact <span className="text-brightGreen font-bold">Us</span>
      </h2>

      {/* Form and image wrapper */}
      <div className="flex flex-col md:flex-row justify-between w-full mt-10">

        {/* Contact form */}
        <form className="w-full md:w-2/5 space-y-5">
        
          {/* Name field */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="userName">
              Your Name
            </label>
            <input
              className="w-full py-3 px-4 rounded-lg border border-lightText shadow-sm hover:shadow-lg transition-all"
              type="text"
              name="userName"
              id="userName"
              placeholder="Enter Your Name"
            />
          </div>

          {/* Email field */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="userEmail">
              Your Email
            </label>
            <input
              className="w-full py-3 px-4 rounded-lg border border-lightText shadow-sm hover:shadow-lg transition-all"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Enter Your Email"
            />
          </div>

          {/* Subject field */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="userSubject">
              Subject
            </label>
            <input
              className="w-full py-3 px-4 rounded-lg border border-lightText shadow-sm hover:shadow-lg transition-all"
              type="text"
              name="userSubject"
              id="userSubject"
              placeholder="Enter Subject"
            />
          </div>

          {/* Message field */}
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="userMessage">
              Your Message
            </label>
            <textarea
              className="w-full py-3 px-4 rounded-lg border border-lightText shadow-sm hover:shadow-lg transition-all resize-none"
              name="userMessage"
              id="userMessage"
              placeholder="Enter Your Message"
              rows={4}
            />
          </div>

          {/* Submit button */}
          <div className="flex justify-center">
            <button>
              <Button title="Sign Up" />
            </button>
          </div>
        </form>

        {/* Contact illustration */}
        <div className="w-full md:w-2/4 flex items-center justify-center mt-10 md:mt-0">
          <img src={img} alt="imgForm" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
