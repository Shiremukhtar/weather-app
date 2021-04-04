import { useState } from 'react'
import {Row, Col, FormControl, Button} from 'react-bootstrap';

const WeatherSearch = ({ search }) => {
    const [city, setCity] = useState('');

    return (
      <>
        <Row>
          <Col>
            <h1>Search your city</h1>
          </Col>
        </Row>

        <Row>
          <Col xs={4}>
            <FormControl
              placeholder="Enter city"
              onChange={(event) => setCity(event.target.value)}
              value={city}
            />
          </Col>
        </Row>

        <Row>
          <Col>
           {/* don't forget to edit our function  */}
            <Button onClick={() => search(city)}>Check Weather</Button>
          </Col>
        </Row>
      </>
    );
}

export default WeatherSearch;