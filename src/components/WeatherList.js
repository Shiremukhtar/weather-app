import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    
    return (
        <Row>
           {weathers.map((day) => (
                <Col key={''}>
                    <WeatherCard 
                    temp_max={day.maxTemp} 
                    temp_min={day.minTemp} 
                    dt={day.date} 
                    main={day.main} 
                    icon={day.icon}
                  />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;