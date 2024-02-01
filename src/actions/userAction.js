import axios from "axios";
import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants/userConstant";

export const loginAction = (email, password) => async (dispatch)=>{
    try{
        dispatch({type: LOGIN_REQUEST});
        const {data} = await axios.post('/api/users/login',{employeeId: email, password},{
            'headers': {
                'Content-Type': 'application/json',
            },
            'withCredentials': true,
        });
        dispatch({type: LOGIN_SUCCESS, payload: data});
    }catch(err){
        const error = err.response.data.message ? err.response.data.message : err.message;
        dispatch({type: LOGIN_FAIL, payload: error});
    }
}

export const signupAction = (user) => async (dispatch)=>{
    try{
        dispatch({type: SIGNUP_REQUEST});
        const {data} = await axios.post('/api/users/signup',user,{
            'headers': {
                'Content-Type': 'application/json',
            },
            'withCredentials': true,
        });
        dispatch({type: SIGNUP_SUCCESS, payload: data});
    }catch(err){
        const error = err.response.data.message ? err.response.data.message : err.message;
        dispatch({type: SIGNUP_FAIL, payload: error});
    }
}

export const logoutAction = ()=> async (dispatch)=>{
    localStorage.removeItem("user");
    dispatch({type: LOGOUT_SUCCESS});
}

export const clearErrors = ()=> async (dispatch)=>{
    dispatch({type: CLEAR_ERRORS});
}