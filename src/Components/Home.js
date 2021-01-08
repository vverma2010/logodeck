import React, { Component } from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class Home extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Cart/>
            </div>
        );
    }
}

export default Home;