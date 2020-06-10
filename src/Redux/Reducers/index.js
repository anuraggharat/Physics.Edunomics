import {combineReducers} from 'redux'
import authReducers from './auth'
import profileReducers from './profile' 


const rootReducer=combineReducers(
{
    auth:authReducers,
    profile:profileReducers
}
)
export default rootReducer