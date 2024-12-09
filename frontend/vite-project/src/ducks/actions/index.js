import { apiCall } from "../../utils/index.js";

export const FETCH_STORE_REQUEST = 'FETCH_STORE_REQUEST';
export const FETCH_STORE_SUCCESS = 'FETCH_STORE_SUCCESS';
export const FETCH_STORE_FAILURE = 'FETCH_STORE_FAILURE';

export const REGISTER_USER_REQUEST = 'REGISTER_USER_REQUEST';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

export const LOGIN_USER_REQUEST = 'LOGIN_USER_REQUEST';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

export const fetchStore = () => async (dispatch) => {
    const apiReq = () => fetch('https://fakestoreapi.com/products?limit=5');
    await apiCall({
        dispatch,
        actionTypes : [FETCH_STORE_REQUEST, FETCH_STORE_SUCCESS, FETCH_STORE_FAILURE],
        apiReq
        })
};

export const registerUser = (data, callback) => async (dispatch) => {
    const apiReq = () =>
        fetch("http://localhost:3001/register", {
            method : "POST",
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(data)
        });
    await apiCall({
        dispatch,
        actionTypes : [REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE],
        apiReq,
        onComplete : callback
        })
};

export const loginUser = (data, callback) => async (dispatch) => {
    const apiReq = () =>
        fetch("http://localhost:3001/login", {
            method : "POST",
            headers : { 'Content-type' : 'application/json'},
            body : JSON.stringify(data)
        });

    await apiCall({
        dispatch,
        actionTypes : [LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE],
        apiReq,
        onComplete : callback
     })
}