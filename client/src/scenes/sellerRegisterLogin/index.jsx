import React from "react";
import CarBanner from "../../assets/designImages/car2.jpg";

function sellerRegisterLogin() {
  return (
    <div className="h-screen  flex">
      <div className="sm:w-[50%] w-full flex bg-black align-middle justify-center">
        <div className="flex content-center align-middle ">
          <form className="flex h-fit text-white flex-col m-auto px-10 text-xs">
            <div className="flex-col sm:flex sm:flex-row gap-2">
              <div className="flex flex-col">
                <label for="firstname">Firstname</label>
                <input
                  className="border bg-transparent h-5  w-40 sm:w-52 sm:h-7"
                  type="text"
                  id="firstname"
                  name="firstname"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label for="lastname">Lastname</label>
                <input
                  className="border bg-transparent w-40 sm:w-52"
                  type="text"
                  id="lastname"
                  name="lastname"
                  required
                />
              </div>
            </div>

            <div className="flex-col sm:flex sm:flex-row   gap-2">
              <div className="flex flex-col">
                <label for="number">Number</label>
                <input
                  className="border bg-transparent w-40 sm:w-52"
                  type="text"
                  id="number"
                  name="number"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label for="location">Location</label>
                <input
                  className="border bg-transparent w-40 sm:w-52"
                  type="text"
                  id="location"
                  name="location"
                  required
                />
              </div>
            </div>

            <div className="flex-col sm:flex sm:flex-row  gap-2">
              <div className="flex flex-col">
                <label for="email">Email</label>
                <input
                  className="border bg-transparent w-40 sm:w-52"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label for="password">Password</label>
                <input
                  className="border bg-transparent w-40 sm:w-52"
                  type="password"
                  id="password"
                  name="password"
                  required
                />
              </div>
            </div>

            <label for="picturePath">Picture</label>
            <input
              className="border bg-transparent"
              type="file"
              id="picturePath"
              name="picturePath"
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <div className="sm:w-[50%] hidden sm:block">
        <img className="w-full h-full" src={CarBanner} alt="black car" />
      </div>
    </div>
  );
}

export default sellerRegisterLogin;
