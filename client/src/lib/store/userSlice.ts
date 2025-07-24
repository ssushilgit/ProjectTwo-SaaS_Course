import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./types";

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

// @ts-ignore
dispatch(setName("Sushil"))
// @ts-ignore
dispatch(setAddress("Damauli"))
