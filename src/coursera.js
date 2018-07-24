import React,{Component} from 'react'
import CNavbar from './Components/Navbar'
import {DISHES} from './Shared/dishes'
import Menu from './Components/MenuComponent'

export default class Coursera extends Component{
    constructor(props){
        super(props);
        this.state={
            dishes:DISHES
        }
    }

    render(){
        return (
        <div>
            <CNavbar />
            <Menu dishes={this.state.dishes} />
        </div>
        )
    }
}