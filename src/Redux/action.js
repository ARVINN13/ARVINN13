import * as types from './actionTypes';
import React, { useState, useEffect } from "react";

import firebase from 'firebase';







const loginStart = () => ({
    type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user,

});

const loginFail = (error) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

const logoutStart = () => ({
    type: types.LOGOUT_START,
});

const logoutSuccess = () => ({
    type: types.LOGOUT_SUCCESS,
});

const logoutFail = (error) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
});





export const loginInitiate = (user) => {
    console.log(user);
    
    return function (dispatch) {
        dispatch(loginStart());
       
        
       user ? dispatch(loginSuccess(user)): dispatch(loginFail( ));
         };
         
     };



export const logoutInitiate = () => {
    return function (dispatch) {
       dispatch( logoutStart());

       firebase
       .auth()
       .signOut()
       .then((resp) => dispatch(logoutSuccess()))
   
   
        
        .catch((error) =>dispatch(logoutFail(alert("Error.."))));
    };
};

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user,
})




