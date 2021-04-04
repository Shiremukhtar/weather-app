
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The Weather App</h1>
            <div className="links">
                <Link to="/">Weather</Link>
                <Link to="/fivedaysweather">Five Days Forecast</Link>
            </div>
            
        </nav>
    )
}

export default Navbar
