import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";

class CarClass extends React.Component{

    carInfo = this.props.carInfo

    render(){

        return(
            <Card className="car-comp">
                <h2>Class to Class Props</h2>
                <Container>
                    <Row className="info-grp">
                        <Col className="label">Car Type: </Col>
                        <Col className="info">{this.carInfo.carType}</Col>
                    </Row>
                    <Row className="info-grp">
                        <Col className="label">Car Brand: </Col>
                        <Col className="info">{this.carInfo.carBrand}</Col>
                    </Row>
                    <Row className="info-grp">
                        <Col className="label">Car Status: </Col>
                        <Col className="info">{this.carInfo.carStatus}</Col>
                    </Row>
                </Container>
            </Card>
        )
    }
}

export default CarClass;