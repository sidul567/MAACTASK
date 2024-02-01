import { CLEAR_ERRORS, GET_AREA_FAIL, GET_AREA_REQUEST, GET_AREA_SUCCESS, GET_REGION_FAIL, GET_REGION_REQUEST, GET_REGION_SUCCESS, NEW_AREA_FAIL, NEW_AREA_REQUEST, NEW_AREA_SUCCESS, NEW_REGION_FAIL, NEW_REGION_REQUEST, NEW_REGION_SUCCESS } from "../constants/regionAreaConstant";

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

export const newRegionReducer = (state = { region: {} }, action) => {
    switch (action.type) {
        case NEW_REGION_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case NEW_REGION_SUCCESS:
            return {
                ...state,
                isLoading: false,
                region: action.payload,
            }
        case NEW_REGION_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export const newAreaReducer = (state = { area: {} }, action) => {
    switch (action.type) {
        case NEW_AREA_REQUEST:
            return {
                ...state,
                isLoading: true,
            }

        case NEW_AREA_SUCCESS:
            return {
                ...state,
                isLoading: false,
                area: action.payload,
            }
        case NEW_AREA_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}