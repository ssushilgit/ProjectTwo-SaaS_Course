import { Status } from "@/lib/types/type";

export enum teacherExpertise {
    Beginner = "beginner",
    Intermediate = "intermediate",
    Expert = "expert"
}

export interface IIntituteTeacherCourse {
    courseName : string,
    coursePrice : string,
    courseThumbnail : string
}

export interface IInstituteTeacher{
    teacherName : string,
    teacherEmail : string,
    teacherPhoneNumber : string,
    teacherExpertise : teacherExpertise | null,
    teacherSalary : string,
    teacherJoinedDate : string,
    teacherPhoto :string,
}

interface IInstituteTeacherWithCourse extends IInstituteTeacher{
    course ?: IIntituteTeacherCourse
}

export interface IInstituteTeacherInitialData {
    teacher : IInstituteTeacherWithCourse,
    status : Status
}