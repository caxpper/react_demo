import 'bootstrap/dist/css/bootstrap.min.css';
import React,{Component} from 'react';
import {getRandomPosition, getRandomColor} from '../helpers';
import BoxContainer from './box_container';



class App extends Component{
    
    constructor(props){
        super(props);

        this.state = {
            boxes: [
                {
                    color:'blue',
                    pos:getRandomPosition()
                },
                {
                    color:'pink',
                    pos:getRandomPosition()
                },
                {
                    color:'green',
                    pos:getRandomPosition()
                },
                {
                    color:'orange',
                    pos:getRandomPosition()
                },
                {
                    color:'red',
                    pos:getRandomPosition()
                },
            ]
        };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(index){
        const newBoxes = this.state.boxes.slice();

        newBoxes[index].color = getRandomColor();
        newBoxes[index].pos = getRandomPosition();

        this.setState({
            boxes: newBoxes
        });
    }

    render(){

        const boxElements = this.state.boxes.map((item, index)=>{
            return (
                <BoxContainer pos={item.pos} newColor={()=> this.changeColor(index)} color={item.color} key={index}/>                 
            );
        });

        return (<div className="container">
                <h1 className="text-center my-3">Components Demo</h1>
                {boxElements}
            </div>);
    }
}

export default App;
