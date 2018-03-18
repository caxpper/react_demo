import React, {Component} from 'react';

import TimeString from './time';

class Clock extends Component {
    constructor(props){
      super(props);
      
      this.state = {
        time: new Date()
      }
    }
    componentWillMount(){
      setInterval(() => this.tick(), 1000);
    }
    tick(){
      this.setState({
        time: new Date()
      });
    }
    render(){
      return (
        <div>
          { <TimeString date={this.state.time}/> }
        </div>
      )
    }
  }

  export default Clock;