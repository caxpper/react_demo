
import React from 'react';

export default props => {

    function handleClick(){
        console.log('Button clicked');
        props.updateColor();
    }

    return (<div>
                <button className='btn btn-outline-btn-outline-info' onClick={handleClick}>Click Me</button>
            </div>);
}