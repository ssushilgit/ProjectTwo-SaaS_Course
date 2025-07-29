import { createSlice } from "@reduxjs/toolkit";
import { ITeacherInitialData } from "./teacherSlice.type";
import { Status } from "@/lib/types/type";

const initialState : ITeacherInitialData = {
    teacher : {
        teacherName : "",
        teacherAddress : "",
        teacherExpertise : "",
        teacherSalary : ""
    },
    status :Status.LOADING
}

createSlice({
    name : "teacherSlice",
    initialState : initialState,
    reducers : {

    } 
})