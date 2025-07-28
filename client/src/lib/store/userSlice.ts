import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";
import API from "../http";

const userInitialState : IUserInitialState = {
        name : null,
        address : null,
}

const userSlice = createSlice({
    name : "userSlice",
    initialState : userInitialState,
    reducers : { 
        // state - initalState
        // action - trigger garda pathaune data aune kura 
        setName(state: IUserInitialState, action: PayloadAction<string>) {
            state.name = action.payload
        },

         setAddress(state: IUserInitialState, action : PayloadAction<string>){
            state.address = action.payload
         }
    }
}) 

// Export actions and reducer
export const { setName, setAddress } = userSlice.actions;
export default userSlice.reducer;


// Custom Thunk creation
// register user
function registerUser(){
    return async function registerUserThunk(){
        try {
            const response = await API.post("user/register")
            if(response.status === 200){

            } else {

            }   
        } catch (error) {
            console.log(error)
        }
    } 
}

// login user
function loginUser(){
    return async function loginUserThunk(){
       try {
             const response = await API.post("user/login")
            if(response.status === 200){

            } else {

            }
       } catch (error) {
            console.log(error)
       }
    }
}

// forget password 
function forgotPassword(){
    return async function forgotPasswordThunk(){
        try {
            const response = await API.post("user/forgot-password")
            if(response.status === 200){

            } else {

            }
        } catch (error) {
            console.log(error)
        }
    }
}