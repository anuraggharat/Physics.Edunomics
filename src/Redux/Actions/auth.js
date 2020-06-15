import {LOADING,LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS,LOGOUT} from "../Constants"
import axios from 'axios'

//login the user
export const registerUser=(body)=>async(dispatch)=>{
    
    dispatch({
        type:LOADING
    })

    const headers={
        
    }

    try {
        const res =await axios.post('url',body,{headers:headers})
        dispatch({
            type:REGISTER_SUCCESS,
            payload:res.data
        })
    } catch (error) {  
        dispatch({
            type:REGISTER_FAILURE,
            payload:error
        })       
    }
}

export const loginUser=(body)=async(dispatch)=>{

    dispatch({
        type:LOADING
    })

    const headers={}

    try {
        const res = axios.post('url',body,{headers:headers})
        dispatch({})

    } catch (error) {
        
    }

}