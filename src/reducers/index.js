import {combineReducers} from "redux";
import {passVaultReducer} from "./passvault-reducer";

const reducer = combineReducers({
    passVaultReducer: passVaultReducer
});


export default reducer;
