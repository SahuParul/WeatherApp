import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo, setWeatherInfo] = useState({
        city:"Rath",
        feelsLike: 33.33,
        temp : 28.55,
        tempMin: 28.55,
        tempMax: 28.55,
        humidity: 79,
        weather: "overcast clouds",
    });

     let updateInfo = (newInfo) =>{
        setWeatherInfo(newInfo);
     }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}