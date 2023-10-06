import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { GrFacebook } from "react-icons/gr";
import { ImInstagram } from "react-icons/im";
import { RiTwitterXLine } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
import { useState } from "react";

export const WaitlistSignUp = () => {
  const [state, setState] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleSignUp = () => {
    const regEx = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    if (!regEx.test(state)) {
      setError("Invalid Email...");
      setSuccessMessage("");
    } else {
      setSuccessMessage("Successful");
      setError("");
    }
  };

  return (
    <div className="">
      <img
        className="mt-[-10%] w-[210px] h-[255px] md:w-[400px] md:h-[500px] lg:w-[500px] lg:h-[600px]"
        src="./Images/Clock.png"
        alt="clock-logo"
      />
      <img
        className="flex mx-auto mt-[-24%] w-[172px] h-[39px] md:w-[200px] md:h-[50px] md:mt-[-28%] lg:mt-[-24%]"
        src="./Images/aremxyLogo2.png"
        alt="aremxyLogo"
      />
      <p className="leading-[30px] font-semibold  text-[18px] mx-auto text-center w-[80%] my-[10%] text-[#7e7e7e] md:my-[4%] md:text-[20px] lg:my-[3%] lg:text-[45px]">
        Ready to be Part of Something Extraordinary?
      </p>

      <p className="leading-[30px] text-center mx-[5%] text-[16px] text-[#344054] md:text-[18px] lg:w-[1078px] lg:text-[32px] lg:leading-[50px] lg:mx-auto">
        Join our exclusive waitlist and be at the forefront of innovation! Don't
        miss your chance to experience seamless global transactions like never
        before. Be the first to unlock a world of possibilities. Simply enter
        your email below and embark on this exciting journey with us. Trust us;
        it's worth the wait! 🤓🎉
      </p>

      <div
        id="signup"
        style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
        className="bg-[#fff] mx-[4%] my-[5%] h-[430px] rounded-[10px] flex flex-col gap-[55px] md:flex-row md:h-[199px] md:justify-center md:items-center lg:rounded-[19px] lg:w-[1078px] lg:mx-auto lg:h-[256px]"
      >
        <img
          className="w-[194px] h-[151px] mx-auto mt-[2%] md:mx-0 lg:w-[250px] lg:h-[194px]"
          src="./Images/waitlist.png"
          alt="/waitlist-logo"
        />
        <div
          className={`${
            error || successMessage ? "lg:gap-[20px]" : "lg:gap-[40px]"
          } flex flex-col gap-[55px] md:w-[50%] lg:w-[551px] `}
        >
          <p className="text-center text-[22px] text-[#344054] leading-[15px] lg:text-[32px]">
            Join The Waitlist
          </p>
          <div
            className={`${
              error || successMessage ? "gap-[13px]" : "gap-[20px]"
            } flex flex-col md:flex-row lg:border-b-[1px] lg:border-b-[#04177f] lg:pb-[2.5%] lg:justify-between`}
          >
            <input
              className="pl-[5%] text-[16px] text-[#7e7e7e] border-b-[1px] border-b-[#04177f] pb-[3%] outline-none lg:pb-0 lg:text-[16px] lg:border-b-0"
              type="email"
              value={state}
              onChange={handleChange}
              placeholder="Habib@aremxy.com"
            />
            {error ? (
              <p className="pl-[5%] text-[14px] text-[#F95252] md:hidden">
                {error}
              </p>
            ) : (
              <p className="pl-[5%] text-[16px] text-[#17E506] md:hidden">
                {successMessage}
              </p>
            )}
            <button
              onClick={handleSignUp}
              className="bg-[#04177f] text-[#fff] rounded-[13px] mx-[1%] text-[14px] px-[21.77px] py-[10px] md:mx-0 md:w-[100%] lg:w-[180px]"
            >
              Sign Up
            </button>
          </div>
          {error ? (
            <p className="hidden pl-[5%] text-[16px] text-[#F95252] md:block">
              {error}
            </p>
          ) : (
            <p className="hidden pl-[5%] text-[16px] text-[#17E506] md:block">
              {successMessage}
            </p>
          )}
        </div>
      </div>

      <p className="text-[16px] text-center text-[#344054] w-[320px] mx-auto my-[10%] md:w-[450px] md:text-[18px] md:my-[7%] ">
        Keep holding on! Your patience is admirable, and great things come to
        those who wait!
      </p>
      <div className="text-[#58555c] flex flex-col gap-[20px]">
        <p className="text-[16px] text-center"> Follow Us on</p>
        <div className="mb-[40%] flex gap-[29px] w-[282px] mx-auto text-[31px] md:mb-[20%] lg:mb-[10%]">
          <div className="hover:text-[#04177f]">
            <BsLinkedin />
          </div>
          <div className="hover:text-[#04177f]">
            <GrFacebook />
          </div>
          <div className="hover:text-[#04177f]">
            <ImInstagram />
          </div>
          <div className="hover:text-[#04177f]">
            <RiTwitterXLine />
          </div>
          <div className="hover:text-[#04177f]">
            <GrMail />
          </div>
        </div>
      </div>
    </div>
  );
};
