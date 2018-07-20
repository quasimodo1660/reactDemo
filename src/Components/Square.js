import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    width:300px;
    height:300px;
    padding:10px;
    margin:5px;
    display:inline-block
`;



export default class SquareView extends Component{
    render(){
        return (
            <Div style={{backgroundColor:this.props.bgcolor}}>
            <h1>{this.props.text}</h1>
            </Div>
        )
    }
}

