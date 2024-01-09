import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";


function Login() {
   const selected = "bg-black text-white";
   const navigate = useNavigate();
   const [isBuyer, setIsBuyer] = useState(true);
   
  return (
    <div className="h-screen">
      <Navbar />
      <div className=" flex ">
        <div className="sm:w-[50%] h-screen w-full flex bg-black align-middle justify-center">
          <div className="flex flex-col content-center align-middle m-auto pb-64 sm:pb-0">
            <div className="py-2">
              <h1 className="text-white text-center text-xl lg:text-3xl">
                Log into your account
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
              <form className="flex h-fit text-white flex-col m-auto px-10 text-xs">
                <div className="flex-col lg:flex justify-center mx-auto gap-2">
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
                <div className="flex justify-center pt-8">
                  <button
                    className="bg-[#FE5F00] px-8 lg:px-16 lg:py-2 py-2 font-medium lg:text-[15px] text-xl hover:scale-110 duration-500 ease-in-out delay-150 hover:-translate-y-1 rounded"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
                <p
                  className="cursor-pointer pt-2 text-center"
                  onClick={() => {
                    navigate("/register");
                    // resetForm();
                  }}
                >
                  Don't have an account? Sign Up here.
                </p>
              </form>
            </>
          </div>
        </div>
        <div
          className={`sm:w-[50%] hidden sm:block   ${
            isBuyer ? "login" : "signin"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Login;
