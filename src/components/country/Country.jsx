/* eslint-disable react/prop-types */

import "./Country.css";
const Country = ({ country }) => {
  console.log(country);
  const { name, flags } = country;
  return (
    <div className="country">
      <p>name:{name.common}</p>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
