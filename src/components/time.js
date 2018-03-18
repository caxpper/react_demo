import React from 'react';

function Time(props){
    return (
        <h1>The time is: { props.date.toLocaleTimeString() }</h1>
    );
}

export default Time;