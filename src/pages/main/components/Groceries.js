import React from 'react';
import GroceryList from './GroceryList';

class Groceries extends React.Component {

    state = {
        groceries: [
            {
                groceryId: "1",
                itemName: "Cup Noodles",
                amt: 5,
            },
            {
                groceryId: "2",
                itemName: "Papaya Soap",
                amt: 2,
            },
            {
                groceryId: "3",
                itemName: "Coconut Oil",
                amt: 1,
            },
            {
                groceryId: "4",
                itemName: "Milk",
                amt: 3,
            },
        ]
    }

    render() {
        return (
            <div className='groceries-comp'>
                <h1 className='title'>Groceries</h1>
                <GroceryList groceries={this.state.groceries}/>
            </div>
        );
    }
}

export default Groceries;