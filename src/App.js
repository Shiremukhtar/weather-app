import WeatherContainer from './containers/WeatherContainer';
import './App.css';
import './index.css';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CitySelector from './components/CitySelector';
import UseFetch from './hooks/UseFetch';
import WeatherList from './components/WeatherList';
import FivedayContainer from './containers/FivedayContainer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './Navbar';
function App() {
 
  //const {data, error, isLoading, setUrl} = UseFetch();
  
  return (
    <Router>
      <Navbar />
    <Container className="App">
      
    <Switch>
      <Route exact path="/">
      <WeatherContainer />
      </Route>
      <Route path="/fivedaysweather">
      <FivedayContainer />
      </Route>
    </Switch>
  
    
    </Container>
    </Router>
  );
}

export default App;
