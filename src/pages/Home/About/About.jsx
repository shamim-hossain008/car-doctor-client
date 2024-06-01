import parts from "../../../../assets/images/about_us/parts.jpg";
import person from "../../../../assets/images/about_us/person.jpg";
const About = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h1 className="text-3xl font-bold text-orange-500">About Us</h1>
            <h2 className="text-5xl font-bold">
              We are qualified & of experience in this field
            </h2>
            <p className="py-6">
              Getting a new car is definitely an enjoyable experience especially
              if it’s the first time you own a new car. The feeling of
              collecting your car key is the most memorable moment in my entire
              life, expressed
            </p>
            <p>
              Too Much Irrelevant Information You will look for information
              related to the most luminance head lights, heat and noise
              insulation, shining alloy rim, leather cover, engine enhancer,
              audio & video systems, tinting, visor and so on. There are tons of
              information on the web and millions of listings, but just not what
              you are looking for.
            </p>
            <button className="btn btn-error ">Get More Info</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
