import aboutImage from "../assets/about.jpeg";
import { FaMedal, FaPhone } from "react-icons/fa";
import plate from "../assets/plater.png";
import { BsBoxSeam } from "react-icons/bs";
import { IoBagHandleOutline } from "react-icons/io5";

const About = () => {
  return (
    <div className="bg-[#f9f9f9] py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5 md:gap-10 p-4 md:p-8 relative">
        <div className="relative md:w-1/2">
          <img
            src={aboutImage}
            alt="About Experience"
            className="w-full h-auto rounded-lg"
          />
          <div className="absolute top-0 p-2 left-0 flex items-center justify-center bg-white m-5">
            <div className="w-20 h-20 flex items-center justify-center border-4 border-yellow-400 rounded-full text-2xl font-bold">
              50+
            </div>
            <span className="p-2">
              Market <br /> Experience
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center md:w-1/2">
          <div className="space-x-6 pb-5">
            <button className="bg-[#b52b1d] py-2 px-3 text-white">About</button>
            <button>Experience</button>
            <button>Contact</button>
          </div>
          <h1 className="text-4xl font-semibold mb-4">
            Exceptional culinary experience and delicious food
          </h1>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non
            sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque
            bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur
            adipiscing elit do eiusmod tempor incididunt ut labore et dolore
            magna minim veniam nostrud exercitation.
          </p>
          <div className="flex items-center">
            <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded mr-4">
              About More
            </button>
            <span className="flex items-center text-lg">
              <FaPhone className="mr-2" />
              <span>(+123) 456-7890</span>
            </span>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative">
        <img
          src={plate}
          alt="Plate of Food"
          className="absolute -right-0 -top-20 w-[100px] object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <BsBoxSeam className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl uppercase">Fast Delivery</h3>
            <p className="text-sm">Within 30 minutes</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <FaMedal className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl uppercase">
              Absolute Dining
            </h3>
            <p className="text-sm">Best Buffet Restaurant</p>
          </div>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <div className="p-4 bg-white rounded-full shadow-lg flex items-center justify-center">
            <IoBagHandleOutline className="text-3xl text-[#c4342b]" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl uppercase">
              Pickup Delivery
            </h3>
            <p>Grab your food order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
