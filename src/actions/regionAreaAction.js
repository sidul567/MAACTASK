import axios from "axios";
import { GET_AREA_FAIL, GET_AREA_REQUEST, GET_AREA_SUCCESS, GET_REGION_FAIL, GET_REGION_REQUEST, GET_REGION_SUCCESS, NEW_AREA_FAIL, NEW_AREA_REQUEST, NEW_AREA_SUCCESS, NEW_REGION_FAIL, NEW_REGION_REQUEST, NEW_REGION_SUCCESS } from "../constants/regionAreaConstant";
import { CLEAR_ERRORS } from "../constants/userConstant";

export const getRegionAction = (token, number) => async (dispatch) => {
    try {
        dispatch({ type: GET_REGION_REQUEST });
        const { data } = await axios.get(`/api/region/${number}/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: GET_REGION_SUCCESS, payload: data });
    } catch (err) {
        const error = err?.response?.data?.message ? err.response.data.message : err.message;
        dispatch({ type: GET_REGION_FAIL, payload: error });
    }
}

export const getAreaAction = (token, number) => async (dispatch) => {
    try {
        dispatch({ type: GET_AREA_REQUEST });
        const { data } = await axios.get(`/api/area/All/${number}/1`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        dispatch({ type: GET_AREA_SUCCESS, payload: data });
    } catch (err) {
        const error = err?.response?.data?.message ? err.response.data.message : err.message;
        dispatch({ type: GET_AREA_FAIL, payload: error });
    }
}

export const newRegionAction = (token, name) => async (dispatch) => {
    try {
        dispatch({ type: NEW_REGION_REQUEST });
        const { data } = await axios.post("/api/region", { name }, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            'withCredentials': true,
        });
        dispatch({ type: NEW_REGION_SUCCESS, payload: data });
    } catch (err) {
        const error = err?.response?.data?.message ? err.response.data.message : err.message;
        dispatch({ type: NEW_REGION_FAIL, payload: error });
    }
}

export const newAreaAction = (token, name, region) => async (dispatch) => {
    try {
        dispatch({ type: NEW_AREA_REQUEST });
        const { data } = await axios.post("/api/area", { name, region }, {
            'headers': {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            'withCredentials': true,
        });
        dispatch({ type: NEW_AREA_SUCCESS, payload: data });
    } catch (err) {
        const error = err?.response?.data?.message ? err.response.data.message : err.message;
        dispatch({ type: NEW_AREA_FAIL, payload: error });
    }
}

export const clearErrors = ()=> async (dispatch)=>{
    dispatch({type: CLEAR_ERRORS});
}