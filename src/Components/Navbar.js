import React,{Component} from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';

export default class CNavbar extends Component{
    render(){
        return (
        <div>
            <Navbar dark color="primary">
                <div className="container">
                <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            </div>
            </Navbar>
      </div>
        )
    }
}