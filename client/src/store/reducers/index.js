  
import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools } from 'redux-devtools-extension'
import thunk from "redux-thunk";
import postsReducer from "./postsReducers";

const rootReducer = combineReducers({
    posts: postsReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))