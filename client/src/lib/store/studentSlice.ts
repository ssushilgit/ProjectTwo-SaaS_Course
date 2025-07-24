import { createSlice } from "@reduxjs/toolkit";

interface IStudentInitialState {
    data : string
}

const studentInitialState : IStudentInitialState = {
    data : ""
}

const studentSlice = createSlice({
    name : "studentSlice",
    initialState : studentInitialState,
    reducers : {
        setData(state, action) {
            state.data = "Sushil"
        }
    }
}) 

// Export actions and reducer
export const { setData } = studentSlice.actions;
export default studentSlice.reducer;
