import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  console.log(visitedCountry);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVisitedCountry = (country) => {
    console.log(country);
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };
  return (
    <div>
      <h1>Visited countries :{visitedCountry.length}</h1>

      <ul>
        {visitedCountry.map((country) => (
          <li key={country.cca3}>name: {country.name.common}</li>
        ))}
      </ul>

      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.ccn3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
