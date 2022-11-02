import React, {Component}from 'react';
import { Alert } from 'react-bootstrap';
import CarClass from './components/CarClass';
import Employees from './components/Employees';
import Groceries from './components/Groceries';

class Main extends Component{

    state = {
        Car: {
            carType: "SUV",
            carBrand: "Toyota",
            carStatus: "Brand New"
        },
        Employee: {
            alert: false,
        }
    }

    setAlert = (employee) => {
        this.setState({
            ...this.state,
            Employee: employee
        })
    }

    render(){

        return(
            <div className='page'>
                {this.state.Employee.alert ? <Alert className="emp-alert">
                    <h2>Employee Details:</h2>
                    <p> ID: {this.state.Employee.employeeId}</p>
                    <p> Age: {this.state.Employee.age}</p>
                    <p> Date of Birth: {this.state.Employee.dob}</p>
                    <p> Salary: ${this.state.Employee.salary}</p>
                    <p> Department: {this.state.Employee.department}</p>
                </Alert> : null}
                <Employees setAlert={this.setAlert}/>
                <Groceries/>
                <CarClass carInfo={this.state.Car}/>
            </div>
        )
    }
}

export default Main;