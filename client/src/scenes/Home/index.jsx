import React, { useState } from "react";
import Navbar from "../../components/navbar";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function Home() {
  const [counterOn, setCounterOn] = useState(false)
  return (
    <div className="bg-white h-screen">
      <Navbar />

      <section>
        <div className="flex ">
          <div className="sm:w-[50%] h-screen w-full flex flex-col text-center items-center justify-center px-10">
            <h2 className="text-4xl font-semibold">
              Navigate Your Next Adventure:
              <ScrollTrigger
                style={{ display: "inline-flex"}}
                onEnter={() => setCounterOn(true)}
                onExit={() => setCounterOn(false)}
              >
                <span className="text-5xl font-bold">
                  {counterOn && (
                    <CountUp start={20} end={50000} duration={2} delay={0} />
                  )}
                  +
                </span>
              </ScrollTrigger>
              Cars, Infinite Possibilities.
            </h2>
            <span>And Counting*</span>
            <p>
              Embark on a journey where every digit counts. Choose from a
              staggering 40,000+ cars on [Your App Name], where buyers find
              their dream ride, and sellers connect with a vast audience. Your
              next adventure starts with the power of numbers.
            </p>
          </div>
          <div className="w-[50%] flex heroimage text-center items-center justify-center">
            <h1 className="text-6xl text-white font-bold">
              Buy and Seller you Cars in 3 Easy Steps
            </h1>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
