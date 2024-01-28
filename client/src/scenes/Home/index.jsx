import React, { useState } from "react";
import Navbar from "../../components/navbar";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import benz from "../../assets/carLogos/benz.png"
import honda from "../../assets/carLogos/honda.png"
import audi from "../../assets/carLogos/audi.png"
import bentley from "../../assets/carLogos/bentley.png"
import bmw from "../../assets/carLogos/bmw.png"
import ferrari from "../../assets/carLogos/ferrari.png"
import tesla from "../../assets/carLogos/tesla-logo.png"
import lexus from "../../assets/carLogos/lexus.png"
import jeep from "../../assets/carLogos/jeep-logo.png"
import rolls from "../../assets/carLogos/rollsroyce.png"
import lambo from "../../assets/carLogos/lambo.png"
import hyundai from "../../assets/carLogos/hyundai.png";
import porsche from "../../assets/carLogos/porsche.png";
import CarMatch from "../../components/carmatch";
import Filters from "../../components/filters";


function Home() {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="bg-white h-screen">
      <Navbar />

      <section className="overflow-x-hidden">
        <div className="flex flex-col-reverse sm:flex-row ">
          <div className="sm:w-[50%] h-screen w-full flex flex-col text-center items-center justify-start sm:justify-center px-10 py-10">
            <h2 className="text-2xl sm:text-4xl font-bold">
              Navigate Your Next Adventure:
              <ScrollTrigger
                style={{ display: "inline-flex" }}
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="text-3xl sm:text-5xl font-bold">
                  {counterOn && (
                    <CountUp start={20} end={50000} duration={2} delay={0} />
                  )}
                  +
                </span>
              </ScrollTrigger>
              Cars, Infinite Possibilities.
            </h2>
            {/* <span>And Counting*</span> */}
            <p className="text-xs sm:text-sm ">
              Embark on a journey where every digit counts. Choose from a
              staggering 50,000+ cars on [Your App Name], where buyers find
              their dream ride, and sellers connect with a vast audience. Your
              next adventure starts with the power of numbers.
            </p>
            <div className="flex gap-3 pt-5">
              <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full">
                Sign Up
              </button>
              <button className="bg-[#FE5F00] text-white text-sm font-semibold px-3 py-1 rounded-full">
                Buy Now
              </button>
            </div>

            <div class="slider pt-10">
              <div class="slide-track">
                <img src={lexus} className="h-10 sm:h-20" alt="h-" />
                <img src={benz} className="h-10 sm:h-20" alt="" />
                <img src={ferrari} className="h-10 sm:h-20" alt="" />
                <img src={tesla} className="h-10 sm:h-20" alt="" />
                <img src={honda} className="h-10 sm:h-20" alt="" />
                <img src={bentley} className="h-10 sm:h-20" alt="" />
                <img src={bmw} className="h-10 sm:h-20" alt="" />
                <img src={lambo} className="h-10 sm:h-20" alt="" />
                <img src={jeep} className="h-10 sm:h-20" alt="" />
                <img src={rolls} className="h-10 sm:h-20" alt="" />
                <img src={hyundai} className="h-10 sm:h-20" alt="" />
                <img src={audi} className="h-10 sm:h-20" alt="" />
                <img src={bentley} className="h-10 sm:h-20" alt="" />
                {/* <img src={jeep} alt="" /> */}
                <img src={ferrari} className="h-10 sm:h-20" alt="" />
                <img src={bmw} className="h-10 sm:h-20" alt="" />
                <img src={porsche} className="h-10 sm:h-20" alt="" />
                {/* <img src={lexus} alt="" /> */}
              </div>

              {/* <div class="logos-slide ">
                <img src={rolls} alt="" />
                <img src={hyundai} alt="" />
                <img src={audi} alt="" />
                <img src={bentley} alt="" />
                <img src={ferrari} alt="" />
                <img src={jeep} alt="" />
                <img src={bmw} alt="" />
                <img src={porsche} alt="" />
                <img src={lexus} alt="" />
              </div> */}
            </div>
          </div>
          <div className="py-10 sm:w-[50%] flex heroimage text-center items-center justify-center">
            <div>
              <h1 className="text-3xl px-[2vw] sm:text-6xl text-white font-bold">
                Buy and Sell you Cars in 3 Easy Steps
              </h1>
              <div class="bg-white my-5 py-1 px-4 rounded-full shadow-md flex items-center mx-[7vw]">
                {/* <!-- Search Icon --> */}
                <svg
                  class="w-6 h-6 text-gray-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35M15 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
                {/* <!-- Search Input --> */}
                <input
                  type="text"
                  placeholder="Search make, year, model ..."
                  class="border-none outline-none focus:ring focus:ring-orange-500/90 py-2 px-4 rounded-md w-40 sm:w-60 md:w-80 lg:w-96 xl:w-120 "
                />
              </div>
              <div className="flex justify-center gap-3 py-8 text-white font-semibold text-lg">
                <h1 className="underline cursor-pointer">Shop New</h1>
                <h1 className="underline cursor-pointer">Shop Used</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      {/* <section className="relative">
        <div className="absolute bg-black h-8 rotate-[5deg] md:rotate-[1deg] w-screen"></div>
        <div className="absolute bg-[#FE5F00] h-8 rotate-[-5deg] md:rotate-[-1deg] w-screen"></div>
        <div></div>
      </section> */}
      <CarMatch/>
      <div>
        <Filters/>
      </div>
    </div>
  );
}

export default Home;
