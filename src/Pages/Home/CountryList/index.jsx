import React from "react";
import "./CountryList.css";

function CountryList({ allCountry }) {
  if (allCountry.length === 0) return <div>Loading....</div>;

  return (
    <div className="country">
      <div className="country-list">
        {allCountry.map((item) => (
          <div key={item.id}>
            <div className="country-item">
              <div className="item-left">
                <div>{item.id}</div>
                <img src={item.flags.svg} alt="" />
              </div>
              <div className="item-right">
                <div className="country-info">
                  <div>{item.name.common}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
