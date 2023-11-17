import { aboutImage1 } from "../assets/images";
import { aboutImage2 } from "../assets/images";
import { aboutImage3 } from "../assets/images";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 ">
      <div className="container mx-auto py-12">
        <div className="text-[45px] font-montserrat font-extrabold dark:text-white container mt-20 xl:pl-96 text-right px-[2%]">
          We champion continual progress for athletes and sport by taking action
          to help athletes reach their potential. Every job at NIKE, Inc. is
          grounded in a team-first mindset, cultivating a culture of innovation
          and a shared purpose to leave an enduring impact.
        </div>
        <div className="px-[2%] flex flex-wrap my-20 flex-row-reverse justify-between ">
          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <img
              src={aboutImage1}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 ">
            <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">
              Stories, Volume 3: All Movement, All Moments
            </h2>
            <a href="#" className="text-gray-500  hover:text-white">
              Explore the latest stories
            </a>
          </div>
        </div>
        <div className="px-[2%] flex flex-wrap my-20 justify-between ">
          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <img
              src={aboutImage2}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 ">
            <h2 className="text-3xl font-bold mb-4 dark:text-gray-200 ml-5">
              NIKE, Inc: Keeping athletes at the center of everything we do.
            </h2>
            <a href="#" className="text-gray-500  hover:text-white ml-5">
              Learn more about NIKE, Inc
            </a>
          </div>
        </div>
        <div className="px-[2%] flex flex-wrap my-20 flex-row-reverse justify-between ">
          <div className="w-full md:w-3/4 mb-4 md:mb-0">
            <img
              src={aboutImage3}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="w-full md:w-1/4 ">
            <h2 className="text-3xl font-bold mb-4 dark:text-gray-200">
              Our Impact: Breaking Barriers Since 1972
            </h2>
            <a href="#" className="text-gray-500  hover:text-white">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
