import {LOADING,LOGIN_FAILURE,LOGIN_SUCCESS,REGISTER_FAILURE,REGISTER_SUCCESS,LOGOUT} from "../Constants"


const initialState={
    isLoading:false,
    isAuthenticated:false,
    isLoggedIn:false,
    error:null,
    token:null
}

export default function(state=initialState,action){

    switch(action.type){
        case LOADING:
            return{
                ...state,
                isLoading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                isLoading:false,
                isLoggedIn:true,
                error:null,
                token:payload.token
            }
        case LOGIN_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:payload.error
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isLoading:false
            }
        case REGISTER_FAILURE:
            return{
                ...state,
                isLoading:false,
                error:payload.error
            }
        case LOGOUT:
            return{
                ...state,
                isLoading:false,
                isLoggedIn:false,
                token:null,
                error:null
            }
        default :
        return{
            ...state
        }
    }


}