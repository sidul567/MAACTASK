import { CLEAR_ERRORS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../constants/userConstant"

export const userReducer = (state = { user: {} }, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case SIGNUP_REQUEST:
            return {
                ...state,
                isLoading: true,
                isAuthenticate: false,
            }

        case LOGIN_SUCCESS:
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticate: true,
                user: action.payload,
            }
        case LOGIN_FAIL:
        case SIGNUP_FAIL:
            return {
                ...state,
                isLoading: false,
                isAuthenticate: false,
                error: action.payload,
            }
        case LOGOUT_SUCCESS: {
            return {
                ...state,
                user: {},
                isAuthenticate: false,
            }
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