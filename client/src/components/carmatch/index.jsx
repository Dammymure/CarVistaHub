import React from 'react'
// import CarBuying from "../../assets/carLogos/buying-power.png";
import Carbuying from "../../assets/designImages/buying-power.png";
import ArrowDown from "../../assets/icons/arrowDown.png"


function CarMatch() {
  return (
    <section>
      <div className="flex flex-col sm:flex sm:flex-row  mx-auto w-[95%]">
        <div className=" sm:w-[50%] flex flex-col sm:block mx-auto">
          <p className="bg-blue-300 inline-block text-xs p-2 rounded font-medium">
            NEW
          </p>
          <h1 className="text-3xl font-medium text-slate-800">
            Know your buying power
          </h1>
          <p className="text-[16px] font-medium text-slate-500">
            How much car can you afford? Find out, then see vehicles that match
            your budget
          </p>

          <div className="flex mx-auto w-[100%]">
            <img className="w-[100%]" src={Carbuying} alt="" />
          </div>
        </div>
        <div className="sm:w-[50%] p-12">
          <div className="text-center">
            <h1 className="text-4xl font-medium">₦1,500,000</h1>
            <p className="font-medium">Est. buying power</p>
            <p className="font-medium text-slate-500">Based on 8.68% APR</p>
          </div>
          <div className="">
            <div className="flex justify-between gap-4 py-5">
              <div className="relative bg-white pt- flex items-center rounded-[2px] w-[100%] border border-slate-600">
                <div className="relative rounded w-[100%]">
                  <label className="absolute top-2 left-0 pl-1 text-xs text-slate-600 whitespace-nowrap font-medium">
                    Looking For
                  </label>
                  <select
                    className="appearance-none pt-6 pl-1 active:ring-white rounded w-[100%] font-medium"
                    required=""
                    aria-label="Looking for"
                    // class="bg-red-400"
                  >
                    <option value="NEW">New car</option>
                    <option value="USED">Used car</option>
                  </select>
                </div>
                <div className="absolute right-0 pr-1">
                  <img className="w-4" src={ArrowDown} alt=""/>
                </div>
              </div>
              <div className=" bg-white pt- flex items-center rounded-[2px] w-[100%] border border-slate-600">
                <div className="relative rounded w-[100%]">
                  <label className="absolute top-2 left-0 pl-1 text-xs text-slate-600 font-medium">
                    Down payment
                  </label>
                  <input
                    className=" pt-6 pl-1 active:ring-white rounded w-[100%] font-medium"
                    type="text"
                    aria-label="Looking for"
                    value="3,000"
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="relative bg-white pt- flex items-center rounded-[2px] w-[100%] border border-slate-600">
                <div className="relative rounded w-[100%]">
                  <label className="absolute top-2 left-0 pl-1 text-xs text-slate-600 font-medium">
                    Credit score
                  </label>
                  <select
                    className="appearance-none pt-6 pl-1 active:ring-white rounded w-[100%] font-medium"
                    required=""
                    aria-label="Looking for"
                    // class="bg-red-400"
                  >
                    <option value="NEW">₦500,000 - ₦1,500,000</option>
                    <option value="USED">₦1,500,500 - ₦3,500,000</option>
                    <option value="USED">₦3,500,000 - ₦5,500,000</option>
                    <option value="USED">₦5,500,000 - ₦8,500,000</option>
                  </select>
                </div>
                <div className="absolute right-0 pr-1">
                  <img className="w-4" src={ArrowDown} alt=""/>
                </div>
              </div>
              <div className=" bg-white pt- flex items-center rounded-[2px] w-[100%] border border-slate-600">
                <div className="relative rounded w-[100%]">
                  <label className="absolute top-2 left-0 pl-1 text-xs text-slate-600 whitespace-nowrap font-medium">
                    Monthly payment
                  </label>
                  <input
                    className=" pt-6 pl-1 active:ring-white rounded w-[100%] font-medium"
                    type="text"
                    aria-label="Looking for"
                    value="250,000"
                  ></input>
                </div>
              </div>
            </div>
            <div className="py-10">
              <button className="w-[100%] text-white font-medium bg-black rounded-full py-2">
                See your matches
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarMatch