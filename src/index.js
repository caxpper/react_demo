import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: 'Peter',
    lastName: 'Parker'
};

function greetUser(user1){
    return user1.firstName + ' ' + user1.lastName;
}

const greeting = <h1>Hello {greetUser(user)}</h1>;

ReactDOM.render(
    greeting,
    document.getElementById('root')
);


