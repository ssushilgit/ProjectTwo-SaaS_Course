import { createSlice } from "@reduxjs/toolkit";

createSlice({
    name : "userSlice",
    initialState : {
        userName : "",
        userAddress : "",
    },
    reducers : {
        // state - initalState
        // action - trigger garda pathaune data aune kura 
        setName(state, action) {
            state.userName = "Sushil"
        },

         setAddress(){
            state.userAddress = "Damauli"
         }
    }
})