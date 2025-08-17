import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITeacher, ITeacherInitialData } from "./teacherSlice.type";
import { Status } from "@/lib/types/type";

const initialState : ITeacherInitialData = {
    teacher : {
        teacherName : "",
        teacherEmail : "",
        teacherPhoneNumber : ""
    },
    status :Status.LOADING
}

const teacherSlice = createSlice({
    name : "teacherSlice",
    initialState : initialState,
    reducers : {
        setTeacher(state : ITeacherInitialData, action: PayloadAction<ITeacher>){
            state.teacher = action.payload
        },
        setStatus(state : ITeacherInitialData, action : PayloadAction<Status>){
            state.status =action.payload
        }
    } 
})

export const {setTeacher, setStatus} = teacherSlice.actions
export default teacherSlice.reducer
