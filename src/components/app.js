import React from 'react';
import '../assets/css/app.css';
import logo from '../assets/images/logo.svg';
import shamrockL from '../assets/images/shamrock-l.png';
import shamrockR from '../assets/images/shamrock-r.png';
import gold from '../assets/images/pot-o-gold.png';
import Greeting from './greeting';

const user = {
    name: 'Fredo',
    favColor: 'blue',
    doStuff: function(){
        
    }
};

const App = () => (
    <div>
        <div className="app">              
            <img src={gold} className="gold left" />
            <img src={logo} className="logo rotate"/>
            <div className="title-container">
                <img src={shamrockL} className="clover left rotate3d-right" />
                <Greeting {...user} />
                <img src={shamrockR} className="clover right rotate3d-left" />
            </div>
            <img src={gold} className="gold right"/>            
        </div>
    </div>
);

export default App;
