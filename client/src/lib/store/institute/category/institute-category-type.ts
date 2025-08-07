import { Status } from "@/lib/types/type"

export interface IInstituteCategory {
    id : string,
    categoryName : string, 
    categoryDescription : string,
    createdAt : string
}

export interface IInstituteCategoryInitialData {
    category : IInstituteCategory[]
    status : Status
} 