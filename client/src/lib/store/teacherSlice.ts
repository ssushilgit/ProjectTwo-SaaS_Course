import { createSlice } from "@reduxjs/toolkit";

interface ITeacherInitialState {
    teacherName : string,
    teacherPassword : string
}

const teacherInitialState : ITeacherInitialState = {
        teacherName : "",
        teacherPassword : ""
    }

const teacherSlice = createSlice({
    name : "teacherSlice",
    initialState : teacherInitialState,
    reducers : {
        setTeacherName(state, action){
            state.teacherName = "haha"
        }, 
        setTeacherPassword(state,action){
            state.teacherPassword = "hehe"
        }
    } 
}) 

// const setTeacherName = teacherSlice.actions.setTeacherName
// const setTeacherPassword = teacherSlice.actions.setTeacherPassword
export const { setTeacherName, setTeacherPassword } = teacherSlice.actions;
export default teacherSlice.reducer;


// const teacherSlice = {
// createSlice functions always returns an object jaha vitra actions haru automatic generate vayerw aairako huncha 
// note : reducer ko name j xa , actions ko name pani smae tehi nahi huncha action invoke garne bitikai vitra reducer automatic call huncha 

/* 
FLOW 

reducers ---> action 
reducer --> communication --> action lai call garnu parxa 
jaile pani action call huncha, reducer hune hainw 

*/