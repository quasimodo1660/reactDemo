import React,{Component} from 'react'
import CNavbar from './HeaderComponent'
import {DISHES} from '../Shared/dishes'
import {COMMENTS} from '../Shared/comments'
import {LEADERS} from '../Shared/leaders'
import {PROMOTIONS} from '../Shared/promotions'
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent'
import Contact from './ContactComponent'
import {Switch, Route, Redirect} from 'react-router-dom'




export default class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS
        }
    }

    render(){

        const HomePage=()=>{
            return (
                <Home 
                    dish={this.state.dishes.filter((dish)=>dish.featured)[0]}
                    promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]}
                    leader={this.state.leaders.filter((leader)=>leader.featured)[0]}
                />
            )
        }

        const DishWithID=({match})=>{
            return (
                <Dishdetail dish={this.state.dishes.filter((dish)=>
                    dish.id=== parseInt(match.params.dishId,10))[0]} 
                    comments={this.state.comments.filter((comment)=>comment.dishId===parseInt(match.params.dishId,10)
                    )} 
                />
            )
        }



        return (
        <div>
            <CNavbar />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/contactus' component={Contact} />
                <Route exact path='/menu' component={()=><Menu dishes={this.state.dishes}/>} />
                <Route path='/menu/:dishId' component={DishWithID} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
        )
    }
}