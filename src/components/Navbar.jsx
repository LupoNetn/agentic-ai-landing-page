import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import LogoDark from "../assets/logo_dark.svg";
import Moon from "../assets/moon_icon.svg";
import Sun from "../assets/sun_icon.svg";
import Menu from "../assets/menu_icon.svg";
import MenuDark from "../assets/menu_icon_dark.svg";
import Arrow from "../assets/arrow_icon.svg";
import { MenuIcon, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();

  return (
    <nav className="border border-b-gray-300 backdrop-blur-2xl sticky top-0">
      <div className="container mx-auto px-8 py-3 flex items-center justify-between gap-3">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#our-work">Our Work</a>
            </li>
            <li>
              <a href="#testimonial">Testimonial</a>
            </li>
          </ul>
        </div>
        <div className="md:flex md:items-center gap-5 hidden">
          <img src={Moon} alt="" />
          <button className="bg-purple-700 p-2 rounded-[20px]">
            <a href="#connect" className="flex gap-2">
              <p>Connect</p>
              <img src={Arrow} alt="" />
            </a>
          </button>
        </div>

        {/* MOBILE NAVIGATION */}

        <div className="block md:hidden">
          <div className="flex gap-3">
            <img src={Moon} alt="" />
            {isOpen ? (
              <div className="relative">
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <X color="purple" />
                </button>

                <div className="absolute right-1 top-7 bg-purple-100 rounded-md p-8">
                  <div className="block md:hidden">
                    <ul className="flex flex-col gap-4 text-sm">
                      <li>
                        <a href="#home">Home</a>
                      </li>
                      <li>
                        <a href="#services">Services</a>
                      </li>
                      <li>
                        <a href="#our-work">Our Work</a>
                      </li>
                      <li>
                        <a href="#testimonial">Testimonial</a>
                      </li>
                      <button className="bg-purple-700 px-6 py-2 text-white rounded-[20px]">
                        <a href="#connect" className="flex gap-2">
                          <p>Connect</p>
                          <img src={Arrow} alt="" />
                        </a>
                      </button>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="cursor-pointer"
              >
                <MenuIcon color="purple" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
