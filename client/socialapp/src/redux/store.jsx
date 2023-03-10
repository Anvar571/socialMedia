import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import rootReducer from "./reducer/main";

const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
)

export default store