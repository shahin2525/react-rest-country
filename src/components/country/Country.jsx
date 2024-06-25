/* eslint-disable react/prop-types */

import { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  // const countryProps = () => {
  //   handleVisitedCountry(country);
  // };
  // console.log(country);
  const { name, flags, population, area, cca3 } = country;
  return (
    <div className={visited ? "visited" : "country"}>
      <p>name:{name.common}</p>
      <img src={flags.png} alt="" />
      <p>Population:{population}</p>
      <p>Area:{area}</p>
      <p>Code:{cca3}</p>
      <button onClick={() => handleVisitedCountry(country)}>
        Mark Visited
      </button>
      <br />
      <button onClick={handleVisited} style={{ margin: "5px" }}>
        {visited ? "Visited" : "is going"} {visited}
      </button>
      {visited ? "I have visited" : "Want to visit"}
    </div>
  );
};

export default Country;
