import React, { useState } from "react";

function Filters() {
  const [leastPrice, setLeastPrice] = useState(0);
  const [mostPrice, setMostPrice] = useState(15000000);
  const maxPriceLimit = 15000000; // Set your maximum limit here
  const [selectedMake, setSelectedMake] = useState("")
  const [minYear, setMinYear] = useState()
  const [maxYear, setMaxYear] = useState()
  const [maxMile, setMaxMile] = useState()
  const [minMile, setMinMile] = useState()
  const mileLimit = 1000000;
  

  // PRICE RANGES
  const handleLeastPriceRange = (event) => {
    const leastNewValue = parseInt(event.target.value, 10) || "";
    // Validate if leastNewValue is within the limit
    if (leastNewValue < maxPriceLimit) {
      setLeastPrice(leastNewValue);
    }
  };

  const handleMostPriceRange = (event) => {
    const mostNewValue = parseInt(event.target.value, 10) || "";
    // Validate if mostNewValue is within the limit
    if (mostNewValue <= maxPriceLimit) {
      setMostPrice(mostNewValue);
    }
  };

  // MAKE
    const handleMakeSelection = (event) => {
      const selectedMakeValue = event.target.value;
      setSelectedMake(selectedMakeValue);
    };

    // YEAR RANGES
    const handleMinYear = (event) => {
      const selectedMinYear = event.target.value;
      setMinYear(selectedMinYear);
    }
    const handleMaxYear = (event) => {
      const selectedMaxYear = event.target.value;
      setMaxYear(selectedMaxYear);
    }

  // Years selections
    const years = [];
    for (let year = 1999; year <= 2023; year++) {
      years.push(year);
    }

    // MILEAGE
      const handleMinMile = (event) => {
    const minMile = parseInt(event.target.value, 10) || "";
    // Validate if leastNewValue is within the limit
    if (minMile < mileLimit) {
      setMinMile(minMile);
    }
  };

  const handleMaxMile = (event) => {
    const maxMile = parseInt(event.target.value, 10) || "";
    // Validate if mostNewValue is within the limit
    if (maxMile <= mileLimit) {
      setMaxMile(maxMile);
    }
  };

  return (
    <section className="flex justify-center">
      <div className="flex flex-col text-sm w-full max-w-md p-2 md:p-4">
        <div>
          <h1 className="text-lg flex justify-center">FILTER</h1>
        </div>

        <div className="flex gap-2 py-2 flex-wrap">
          <div>
            <button className="bg-black px-4 py-1 rounded-full text-sm text-white mt-2">
              All
            </button>
          </div>

          <div className="w-full">
            <label className="text-sm pr-1 font-medium mt-2">Price</label>
            <div className="flex gap-2">
              <input
                className="w-20 sm:w-full flex-grow border border-slate-600 rounded-sm"
                type="number"
                inputMode="numeric"
                pattern="\d*"
                placeholder="₦0"
                value={leastPrice}
                onChange={handleLeastPriceRange}
              />
              <p className="px-2 text-gray-500">to</p>
              <input
                className="w-20 sm:w-full flex-grow border border-slate-600 rounded-sm"
                type="number"
                pattern="\d*"
                placeholder="₦15,000,000"
                inputMode="numeric"
                value={mostPrice}
                onChange={handleMostPriceRange}
              />
            </div>
          </div>

          <div className="w-full">
            <label className="text-sm pr-1 font-medium mt-2">Make</label>
            <select
              className="w-full border border-slate-600 rounded-sm"
              required=""
              aria-label="Looking for"
              value={selectedMake}
              onChange={handleMakeSelection}
            >
              <option value="Lexus">Lexus</option>
              <option value="Mercedes">Mercedes</option>
              <option value="Toyota">Toyota</option>
              <option value="Honda">Honda</option>
              <option value="Hyudai">Hyudai</option>
              <option value="Acura">Acura</option>
              <option value="Kia">Kia</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Ford">Ford</option>
            </select>
          </div>
        </div>

        <div className="flex align-middle items-center py-2 flex-wrap">
          <div className="w-full">
            <label className="text-sm pr-1 font-medium mt-2">Year</label>
            <div className="flex gap-2">
              <select
                required=""
                aria-label=""
                value={minYear}
                onChange={handleMinYear}
                className="flex-grow text-sm"
              >
                <option value="">Min</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              <p className="px-1 text-gray-500">to</p>
              <select
                required=""
                aria-label=""
                value={maxYear}
                onChange={handleMaxYear}
                className="flex-grow"
              >
                <option value="">Max</option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="w-full">
            <label className="text-sm pr-1 font-medium mt-2">Mileage</label>
            <div className="flex gap-2">
              <input
                className="w-20 sm:w-full flex-grow border border-slate-600 rounded-sm"
                type="number"
                inputMode="numeric"
                pattern="\d*"
                placeholder="0"
                value={minMile}
                onChange={handleMinMile}
              />
              <p className="px-2 text-gray-500">to</p>
              <input
                className="w-20 sm:w-full flex-grow border border-slate-600 rounded-sm"
                type="number"
                pattern="\d*"
                placeholder="1000000"
                inputMode="numeric"
                value={maxMile}
                onChange={handleMaxMile}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-2">
          <button className="bg-black text-white px-4 py-2 rounded-full">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
}


export default Filters;
