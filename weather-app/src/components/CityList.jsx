import { Link } from "react-router-dom";

const CityList = () => {
    const cities = ["NewYork", "London", "Tokyo"];
  
  return (
    <div >
      <h1>Select a City</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link to={`/forecast/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
