import { createStore, combineReducers, applyMiddleware } from 'redux';
import languageReducer from './language/languageReducer';
import recommendReducer from "./recommend/recommendReducer";
import thunk from "redux-thunk"
import {actionLog} from "./middlewares/actionLog"

const rootReducer = combineReducers({
    languageReducer,
    recommendReducer
})

const store = createStore(rootReducer,applyMiddleware(thunk,actionLog))

export type IRootState =  ReturnType<typeof store.getState>

export default store;