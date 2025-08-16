import React from "react";
import People from "../assets/group_profile.png";
import HeroImg from "../assets/hero_img.png";
import Coinbase from "../assets/coinbase_logo.png";
import Google from "../assets/google_logo.svg";
import Rakuten from "../assets/rakuten_logo.png";
import Microsoft from "../assets/microsoft_logo.png";
import Airbnb from "../assets/airbnb_logo.svg";
import Zoom from "../assets/zoom_logo.png";

const Companies = [
  { name: "Coinbase", icon: Coinbase },
  { name: "Google", icon: Google },
  { name: "Rakuten", icon: Rakuten },
  { name: "Microsoft", icon: Microsoft },
  { name: "Airbnb", icon: Airbnb },
  { name: "Zoom", icon: Zoom },
];

const Header = () => {
  return (
    <section className="mt-10 sm:mt-14 md:mt-20 flex flex-col justify-center items-center">
      <div className="relative">
        {/* Trusted Banner */}
        <div className="border border-gray-400 max-w-[270px] rounded-full text-center mx-auto">
          <div className="flex gap-2 items-center justify-center text-sm">
            <img src={People} width={90} alt="Group profile" />
            <p className="max-sm:text-xs text-gray-700">
              Trusted by 10K+ people
            </p>
          </div>
        </div>

        {/* Heading & Description */}
        <div className="text-center mt-4 relative">
          <h1 className="mx-auto text-gray-800 text-3xl md:text-4xl lg:text-6xl max-w-[800px] lg:leading-[4.5rem]">
            Turning imagination into{" "}
            <span className="bg-gradient-to-br from-blue-600 to-purple-500 text-transparent bg-clip-text">
              digital
            </span>{" "}
            impact.
          </h1>
          <p className="text-gray-600 text-sm md:text-md max-w-[600px] mx-auto mt-5">
            Creating meaningful connections and turning big ideas into
            interactive digital experiences.
          </p>

          {/* Gradient Background Blob */}
          <div
            className="
              absolute -z-10 
              top-[55%] 
              left-[75%] 
              -translate-x-1/2 -translate-y-1/2
              w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px]
              bg-gradient-to-bl from-blue-600 to-purple-300 
              rounded-full blur-3xl  overflow-x-clip opacity-80
            "
          />

          {/* Hero Image */}
          <div>
            <img
              src={HeroImg}
              alt="Hero"
              className="w-full max-w-[900px] mx-auto mt-5"
            />
          </div>
        </div>

        {/* Trusted Companies */}
        <div className="flex flex-col justify-center items-center mt-20">
          <h3 className="text-sm text-gray-500">
            Trusted by leading companies
          </h3>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-6 sm:gap-8">
            {Companies.map(({ name, icon }) => (
              <img
                key={name}
                src={icon}
                alt={`${name} logo`}
                className="h-4 sm:h-5 md:h-6 object-contain max-w-[70px] w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
