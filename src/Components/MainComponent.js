import React,{Component} from 'react'
import CNavbar from './HeaderComponent'
import {DISHES} from '../Shared/dishes'
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import {Switch, Route, Redirect} from 'react-router-dom'




export default class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
        }
    }

    render(){

        const HomePage=()=>{
            return (
                <Home />
            )
        }
        return (
        <div>
            <CNavbar />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}/>} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
        )
    }
}