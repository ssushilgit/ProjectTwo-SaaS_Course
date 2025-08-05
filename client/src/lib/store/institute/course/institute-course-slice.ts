// institute-course-slice.ts
import { Status } from "@/lib/types/type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../../store";
import {API} from "@/lib/http";

const initialState = {
    status :"",
    courses : [{
        courseName : "reactjs",
        coursePrice : "999",
        id : "1"
    } , {
        courseName : "nodejs",
        coursePrice : "999",
        id : "2"
    }]
}

const instituteCourseSlice = createSlice({
    name : "InstituteCourseSlice",
    initialState : initialState,
    reducers : {
        setStatus(state , action : PayloadAction<Status>){
            state.status = action.payload
        },
        setCourse(state , action : PayloadAction<any>){
            state.courses = action.payload
        },
        // to delete from frontend also
        setDeleteCourse(state, action : PayloadAction<string>){
            const index = state.courses.findIndex(course=>course.id = action.payload)
            if(index !== -1){
                state.courses.splice(index,1)
            }
        },
        setEditCourse(state, action : PayloadAction<any>){
            const id = action.payload.id
            const data = action.payload.data
            const index = state.courses.findIndex(course=>course.id = id)
            if(index !== -1){ // index vetena vane -1 auxa
                state.courses[index] = data
            }
        }
    }
})

export const{setStatus,setCourse, setDeleteCourse, setEditCourse} = instituteCourseSlice.actions
export default instituteCourseSlice.reducer 

export function createInstituteCourse(data:any){
    return async function createInstituteCourseThunk(dispatch:AppDispatch){
        try {
            const response = await API.post("institute/course", data)
            if(response.status === 200){
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

export function fetchInstituteCourse(){
    return async function fetchInstituteCoursethunk(dispatch:AppDispatch){
        try {
            const response = await API.get("institute/course")
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data > 0 && dispatch(setCourse(response.data.data))
            } else {
                dispatch(setStatus(Status.ERROR))
            } 
         } catch (error) {
            dispatch(setStatus(Status.ERROR))
         }
    }
}

export function deleteInstituteCourse(id:string){
    return async function deleteInstituteCoursethunk(dispatch:AppDispatch){
        try {
            const response = await API.delete("institute/course" + id)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setDeleteCourse(id))
            } else {
                dispatch(setStatus(Status.ERROR))
            } 
         } catch (error) {
            dispatch(setStatus(Status.ERROR))
         }
    }
}

export function editInstituteCourse(id:string, data:any){
    return async function editInstituteCoursethunk(dispatch:AppDispatch){
        try {
            const response = await API.patch("institute/course" + id, data)
            if(response.status === 200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setEditCourse({data : data, id : id}))
            } else {
                dispatch(setStatus(Status.ERROR))
            } 
         } catch (error) {
            dispatch(setStatus(Status.ERROR))
         }
    }
}
