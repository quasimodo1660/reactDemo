import React,{Component} from 'react'
import CNavbar from './HeaderComponent'
import {DISHES} from '../Shared/dishes'
import Menu from './MenuComponent'
import Dishdetail from './DishdetailComponent'
import Footer from './FooterComponent'



export default class Main extends Component{

    constructor(props){
        super(props);
        this.state={
            dishes:DISHES,
            selectedDish:null
        }
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId});
        // console.log(this.state.selectedDish)
    }


    render(){
        return (
        <div>
            <CNavbar />
            
            <Menu 
                dishes={this.state.dishes} 
                onClick={(dishId) => this.onDishSelect(dishId)}
            />
            <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id===this.state.selectedDish)[0]} />
            <Footer />
        </div>
        )
    }
}