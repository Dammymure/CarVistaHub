import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

// import CarBanner from "../../assets/designImages/car2.jpg";

function SellerRegisterLogin() {
  // const [pageType, setPageType] = useState("login");
  const [isBuyer, setIsBuyer] = useState(true);
  // const isBuyer = pageType === "login";
  // const isMerchant = pageType === "register";
  const selected = "bg-black text-white";
    const navigate = useNavigate();

  return (
    <div className="h-screen ">
      <Navbar />
      <div className="h-screen flex">
        <div className="sm:w-[50%] h-full w-full flex bg-black align-middle justify-center">
          <div className="flex flex-col content-center align-middle m-auto pb-52 sm:pb-0">
            <div className="">
              <h1 className="text-white text-center text-xl lg:text-3xl">
                Create an account
              </h1>
            </div>
            <div className="flex justify-center gap-1">
              <button
                className={`${
                  isBuyer ? selected : "bg-white border"
                } border rounded-lg text-xs`}
                onClick={() => {
                  setIsBuyer((prevIsBuyer) =>
                    prevIsBuyer ? prevIsBuyer : !prevIsBuyer
                  );
                  // resetForm();
                }}
              >
                <p className="px-3 py-1">Buyer</p>
              </button>
              <button
                className={`${
                  isBuyer ? "bg-white border" : selected
                } border rounded-lg text-xs`}
                onClick={() => {
                  setIsBuyer((prevIsBuyer) =>
                    prevIsBuyer ? !prevIsBuyer : prevIsBuyer
                  );
                  // resetForm();
                }}
              >
                <p className="px-3 py-1">Merchant</p>
              </button>
            </div>

            <>
              <form className="flex h-fit text-white flex-col  px-10 text-xs items-center">
                <div className="flex-col lg:flex lg:flex-row gap-2">
                  <div className="flex flex-col">
                    <label for="firstname" className="">
                      First name
                    </label>
                    <input
                      className="bg-slate-400/30 rounded h-5 w-40 lg:w-52 lg:h-7"
                      type="text"
                      id="firstname"
                      name="firstname"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label for="lastname">Last name</label>
                    <input
                      className="bg-slate-400/30 rounded h-5 w-40 lg:w-52 lg:h-7"
                      type="text"
                      id="lastname"
                      name="lastname"
                      required
                    />
                  </div>
                </div>

                <div className="flex-col lg:flex lg:flex-row   gap-2">
                  <div className="flex flex-col">
                    <label for="number">Number</label>
                    <input
                      className="bg-slate-400/30 rounded h-5 w-40 lg:w-52 lg:h-7"
                      type="text"
                      id="number"
                      name="number"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label for="location">Location</label>
                    <input
                      className="bg-slate-400/30 rounded h-5 w-40 lg:w-52 lg:h-7"
                      type="text"
                      id="location"
                      name="location"
                      required
                    />
                  </div>
                </div>

                <div className="flex-col lg:flex lg:flex-row  gap-2">
                  <div className="flex flex-col">
                    <label for="email">Email</label>
                    <input
                      className="bg-slate-400/30 rounded h-5 w-40 lg:w-52 lg:h-7"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label for="password">Password</label>
                    <input
                      className="bg-slate-400/30 rounded h-5 w-40 lg:w-52 lg:h-7"
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="" for="picturePath">
                    Picture
                  </label>
                  <input
                    className="bg-slate-400/30 rounded  h-7 w-40 lg:w-52 lg:h-14"
                    type="file"
                    id="picturePath"
                    name="picturePath"
                    required
                  />
                </div>
                <div className="flex justify-center pt-5">
                  <button
                    className="bg-[#FE5F00] px-4 lg:px-16 lg:py-4 py-2 font-medium lg:text-[15px] text-sm hover:scale-105 duration-500 rounded"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <div className="text-center py-2">
                  <p
                    className="cursor-pointer"
                    onClick={() => {
                      navigate("/login");
                      // resetForm();
                    }}
                  >
                    Already have an account? Login here.
                  </p>
                </div>
              </form>
            </>
          </div>
        </div>
        <div
          className={`sm:w-[50%] hidden sm:block ${
            isBuyer ? "banner" : "seller"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default SellerRegisterLogin;
