import { createStore,combineReducers } from 'redux';
import {Dishes} from './dishes'
import {Comments} from './Comments'
import {Promotions} from './Promotions'
import {Leaders} from './Leaders'



export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            comments:Comments,
            promotions:Promotions,
            leaders:Leaders
        })
    )
    // console.log(store)
    return store
}