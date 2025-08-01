import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth, IAuthInitialData, IRegisterData } from "./authSlice.type";
import { Status } from "@/lib/types/type";
import API from "@/lib/http";
import { AppDispatch } from "../store";
import { ILoginData } from "@/app/auth/login/loginTypes";

const initialState : IAuthInitialData = {
    user : {
        username : "",
        password : ""
    },
    status : Status.LOADING
}

const authSlice = createSlice({
    name : "authSlice",
    initialState : initialState,
    reducers : { 
        setUser(state : IAuthInitialData , action : PayloadAction<IAuth>){
            state.user = action.payload
        },
        setStatus(state : IAuthInitialData, action : PayloadAction<Status>){
            state.status = action.payload
        }
    }
})

export const {setUser, setStatus} = authSlice.actions
export default authSlice.reducer

// authSlice.ts
export function registerUser(data : IRegisterData){
    return async function registerUserThunk(dispatch:AppDispatch){
        try {
            const response = await API.post("auth/register",data)
            if(response.status === 201){
                dispatch(setStatus(Status.SUCCESS))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function loginUser(data : ILoginData){
    return async function loginUserThunk(dispatch: AppDispatch){
        try {
            const response = await API.post("auth/login",data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
            }
            else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}