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
    id : string,
    teacherName : string,
    teacherEmail : string,
    teacherPhoneNumber : string,
    teacherExperience : string,
    teacherSalary : string,
    teacherJoinedDate : string,
    teacherPhoto :File | null,
    courseId : string
}

interface IInstituteTeacherWithCourse extends IInstituteTeacher{
    course ?: IIntituteTeacherCourse
}

export interface IInstituteTeacherInitialData {
    teachers : IInstituteTeacherWithCourse[],
    status : Status
}

