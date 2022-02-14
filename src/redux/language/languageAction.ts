
export  const CHANGE_LANGUAGE = "change_language"
export  const ADD_LANGUAGE = "add_language"

interface IChangeLanguageAction {
    type: typeof CHANGE_LANGUAGE;
    payload: "zh"|"en";
}

interface IAddLanguageAction {
    type: typeof ADD_LANGUAGE;
    payload: {
        name: string, 
        code: string
    }
}

export type TLanguageActionTypes = IChangeLanguageAction | IAddLanguageAction


export const changeLanguageActionCreator = ( languageCode :"zh"|"en"): IChangeLanguageAction=>{
    return {
        type: CHANGE_LANGUAGE,
        payload: languageCode
    }
}

export const addLanguageActionCreator = ( name:string, code: string):IAddLanguageAction=>{
    return {
        type: ADD_LANGUAGE,
        payload: {name,code}
    }
}