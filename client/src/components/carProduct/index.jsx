import React from 'react'
import { CarsData } from '../../data/Data'
// import Image1 from "../../data/carImages/image1.jpg"

function CarProduct() {
  return (
    <div className="flex gap-2 px-10">
      {CarsData.map((car, index) => (
        <div key={index} className="w-full">
          <img
            src={process.env.PUBLIC_URL + "/" + car.picturePaths[0]}
            alt=""
            className="w-full h-44"
          />
          <div className="border border-black p-2">
            <div className="flex justify-between text-sm">
              <p className="font-semibold">
                {car.make} {car.model}
              </p>
              <p>{car.year}</p>
            </div>
            <p className="text-sm">{car.color}</p>

            <div className="flex justify-between text-sm">
              <p className="text-slate-500">{car.mileage}</p>
              <p>{car.sellerLocation}</p>
            </div>

            <p className="text-sm font-medium">{car.description}</p>
            <p className="text-lg font-semibold">{car.price}</p>
            <div className="flex justify-between text-sm">
              <p className="text-slate-500">{car.sellerName}</p>
              <p
                className={`${
                  car.available
                    ? "bg-green-500 w-3 h-3 rounded-full animate-ping"
                    : ""
                }`}
              ></p>
            </div>
            {/* <p>{car.picturePaths}</p> */}
            <div className='flex justify-end'>
            <button className='text-sm text-white bg-black px-2 py-1 rounded-full hover:bg-black/90'>View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default CarProduct
