import React,{Component} from 'react'
import Main from './Components/MainComponent'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { ConfigureStore} from './redux/configureStore'


const store=ConfigureStore()

export default class Coursera extends Component{

   
   
    render(){
        return (
        <Provider store={store}>
        <BrowserRouter>
        <div>
            <Main />
        </div>
        </BrowserRouter>
        </Provider>
        )
    }
}