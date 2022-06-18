import { Dispatch } from "@reduxjs/toolkit";
import { signInWithData } from "./authSlice";

export const logIn = () => { 
    return async (dispatch: Dispatch, getState: any) => {
        console.log('getState', getState());        const response =  await fetch('https://randomuser.me/api')
        const { results: [data] } = await response.json();

        const { picture: { thumbnail }, name: { first, last } } = data;

        dispatch(signInWithData({name: `${first} ${last}`, avatar: thumbnail}));
    }
}