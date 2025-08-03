import { Status } from "@/lib/types/type";

export interface IInstituteCourse{
     id: string,
     courseName :string,
     coursePrice : string
}

export interface IInstituteCourseInitialData {
    status : Status,
    courses : IInstituteCourse[]
}