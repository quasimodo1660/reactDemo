import React,{Component} from 'react'
import Main from './Components/MainComponent'
import {BrowserRouter} from 'react-router-dom'

export default class Coursera extends Component{
   
    render(){
        return (
        <BrowserRouter>
        <div>
            <Main />
        </div>
        </BrowserRouter>
        )
    }
}