import React from "react";
import Person from "../assets/person_icon.svg";
import EmailIcon from "../assets/email_icon.svg";
import Arrow from "../assets/arrow_icon.svg";

const CTA = () => {
  return (
    <>
      <div className="px-4">
        {/* Heading Section */}
        <div className="mt-3 sm:mt-14 md:mt-20 max-w-6xl mx-auto py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Reach out to us
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto mt-3">
            Ready to grow your brand? Let's connect and build something
            exceptional together.
          </p>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl mx-auto">
          <form action="" className="space-y-6">
            {/* Name & Email Row (stacks on mobile) */}
            <div className="flex flex-col md:flex-row gap-6">
              {/* Name Field */}
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Your name
                </label>
                <div className="relative">
                  {/* Icon inside input */}
                  <img
                    src={Person}
                    alt="Person Icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  />
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-500 rounded-md py-3 pl-10 pr-3 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex-1">
                <label
                  htmlFor="email"
                  className="block mb-1 font-medium text-gray-700"
                >
                  Your email
                </label>
                <div className="relative">
                  <img
                    src={EmailIcon}
                    alt="Email Icon"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
                  />
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-500 rounded-md py-3 pl-10 pr-3 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block mb-1 font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message..."
                rows="5"
                className="w-full border border-gray-500 rounded-md py-3 px-3 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button className="bg-purple-700 p-2 rounded-[20px] flex gap-2">
                <p className="text-white">Connect</p>
                <img src={Arrow} alt="" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CTA;
