import React from "react";
import { Megaphone, PenTool, FileText, Share2 } from "lucide-react";

const serviceItems = [
  {
    headline: "Advertising",
    text: "Reach your audience with targeted campaigns that maximize ROI.",
    icon: <Megaphone size={40} color="blue" />,
  },
  {
    headline: "Content Marketing",
    text: "Engage and convert with strategic content tailored to your brand.",
    icon: <PenTool size={40} color="blue" />,
  },
  {
    headline: "Content Writing",
    text: "Craft compelling stories that resonate and inspire action.",
    icon: <FileText size={40} color="blue" />,
  },
  {
    headline: "Social Media",
    text: "Build connections and grow your community across all major platforms.",
    icon: <Share2 size={40} color="blue" />,
  },
];

const Services = () => {
  return (
    <div className="mt-10 sm:mt-14 md:mt-20 max-w-6xl mx-auto py-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        How can we help?
      </h2>
      <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-3">
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {serviceItems.map(({ headline, text, icon }) => (
          <div
            key={headline}
            className="relative group rounded-3xl p-[2px] overflow-hidden"
          >
            {/* Gradient Border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradient-x opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Inner content with solid background */}
            <div className="relative flex md:flex-row flex-col items-center gap-4 p-8 bg-white rounded-3xl shadow-lg min-h-[220px] w-full">
              <div className="border-8 border-gray-300 rounded-full p-3 mb-4">
                {icon}
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-gray-950 mb-2">
                  {headline}
                </h4>
                <p className="text-gray-500 text-sm">{text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Animation Keyframes */}
      <style>
        {`
          @keyframes gradient-x {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
          }
        `}
      </style>
    </div>
  );
};

export default Services;
