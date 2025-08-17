// institute-course-slice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteTeacher, IInstituteTeacherInitialData } from "./institute-teacher-type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import APIWITHTOKEN from "@/lib/http/ApiWithToken";

const initialState : IInstituteTeacherInitialData = {
    teachers: [],
    status: Status.LOADING,
}

const instituteTeacherSlice = createSlice({
    name : "institute-teacher",
    initialState : initialState,
    reducers : {
        setStatus(state : IInstituteTeacherInitialData, action : PayloadAction<Status>){
            state.status = action.payload
        },
        setTeacher(state: IInstituteTeacherInitialData, action : PayloadAction<IInstituteTeacher>){
            state.teachers.push(action.payload)
        }
    }
})

export const {setStatus, setTeacher} = instituteTeacherSlice.actions
export default instituteTeacherSlice.reducer

export function createInstituteTeacher(data : IInstituteTeacher){
        return async function createInstituteTeacherThunk(dispatch:AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("institute/teacher",data,{
                headers : {
                    "Content-Type" : "multipart/form-data"
                }
            } )
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
            }else{
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
                dispatch(setStatus(Status.ERROR))
            
        }
    }
}

export function fetchInstituteTeacher(){
    return async function fetchInstituteTeacherThunk(dispatch : AppDispatch){
        try {
            const response = await APIWITHTOKEN.get("institute/teacher")
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                if(response.data.data > 0){
                response.data.data.length >0  && dispatch(setTeacher(response.data.data))
                }
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function deleteInstituteTeacherById(id:string){
    return async function deleteInstituteTeacherByIdThunk(dispatch : AppDispatch){
        try {
            const response = await APIWITHTOKEN.delete("institute/teacher/" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                // popout teacher of that id from slice too
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

