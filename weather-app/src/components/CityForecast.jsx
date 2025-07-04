import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const CityForecast = () => {
    const weatherData = {
    NewYork: {
        summary: "Sunny, 25°C",
        details: "Clear skies throughout the day with mild temperatures.",
    },
    London: {
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon.",
    },
    Tokyo: {
        summary: "Rainy, 22°C",
        details: "Continuous rain expected throughout the day.",
    },
};
    
    const { cityName } = useParams();
    const [forecast, setForecast] = useState("");
    const ref = useRef();

    useEffect(() => {
        if (weatherData[cityName]) {
            setForecast(weatherData[cityName]);
        } else {
            setForecast("");
        }
    }, [cityName]);
  
    return (
    <div>

    </div>
  )
}

export default CityForecast
