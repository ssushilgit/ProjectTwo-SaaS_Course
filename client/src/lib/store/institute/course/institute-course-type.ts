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

export interface IInstituteCoursePostData {
    courseName : string,
    courseDescription : string,
    coursePrice : string,
    courseDuration : string,
    courseThumbnail : File | null,
    courseLevel :string,
    categoryId : string
}