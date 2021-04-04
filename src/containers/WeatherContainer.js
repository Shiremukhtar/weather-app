import { useState, useEffect } from 'react'
import WeatherSearch from '../components/WeatherSearch'
import WeatherPresantation from '../components/WeatherPresentation';


const WeatherContainer = () => {
    const [resultList, setResultList] = useState({name: '', dt: '', main: [], weather: []});
    const apiKey ='ed8ca45136834a2b86135a7e6ea7ef0e&units=metric';
    const search = (searchValue) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?q='+searchValue+'&appid=' + apiKey;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            const {name, dt, main, weather} = data;
            setResultList({name, dt, main, weather});     
        }).catch((error) => alert(error.message='Wrong city'));
    };
    

        const url2 = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm&appid=' + apiKey;
        useEffect(() => {
            fetch(url2)
            .then(res => res.json())
            .then(restult => {

                setResultList(restult)
            });
        },[]);

    return (
        <>
            <WeatherSearch search={search}/>
           <WeatherPresantation list={resultList}/>
           
          
        </>
    )
}
export default WeatherContainer;

