import { GET_AREA_FAIL, GET_AREA_REQUEST, GET_AREA_SUCCESS, GET_REGION_FAIL, GET_REGION_REQUEST, GET_REGION_SUCCESS } from "../constants/regionAreaConstant";

export const regionReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_REGION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case GET_REGION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case GET_REGION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}

export const areaReducer = (state = { data: [] }, action) => {
    switch (action.type) {
        case GET_AREA_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case GET_AREA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
            }
        case GET_AREA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        default:
            return state;
    }
}