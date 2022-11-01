import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

function GroceryList(props){

    const { groceries } = props;

    return(
        <Container>
            <Row className="justify-content-evenly p-2">
                {
                    groceries.map((grocery) => {
                        return (
                            <Col xs={12} sm={12} md={5} className='card m-1' key={grocery.groceryId}>
                                <div className="groc-card justify-content-sm-between justify-content-md-center">
                                    <div className='groc-info'>
                                        <p className='groc-name bold'>{grocery.itemName}</p>
                                        <p className='groc-designation'>{grocery.amt}</p>
                                    </div>
                                </div>
                            </Col>
                        )
                    })
                }
                <Col xs={0} md={5} className='m-1'></Col>
            </Row>
        </Container>
    )
}

export default GroceryList;