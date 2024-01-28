import React, { useState } from "react";

function Filters() {
  const [leastPrice, setLeastPrice] = useState(0);
  const [mostPrice, setMostPrice] = useState(15000000);

  const handleLeastPriceRange = (event) => {
    const leastNewValue = parseInt(event.target.value, 10);
    setLeastPrice(leastNewValue);
  };

  const handleMostPriceRange = (event) => {
    const mostNewValue = parseInt(event.target.value, 10);
    setMostPrice(mostNewValue);
  };

  return (
    <section className="flex justify-center">
      <div className="flex">
        <button>All</button>

        <div className="flex">
          <input
            className="w-24 border border-slate-600 rounded"
            type="number"
            inputMode="numeric"
            value={leastPrice}
            onChange={handleLeastPriceRange}
          />
          <p>to</p>
          <input
            className="w-24 border border-slate-600 rounded"
            type="number"
            inputMode="numeric"
            value={mostPrice}
            onChange={handleMostPriceRange}
          />
        </div>
        <div>
         <select></select>
        </div>
      </div>
    </section>
  );
}

export default Filters;
