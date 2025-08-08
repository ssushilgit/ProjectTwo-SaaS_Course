import { Status } from "@/lib/types/type"

export interface IInstituteCategoryAddData {
    categoryName : string, 
    categoryDescription : string,
}

export interface IInstituteCategory extends IInstituteCategoryAddData{
    id : string,
    createdAt : string
}

export interface IInstituteCategoryInitialData {
    category : IInstituteCategory[]
    status : Status
} 