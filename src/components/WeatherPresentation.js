import "../App.css";
import "../index.css";
import "weather-icons/css/weather-icons.css";
const WeatherPresantation = ({ list }) => {
 
  var values = list.weather.map((w) => {
    return (<span>{w.description}</span>);
  });
  
  var icon = list.weather.map(i => {
      return i.icon;
  });
  var main = list.weather.map(m => {return m.main;});

  var getDate =() => { var timestamp=list.dt;
    var a= new Date(timestamp*1000);
return a;}
  
  var d = getDate();
  console.log(d.toLocaleTimeString())
  
  var iconUrl = 'http://openweathermap.org/img/wn/'+ icon +'@2x.png'
  return (
    <div className="container">
      <div className="card mt-3 mx-auto" style={{ width: '50vw' }}>
        <div className="card-body text-center">
            <img className="weather-icon" src={iconUrl} />
            <h1>{list.name}</h1>
            <p className="h2">{list.main.temp}&deg;C</p>
            <div className="row mt-4">
                {minmaxTemp(list.main.temp_min, list.main.temp_max)}
                <div className="col-md-6">
                <p>
                    {' '}
                    <strong>{main}</strong>
                </p>
                <p>
                    <strong>
                    {' '}
                    {d.toDateString()}
                    </strong>
                    
                </p>
                </div>

            </div>
            
            
            <h4 className="py-3">{values}</h4>
            <ul>{d.toLocaleTimeString()}</ul>
            <h5 className="py-4">
            
            </h5>
        </div>
      </div>
    </div>
  );
};

const minmaxTemp = (min, max) => {
  return (
    <div className="col-md-6">
      <p><strong>{min}&deg;C</strong></p>
      <p><strong>{max}&deg;C</strong></p>
    </div>
  );
};

export default WeatherPresantation;
