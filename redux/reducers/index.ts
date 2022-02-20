import {persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import {combineReducers} from "@reduxjs/toolkit";
import dataReducer from "./dataReducer/dataReducer";
import themeReducer from "./themeReducer/themeReducer";

const combinedReducers = combineReducers({
    data : dataReducer,
    theme : themeReducer
})

const persistedReducers = persistReducer({key:'rootPersistor',storage,whitelist:['data','theme']},combinedReducers)
export default persistedReducers