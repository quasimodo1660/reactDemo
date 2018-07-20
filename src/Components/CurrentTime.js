import React, { Component } from 'react';

export default class CurrentTime extends Component{
    constructor(props){
        super(props)
        this.state={curTime:null}
    }
    componentDidMount(){
        setInterval(()=>{
          this.setState({
            curTime:new Date().toLocaleTimeString()
          })
        },1000)
    }
    render(){
        return (
            <p>The time is: {this.state.curTime}</p>
        )
    } 
}