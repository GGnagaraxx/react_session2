import React from 'react';
import data from '../../../data/data';
import { Container, Row, Col } from 'react-bootstrap';

function Employees(){

    const { employees } = data;

    return(
        <div className='employees-comp'>
            <h1 className='title'>Employees</h1>
            <Container>
                <Row className="justify-content-evenly p-3">
                    {
                        employees.map((employee)=>{
                            return(
                                <Col xs={12} sm={12} md={5} className='card m-1' key={employee.employeeId}>
                                    <div className="emp-card justify-content-sm-between justify-content-md-center">
                                        <div className='emp-info'>
                                            <p className='emp-name bold'>{employee.name}</p>
                                            <p className='emp-designation'>{employee.designation}</p>
                                        </div>
                                        <img 
                                            className='emp-img'
                                            src={employee.image} 
                                            alt={employee.name + "'s image"}/>
                                    </div>
                                </Col>
                            )
                        })
                    }
                    <Col xs={0} md={5} className='m-1'></Col>
                </Row>
            </Container>
        </div>
    );
}

export default Employees;