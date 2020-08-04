import React, {Component} from 'react';
import './timer.css';


class Timer extends Component{
    constructor(props){
      super(props)
      this.state = {
        date: new Date(),
        time: 0
      }
    }
  
    componentDidMount(){
      if (this.props.start !== undefined){
        this.setState({time: this.props.start})
      }
      this.timerID = setInterval(() => this.tick(),1000);
    }

    componentDidUpdate(){
        if(this.state.time <= 0){
            this.componentWillUnmount();
        }
    }
  
    componentWillUnmount(){
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date(),
        time: this.state.time - 1 
      });
    }
  
  
    render(){
      return(
        <>
        {this.state.time > 0 &&
        <div className = "show">
            <table className= "tugas12">
            <tr>
            <th><h3 className= "date">sekarang jam: {this.state.date.toLocaleTimeString()}</h3></th>
            <th><h3 className= "time">hitung mundur: {this.state.time}</h3></th>
            </tr>
        </table>
        </div>
        }
        </>
      );
    }
  }
  
  export default Timer