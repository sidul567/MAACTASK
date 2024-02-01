import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import {thunk} from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { areaReducer, newAreaReducer, newRegionReducer, regionReducer } from "./reducers/regionAreaReducer";

const reducer = combineReducers({
    user: userReducer,
    region: regionReducer,
    area: areaReducer,
    newRegion: newRegionReducer,
    newArea: newAreaReducer
})

let initialState = {
    user: {
        user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {},
        isLoading: false,
        isAuthenticate: localStorage.getItem("user") ? true : false,
    }
}
const middleWare = [thunk];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleWare))
)

export default store;