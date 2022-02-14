import i18n from "i18next"
import {CHANGE_LANGUAGE, ADD_LANGUAGE, TLanguageActionTypes, changeLanguageActionCreator, addLanguageActionCreator} from "./languageAction"

export interface ILanguageState{
    language:"en"|"zh",
    languageList:{name:string, code:string}[]
}

const defaultState: ILanguageState = {
    language:"zh",
    languageList:[
        {name:"中文",code:"zh"},
        {name:"English",code:"en"}
    ]
}

export default  (state = defaultState, action:TLanguageActionTypes )=>{
    console.log(state,action);
    switch(action.type){
        case CHANGE_LANGUAGE:
            i18n.changeLanguage(action.payload)
            return {
                ...state,
                language:action.payload
            }
        case ADD_LANGUAGE:
            return {
                ...state,
                languageList:[...state.languageList,action.payload]
            }
        default:
            return state
    }
    
}