import React from 'react'
import { Row, Col } from 'react-bootstrap';

function TopInfoLine() {
    return (
        <>
            <Col className="top-info-line__phone-mail">
                <span>+7(965)555-38-55</span>
                <span>support@mail.com</span>
            </Col>
            <Col className="top-info-line__location-track-currency">
                <span>Store location</span>
                <span>Track You Order</span>
                <span className="pr-0">Dollar(US)</span>
            </Col>
        </>
    )
}

export default TopInfoLine
