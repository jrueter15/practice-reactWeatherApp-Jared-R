import { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";


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
    
    const { city } = useParams();
    const [forecast, setForecast] = useState(null);
    const detailsRef = useRef();

    useEffect(() => {
        if (weatherData[city]) {
            setForecast(weatherData[city]);
        } else {
            setForecast("");
        }
    }, [city]);

    const handleScroll = () => {
        if (detailsRef.current) {
            detailsRef.current.scrollIntoView({ behavior: "smooth" });
        }
        };
  
    return (
        <div>
            <h1>Forecast for {city}</h1>

            {forecast ? (
                <>
                    <h2>{forecast.summary}</h2>
                    <button onClick={handleScroll}>View Details</button>

                    <div ref={detailsRef} className="details-section">
                        <h3>Details:</h3>
                        <p>{forecast.details}</p>
                    </div>
                </>

            ) : (
                <p>City not found. Please go back and try again.</p>
            )}

            <br />
            <Link to="/">← Back to City List</Link>
        </div>
  );
}

export default CityForecast
