import React from 'react';
import CarClass from './components/CarClass';
import Employees from './components/Employees';
import Groceries from './components/Groceries';

class Main extends React.Component{

    state = {
        Car: {
            carType: "SUV",
            carBrand: "Toyota",
            carStatus: "Brand New"
        }
    }

    render(){

        return(
            <div className='page'>
                <Employees/>
                <Groceries/>
                <CarClass carInfo={this.state.Car}/>
            </div>
        )
    }
}

export default Main;