import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { IRootState } from "../store";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START";

export const FETCH_RECOMMEND_PRODUCTS_SUCCESS = "FETCH_RECOMMEND_PRODUCTS_SUCCESS";

export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL";

interface IFetchRecommendProductStartAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_START
}

interface IFetchRecommendProductSuccessAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: any
}


interface IFetchRecommendProductFailAction {
    type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: any
}

export type IRecommendProductAction = IFetchRecommendProductFailAction | IFetchRecommendProductStartAction | IFetchRecommendProductSuccessAction

export const fetchRecommendProductStartActionCreator = ():IFetchRecommendProductStartAction=>{
    return {
        type: FETCH_RECOMMEND_PRODUCTS_START
    }
}   

export const fetchRecommendProductSuccessActionCreator = (data):IFetchRecommendProductSuccessAction=>{
    return {
        type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
        payload: data
    }
} 

export const fetchRecommendProductFailActionCreator = (error):IFetchRecommendProductFailAction=>{
    return {
        type: FETCH_RECOMMEND_PRODUCTS_FAIL,
        payload:error
    }
} 


export const getDataActionCreator = ():ThunkAction<
void, IRootState, unknown,IRecommendProductAction
> => async (dispatch,getState)=>{
    dispatch(fetchRecommendProductStartActionCreator())
    try{
        const {data} = await axios.get("https://www.fastmock.site/mock/f8254e0cd181e425348068a8db1a8725/api/productCollections")
        dispatch(fetchRecommendProductSuccessActionCreator(data))
    }catch(e){
        dispatch(fetchRecommendProductFailActionCreator(e.msg))
    }
}