import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInstituteCategory, IInstituteCategoryInitialData } from "./institute-category-type";
import { Status } from "@/lib/types/type";
import { AppDispatch } from "../../store";
import { APIWITHTOKEN } from "@/lib/http";

const initialState : IInstituteCategoryInitialData = {
    category : [],
    status : Status.LOADING
}

const instituteCategorySlice = createSlice({
    name : "institute-category",
    initialState : initialState,
    reducers : {
        setStatus(state : IInstituteCategoryInitialData, action : PayloadAction<Status>  ){
            state.status = action.payload
        },
        setCategory(state : IInstituteCategoryInitialData , action : PayloadAction<IInstituteCategory[]>){
            state.category = action.payload
        },
        setCategoryDelete(state : IInstituteCategoryInitialData, action : PayloadAction<string>){
            const categoryId = action.payload
            const index = state.category.findIndex((category)=>category.id == categoryId)
            if(index !== -1){
                state.category.splice(index,1)
                }
            }
    }
})

export const {setStatus, setCategory, setCategoryDelete} = instituteCategorySlice.actions
export default instituteCategorySlice.reducer

export function fetchCategories(){
    return async function fetchCategoriesThunk(dispatch : AppDispatch){
        try {
            const response = await APIWITHTOKEN.get("institute/category")
            if(response.status ===200){
                dispatch(setStatus(Status.SUCCESS))
                response.data.data.length > 0 && dispatch(setCategory(response.data.data))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}

export function addCategories(data: IInstituteCategory){
    return async function addCategoriesThunk(dispatch : AppDispatch){
        try {
            const response = await APIWITHTOKEN.post("institute/category", data)
            if(response.status ===200){
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

export function deleteCategories(id:string){
    return async function deleteCategoriesThunk(dispatch : AppDispatch){
        try {
            const response = await APIWITHTOKEN.delete("institute/category/" + id)
            if(response.status ===200){
                dispatch(setStatus(Status.SUCCESS))
                dispatch(setCategoryDelete(id))
            } else {
                dispatch(setStatus(Status.ERROR))
            }
        } catch (error) {
            console.log(error)
            dispatch(setStatus(Status.ERROR))
        }
    }
}