import { Status } from "@/lib/types/type"

export interface ITeacher{
    teacherName : string,
    teacherEmail : string,
    teacherPhoneNumber : string
}

export interface ITeacherInitialData {
    teacher : ITeacher,
    status : Status
} 

export interface ITeacherPostData extends ITeacher{
    teacherExperience : string,
    teacherJoinedDate : string,
    teacherSalary : string,
    courseId : string,
    teacherPhoto : File | null
}