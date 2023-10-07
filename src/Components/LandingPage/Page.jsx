import React, { useState } from "react";
import styles from "../LandingPage/Page.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { WaitlistSignUp } from "./WaitlistSignUp";
import { HashLink } from "react-router-hash-link";

const Page = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");
  const [buttonTextTwo, setButtonTextTwo] = useState("More");

  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
  }

  function handleClickTwo() {
    setSecondDrop((prev) => !prev);
    setButtonTextTwo((prevText) => (prevText === "More" ? "Less" : "More"));
  }
  return (
    <div>
      <div className={styles.hero}>
        <div className=" w-[90%] pt-[40%] mx-auto md:pt-[10%] md:w-[] lg:pt-[25%]">
          <div className="text-justify tracking-widest w-[100%] text-[#04177F] text-[20px] font-extrabold md:text-[25px] md:font-bold lg:tracking-wide lg:text-[45px] lg:font-extrabold lg:leading-[px]">
            The One-Stop Shop for Individuals and Businesses for Telecom,
            Payments, and Digital Services.
          </div>
          <div className="text-justify text-[16px] w-[100%] mt-[5%] lg:text-[18px] lg:w-[515px]">
            With AremxyPlug's robust APIs and software solutions intended to
            help you increase revenue, you can accept payments and transfer
            money internationally.
          </div>
          <div className="flex gap-[6%] mt-[5%]">
            <HashLink
              to="#signup"
              className="bg-[#04177F] text-[#ffffff] p-[3%] text-center rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%] lg:h-[45px]"
            >
              Sign up
            </HashLink>

            <HashLink
              to="#signup"
              className="bg-[#04177F] text-[#ffffff] p-[3%] text-center rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%] lg:h-[45px]"
            >
              Sign in
            </HashLink>
          </div>
        </div>
        <img
          className="mx-auto mt-[12%] md:w-[40%] md:h-[30%] lg:w-[50%] lg:h-[40%]"
          src="./Images/desktop:phone.png"
          alt="/"
        />
      </div>

      {/* WHY CHOOSE US */}
      <div className="flex flex-col bg-[#04177F] text-[#ffffff] px-[5%] py-[15%] gap-[30px] md:py-[8%] lg:py-[8%] lg:px-[8%]">
        <div>
          <p className="mb-[5%] text-[20px] font-semibold text-center md:text-[26px] lg:text-[35px]">
            Why Choose Us?
          </p>
          <div className="text-justify md:text-center text-[12px] w-[95%] md:text-[10.33px] lg:text-[18px]">
            The team at AremxyPlug is made up of a variety of individuals who
            share the traits of resilience and problem-solving abilities. As a
            result, we made the decision to pool our resources and develop a
            platform that offers services for your digital needs.
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:my-[3%] md:gap-y-[25%] lg:gap-x-[10%]">
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Reliable
            </p>
            <div className="text-[12px] text-center w-[95%] md:w-[200px] md:text-[10px] md:text-justify lg:text-[16px] lg:w-[100%]">
              We use technology to provide business solutions that open up new
              possibilities, and enhance company's productivity.
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Trusted
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We built reputation as a trusted service provider to deliver
              high-quality services with honesty, integrity, and transparency.
            </div>
          </div>
          <div>
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Affordable
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We offer competitive and affordable pricing to ensure that our
              services are accessible to everyone.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Swift 24/7 Delivery
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%] ">
              We offer swift 24/7 delivery to ensure that your needs are met
              promptly and efficiently.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Secure and Automated
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We use the latest security protocols and technologies to protect
              your data and information.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] mb-[5%] lg:text-[24px]">
              Customer Support
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-justify md:w-[200px] md:text-[10px] lg:text-[16px] lg:w-[100%]">
              We value your feedback and strive to provide exceptional customer
              support when you need help.
            </div>
          </div>
        </div>
        {firstDrop && (
          <>
            <div>
              <p className="mb-[5%] text-[20px] font-semibold text-center">
                Swift 24/7 Delivery
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We offer swift 24/7 delivery to ensure that your needs are met
                promptly and efficiently.
              </div>
            </div>
            <div>
              <p className="mb-[5%] text-[20px] font-semibold text-center">
                Secure and Automated
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We use the latest security protocols and technologies to protect
                your data and information.
              </div>
            </div>
            <div>
              <p className="mb-[5%] text-[20px] font-semibold text-center">
                Customer Support
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We value your feedback and strive to provide exceptional
                customer support when you need help.
              </div>
            </div>
          </>
        )}
        <div
          className="md:hidden flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={handleClick}
        >
          <div className="text-[12px]">{buttonText}</div>
          <div className="w-[11px] text-[20px]  ">
            {!firstDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div
        id="aboutus"
        className="px-[5%] flex flex-col gap-[20px] py-[20%] md:flex-row md:justify-center md:items-center md:py-[10%] lg:py-[5%] lg:gap-[10px] lg:px-[8%]"
      >
        <div className="flex flex-col gap-[15px]">
          <div className="mb-[5%] text-[20px] font-semibold text-center text-[#04177F] md:text-left md:text-[26px] lg:text-[45px]">
            About Us
          </div>
          <p className="text-justify text-[14px] md:text-[10px] lg:text-[16px] lg:w-[80%]">
            AremxyPlug is a business enterprise and telecommunication service
            provider that offers individuals and businesses full access to
            quick, secure, and dependable solutions for their digital and
            telecommunication service needs.
            <br />
            <br />
            At AremxyPlug, we provide seamless and limitless digital living
            needs to our users. Our objectives are to operate transparent and
            secure transactions, provide quick and dependable services, and to
            ensure that our services take our customers to the pinnacle of their
            aspirations in order to be the best service provider.
          </p>

          <HashLink
            to="#signup"
            className="mx-auto flex text-[12px] bg-[#04177F] text-[#ffffff] w-[28%] h-[35px] justify-center items-center rounded-md md:mx-[0px] md:text-[14px] lg:w-[20%] lg:h-[40px]"
          >
            Learn more
          </HashLink>
        </div>
        <img
          className="w-[65%] mx-auto py-[5%] md:w-[50%]"
          src="./Images/illustration.png"
          alt="/"
        />
      </div>

      {/* OUR SERVICE */}
      <div
        id="services"
        className="bg-[#04177f] flex flex-col gap-[15px] py-[7%] h-[] lg:px-[8%]"
      >
        <div className="mb-[5%] text-[20px] text-[#ffffff] font-semibold text-center md:text-[25px] lg:text-[45px]">
          Our Services
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col gap-[15px] md:gap-y-[35px]">
          <div className="flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="./Images/telecom.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Telecom
              </div>
              <div className="text-justify text-[10px] w-[80%] lg:text-[16px]">
                We offer secure VTU development, affordable airtime, and data
                purchase.
              </div>
              <HashLink to="#signup">
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[40px]">
                  Learn More
                </div>
              </HashLink>
            </div>
          </div>
          <div className="flex items-center gap-[5%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[34%] h-[75px] lg:w-[30%] lg:h-[90px]"
              src="./Images/payment.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Payment
              </div>
              <div className="text-justify text-[10px] w-[80%] lg:text-[16px]">
                Our payment solutions ensure our clients have the utmost control
                of their finances.
              </div>
              <HashLink to="#signup">
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[40px]">
                  Learn More
                </div>
              </HashLink>
            </div>
          </div>
          <div className="flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[30%] h-[55px] lg:w-[30%] lg:h-[90px]"
              src="./Images/cardissuing.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Card Issuing
              </div>
              <div className="text-justify text-[9px] w-[80%] lg:text-[16px]">
                We issue 3D secured virtual and physical debit USD and NGN cards
                to both individuals and businesses.
              </div>
              <HashLink to="#signup">
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[40px] lg:w-[40%]">
                  Learn More
                </div>
              </HashLink>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="./Images/digital.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Digital Services
              </div>
              <div className="text-justify text-[10px] w-[80%] lg:text-[16px]">
                We offer a variety of digital services that can be customized to
                fit your company's needs.
              </div>
              <HashLink to="#signup">
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[40px] ">
                  Learn More
                </div>
              </HashLink>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] md:h-[60px] lg:w-[30%] lg:h-[90px]"
              src="./Images/VTU.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                VTU Development
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                We develop a VTU website with services like airtime top-up, data
                bundles, and bills payment platform.
              </div>
              <HashLink to="#signup">
                {" "}
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[40px] lg:w-[40%]">
                  Learn More
                </div>
              </HashLink>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[30%] lg:h-[90px]"
              src="./Images/Business.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Business Development
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                When it comes to business development, trust us to save you time
                and stress.
              </div>
              <HashLink to="#signup">
                {" "}
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px] lg:h-[40px]">
                  Learn More
                </div>
              </HashLink>
            </div>
          </div>
        </div>

        {secondDrop && (
          <>
            <div className="flex items-center gap-[10%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[30%] h-[80px]"
                src="./Images/digital.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">
                  Digital Services
                </div>
                <div className="text-justify text-[9px] w-[80%]">
                  We offer a variety of digital services that can be customized
                  to fit your company's needs.
                </div>
                <HashLink to="#signup">
                  {" "}
                  <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
                    Learn More
                  </div>
                </HashLink>
              </div>
            </div>
            <div className="flex items-center gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[60px]"
                src="./Images/vtu.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">VTU Development</div>
                <div className="text-justify text-[9px] w-[80%]">
                  We develop a VTU website with services like airtime top-up,
                  data bundles, and bills payment platform.
                </div>
                <HashLink to="#signup">
                  <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:h-[45px]">
                    Learn More
                  </div>
                </HashLink>
              </div>
            </div>
            <div className="flex gap-[9%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[80px]"
                src="./Images/Business.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">
                  Business Development
                </div>
                <div className="text-justify text-[9px] w-[80%]">
                  When it comes to business development, trust us to save you
                  time and stress.
                </div>
                <HashLink to="#signup">
                  <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:h-[45px]">
                    Learn More
                  </div>
                </HashLink>
              </div>
            </div>{" "}
          </>
        )}
        <div
          className="md:hidden lg:hidden flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={handleClickTwo}
        >
          <div className="text-[12px]">{buttonTextTwo}</div>
          <div className="w-[11px] text-[20px]  ">
            {!secondDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </div>
        </div>
      </div>

      <WaitlistSignUp />
    </div>
  );
};

export default Page;
