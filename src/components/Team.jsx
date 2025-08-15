import React from "react";
import { teamData } from "../assets/assets";

const Team = () => {
  return (
    <>
      <div className="px-4">
        {/* Header */}
        <div className="mt-6 sm:mt-14 md:mt-20 max-w-6xl mx-auto py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Meet the team
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto mt-3">
            A passionate team of digital experts dedicated to your brand's
            success.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          {teamData.map(({ name, title, image }) => (
            <div
              key={name}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={image}
                  alt={name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border border-gray-200"
                />
              </div>

              {/* Name & Title */}
              <div className="min-w-0">
                <h4 className="text-md md:text-lg font-semibold text-gray-800 truncate">
                  {name}
                </h4>
                <p className="text-gray-500 text-sm md:text-base">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Team;
