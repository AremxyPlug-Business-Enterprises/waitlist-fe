import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar] = useState(false);

  function handleScroll() {
    if (
      (document.documentElement && document.documentElement.scrollTop > 70) ||
      document.body.scrollTop > 70
    ) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Mobile View */}
      <div
        className={`${
          scrolled ? "bg-[#ffffff]" : "bg-transparent"
        } sticky top-0 flex justify-between p-[5%] md:hidden lg:hidden h-[70px]
        ${hideNavbar === true ? "hidden" : "flex md:hidden lg:hidden"}
        `}
        style={{
          zIndex: 999,
        }}
      >
        {" "}
        <img
          className="w-[85px] h-[18px]"
          src="./Images/aremxy2.png"
          alt="/aremxyplug"
        />
        <img
          onClick={() => setNavOpen((prev) => !prev)}
          className="w-[30px] h-[17px]"
          src="./Images/aremxyNav.png"
          alt="/aremxyplug"
        />
      </div>
      {navOpen && (
        <div
          className={` bg-[#04177f] fixed z-[50] left-[60%] text-[12px] text-center text-[#ffffff] p-6 w-[35%]   `}
        >
          <ul className="flex flex-col gap-[20px]">
            <HashLink to="#">
              {" "}
              <li onClick={() => setNavOpen((prev) => !prev)}>Home</li>
            </HashLink>
            <HashLink to="/#services">
              <li onClick={() => setNavOpen((prev) => !prev)}>Services</li>
            </HashLink>

            <HashLink to="/#aboutus">
              <li onClick={() => setNavOpen((prev) => !prev)}>About us</li>
            </HashLink>
            <HashLink to="/#signup">
              <li onClick={() => setNavOpen((prev) => !prev)}>Pricing</li>
            </HashLink>
            <HashLink to="#signup">
              <li onClick={() => setNavOpen((prev) => !prev)}>Solutions</li>
            </HashLink>
            <HashLink to="#signup">
              <li onClick={() => setNavOpen((prev) => !prev)}>FAQs</li>
            </HashLink>

            <li
              onClick={() => setNavOpen((prev) => !prev)}
              className="bg-[#ffffff] text-[#04177f] text-[8px] p-2 rounded-md"
            >
              <a
                href="mailto:hello@aremxyplug.com"
                target="_blank"
                rel="noreferrer"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
      {/* Tablet & Desktop View */}
      <div
        className={`${
          scrolled ? "bg-[#ffffff]" : "bg-transparent"
        } z-[55] sticky top-0 hidden md:flex justify-between p-[3%] px-[6%] lg:flex lg:justify-between lg:p-[2%] lg:px-[8%]
        ${hideNavbar === true ? "hidden md:hidden lg:hidden" : "md:flex "}
        `}
      >
        <img
          className="md:w-[94px] h-[20px] lg:w-[164px] lg:h-[30px]"
          src="./Images/aremxy2.png"
          alt="/aremxyplug"
        />

        <ul className="flex gap-[31px] items-center lg:gap-[55px]">
          <HashLink to="#">
            <li className="text-[9px] lg:text-[16px] hover:cursor-pointer">
              Home
            </li>
          </HashLink>
          <HashLink to="#services">
            <li className="text-[9px] lg:text-[16px] hover:cursor-pointer">
              Services
            </li>
          </HashLink>
          <HashLink to="/#aboutus">
            <li className="text-[9px] lg:text-[16px] hover:cursor-pointer">
              About us
            </li>
          </HashLink>
          <HashLink to="#signup">
            {" "}
            <li className="text-[9px] lg:text-[16px] hover:cursor-pointer">
              Pricing
            </li>
          </HashLink>
          <HashLink to="#signup">
            {" "}
            <li className="text-[9px] lg:text-[16px] hover:cursor-pointer">
              Solutions
            </li>
          </HashLink>
          <HashLink to="/#signup">
            {" "}
            <li className="text-[9px] lg:text-[16px] hover:cursor-pointer">
              FAQs
            </li>
          </HashLink>
        </ul>

        <div className="flex justify-center bg-[#04177F] rounded-md text-[#ffffff] text-[7px] p-[1%] w-[14%] lg:w-[14.5%] lg:text-[13px]">
          Contact Us
        </div>
      </div>
    </>
  );
};
