import axios from "axios";
import { GET_AREA_FAIL, GET_AREA_REQUEST, GET_AREA_SUCCESS, GET_REGION_FAIL, GET_REGION_REQUEST, GET_REGION_SUCCESS } from "../constants/regionAreaConstant";

export const getRegionAction = () => async (dispatch)=>{
    try{
        dispatch({type: GET_REGION_REQUEST});
        const {data} = await axios.get('https://countriesnow.space/api/v0.1/countries/capital');
        dispatch({type: GET_REGION_SUCCESS, payload: data.data});
    }catch(err){
        const error = err?.response?.data?.message ? err.response.data.message : err.message;
        dispatch({type: GET_REGION_FAIL, payload: error});
    }
}
export const getAreaAction = () => async (dispatch)=>{
    try{
        dispatch({type: GET_AREA_REQUEST});
        const {data} = await axios.get('https://countriesnow.space/api/v0.1/countries/capitala');
        dispatch({type: GET_AREA_SUCCESS, payload: data.data});
    }catch(err){
        const error = err?.response?.data?.message ? err.response.data.message : err.message;
        dispatch({type: GET_AREA_FAIL, payload: error});
    }
}