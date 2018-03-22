import React from 'react';
import Button from './button';
import Box from './box';

export default function BoxContainer(props){

    const {newColor, color, pos: {top, left}} = props;

    const cotainerStyle = {
        display:'inline-block',
        position: 'absolute',
        transitionDuration: '500ms',
        top,
        left
    };

    return (
        <div style={cotainerStyle}>
            <Button updateColor={newColor}/>
            <Box color={color} />        
        </div>
    )

}