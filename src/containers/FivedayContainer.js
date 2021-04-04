import { useState, useEffect} from 'react'
import CitySelector from '../components/CitySelector'
import WeatherList from '../components/WeatherList';

const FivedayContainer = () => {
    const [fivedayF, setFivedayF] = useState([]);
    const apiKey ='ed8ca45136834a2b86135a7e6ea7ef0e&units=metric';
    var cityForecast = [];
            const fiveUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=stockholm&appid&appid='+apiKey;

            useEffect(() => {
                fetch(fiveUrl)
            .then(res => res.json())
            .then(data => {
                console.log(data.city.name);
                for(let i = 0; i<data.list.length; i+=8){
                    const temperary = {name: data.city.name,date: data.list[i].dt_txt,
                                        icon: data.list[i].weather[0].icon,
                                        maxTemp: data.list[i].main.temp_max,
                                        minTemp: data.list[i].main.temp_min}
                                        cityForecast.push(temperary)
                    console.log(cityForecast);
                }
                setFivedayF(cityForecast);
            }); 

            },[]);

            const search = (city) => {
                fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid&appid=' + apiKey)
                .then(res => res.json())
                .then(data => {
                    for(let i = 0; i<data.list.length; i+=8){
                        const temperary = {name: data.city.name,date: data.list[i].dt_txt,
                                            icon: data.list[i].weather[0].icon,
                                            maxTemp: data.list[i].main.temp_max,
                                            minTemp: data.list[i].main.temp_min,
                                            main: data.list[i].weather[0].main}
                                            cityForecast.push(temperary)
                        console.log(cityForecast);
                    }
                    setFivedayF(cityForecast);

                })
            }

    return (
        <>
            <CitySelector onSearch={search}/>
            <WeatherList weathers={fivedayF}/>
        </>
    )
}

export default FivedayContainer
