import React, { Component } from 'react';
import styled from 'styled-components';
import {Icon,Button} from 'react-materialize'




const VoteDiv = styled.div`
    algin-self:center;
    width:18%;
    height:15%
    border-style:solid;
    border-width: 1.5px;
    margin:auto
`;



export default class VoteChild extends Component{
    constructor(props){
        super(props)
        this.state={
            votes:0
        }
    }

    _addVote=()=>{
        this.setState({
            votes:this.state.votes+1
        })
    }

    render(){
        return(
            <VoteDiv>
                <div style={{width:'30%',display:'inline-block'}}>
                    <h5>{this.state.votes}</h5>
                </div>
                <div style={{width:'30%',display:'inline-block'}}>
                    <h5>{this.props.text}</h5>
                </div>
                <div style={{width:'30%',display:'inline-block'}}>
                    <Button 
                        waves='light'
                        icon='add'
                        floating
                        onClick={this._addVote}>
                    </Button>
                </div>
            </VoteDiv>
        )
                  
    }
}