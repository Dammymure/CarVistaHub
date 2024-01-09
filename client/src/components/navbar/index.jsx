import {React, useState} from "react";
function Navbar() {

 const [isMenu, setIsMenu] =useState(false)
 
  return (
    <div className="bg-black flex items-center justify-between text-white px-8 sm:px-14 py-3 sticky">
      <div>Logo</div>

      <div
        className={`${
          isMenu ? "" : "hidden"
        } ease-in-out duration-700 transition-opacity absolute sm:static right-0 top-[50px] sm:top-[9%] w-full sm:w-auto flex-col sm:flex-row flex px-5 gap-y-[4vh] sm:gap-y-0 z-10
      min-h-[100vh] sm:min-h-0 sm:h-auto  sm:flex  text-sm gap-2 md:gap-[4vw] sm:px-5 bg-black`}
      >
        <p className="text-6xl sm:text-sm">Home</p>
        <p className="text-6xl sm:text-sm">About</p>
        <p className="text-6xl sm:text-sm  text-nowrap">Show Room</p>
        <button className="bg-[#FE5F00] py-2 px-4 text-sm rounded block sm:hidden">
          Get Started
        </button>
      </div>
      <div className="hidden sm:block">
        <button className="bg-[#FE5F00] py-2 px-4 text-sm rounded ">
          Get Started
        </button>
      </div>
      <div className="block sm:hidden" onClick={() => setIsMenu(!isMenu)}>
        <p>X</p>
      </div>
    </div>
  );
}

export default Navbar