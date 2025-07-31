import { Status } from "@/lib/types/type"

export interface ITeacher{
    teacherName : string,
    teacherSalary : string,
    teacherExpertise :string,
    teacherAddress : string
}

export interface ITeacherInitialData {
    teacher : ITeacher,
    status : Status
} 