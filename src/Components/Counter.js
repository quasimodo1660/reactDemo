import React, { Component } from 'react';
import styled from 'styled-components';
import {Icon,Button} from 'react-materialize'

const CounterDiv = styled.div`
    algin-self:center;
    width:20%;
    height:15%
    border-style:solid;
    border-width: 1.5px;
    margin:auto
`;

export default class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            counter:0
        }
    }

    _add=()=>{
        this.setState({
            counter:this.state.counter+1
        })
    }

    _subtract=()=>{
        this.setState({
            counter:this.state.counter-1
        })
    }

    render(){
        return(
            <CounterDiv>
                <h4>{this.state.counter}</h4>
                <span>
                    <Button waves='light' onClick={this._add}>Increment<Icon left>add</Icon></Button>
                </span>
                <span>
                    <Button waves='light' onClick={this._subtract}>Decrement<Icon left>remove</Icon></Button>
                </span>
            </CounterDiv>
        )
    }
}