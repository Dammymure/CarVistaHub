import { React, useState } from "react";
// import CarBanner from "../../assets/designImages/car2.jpg";

function SellerRegisterLogin() {
  // const [pageType, setPageType] = useState("login");
  const [isBuyer, setIsBuyer] = useState(true);
  // const isBuyer = pageType === "login";
  // const isMerchant = pageType === "register";
  const selected = "bg-black text-white";

  return (
    <div className="h-screen  flex">
      <div className="sm:w-[50%] h-full w-full flex bg-black align-middle justify-center">
        <div className="flex flex-col content-center align-middle m-auto">
          <div className="">
            <h1 className="text-white text-center text-xl lg:text-3xl">
              Create an account
            </h1>
          </div>
          <div className="flex justify-center gap-1">
            <button
              className={`${
                isBuyer ? selected : "bg-white border"
              }  border rounded-lg text-xs`}
              onClick={() => {
                setIsBuyer(!isBuyer);
                // resetForm();
              }}
            >
              <p className="px-3 py-1">Buyer</p>
            </button>
            <button
              className={`${
                isBuyer ? "bg-white border" : selected
              }  border rounded-lg text-xs`}
              onClick={() => {
                setIsBuyer(!isBuyer);
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
              <div className="flex justify-center pt-8">
                <button
                  className="bg-[#FE5F00] px-4 lg:px-16 lg:py-4 py-2 font-medium lg:text-[15px] text-sm hover:scale-105 duration-500 rounded"
                  type="submit"
                >
                  Register
                </button>
              </div>
              <div className="text-center py-2">
                {/* <p
                    className="cursor-pointer"
                    // onClick={() => {
                    //   setPageType(isLogin ? "register" : "login");
                    //   // resetForm();
                    // }}
                  >
                    {isLogin
                      ? "Don't have an account? Sign Up here."
                      : "Already have an account? Login here."}
                  </p> */}
              </div>
            </form>
          </>

          {/* {isLogin && (
            <>
              <form className="flex h-fit text-white flex-col m-auto px-10 text-xs ">
                <div className="flex-col lg:flex   gap-2">
                  <div className="flex flex-col">
                    <label for="email">Email</label>
                    <input
                      className="border border-slate-400  bg-transparent h-5 w-40 lg:w-52 lg:h-7"
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label for="password">Password</label>
                    <input
                      className="border border-slate-400  bg-transparent h-5 w-40 lg:w-52 lg:h-7"
                      type="password"
                      id="password"
                      name="password"
                      required
                    />
                  </div>
                </div>
                <div className="flex justify-center pt-8">
                  <button
                    className="bg-[#FE5F00] px-8 lg:px-16 ld:py-3 py-3 font-medium lg:text-[15px] text-xl hover:scale-110 duration-500 ease-in-out delay-150 hover:-translate-y-1 rounded"
                    type="submit"
                  >
                    Register
                  </button>
                </div>
                <p
                  className="cursor-pointer"
                  onClick={() => {
                    setPageType(isLogin ? "register" : "login");
                    // resetForm();
                  }}
                >
                  {isLogin
                    ? "Don't have an account? Sign Up here."
                    : "Already have an account? Login here."}
                </p>
              </form>
            </>
          )} */}
        </div>
      </div>
      <div className="sm:w-[50%] hidden sm:block banner"></div>
    </div>
  );
}

export default SellerRegisterLogin;
