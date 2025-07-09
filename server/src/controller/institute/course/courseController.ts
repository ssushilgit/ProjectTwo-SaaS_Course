import { Request, Response } from "express";
import sequelize from "../../../database/connection";
import { IExtendedRequest } from "../../../middleware/type";

const createCourse = (req: IExtendedRequest, res: Response) =>{
    const instituteNumber = req.user?.currentInstituteNumber
    const {courseName, coursePrice, courseDescription, courseDuration, courseLevel} = req.body
    if(!courseName || !coursePrice || !courseDescription || !courseDuration || !courseLevel ) {
        return res.status(401).json({
            message : "Please provide courseName, coursePrice, courseDescription, courseDuration, courseLevel"
        })
    }  
    
    const courseThumbnail = ""

    const returnedData = sequelize.query(`INSERT INTO course_${instituteNumber}(courseName, coursePrice, courseDescription, courseDuration, courseLevel, courseThumbnail) VALUES(?,?,?,?,?,?)`,{
        replacements : [courseName, coursePrice, courseDescription, courseDuration, courseLevel, courseThumbnail || "https://digitalpathshalanepal.com/image/hello.png" ]
    })
    console.log(returnedData)
    res.status(200).json({
        message : "Course created successfully",
        data : returnedData
    })
}

const deleteCourse = async(req: IExtendedRequest, res: Response) =>{
    const instituteNumber = req.user?.currentInstituteNumber
    const courseId = req.params.id
    // first check if course exist or not, if exist then delete else not delete
    const [courseData] = await sequelize.query(`SELECT * FROM course_${instituteNumber} where id = ?`, {
        replacements : [courseId]
    })
    if(courseData.length == 0){
        return res.status(404).json({
            message : "No course with that id"
        })
    }

    await sequelize.query(`DELETE FROM course_${instituteNumber} WHERE id = ?`, {
        replacements : [courseId]
    })
    res.status(200).json({
        message : "Course deleted successfully"
    })
}

const getAllCourse = async(req:IExtendedRequest, res: Response) =>{
    const instituteNumber = req.user?.currentInstituteNumber
    const courses = await sequelize.query(`SELECT * FROM course_${instituteNumber}`)
    res.status(200).json({
        message : "All courses fetched",
        data : courses
    })
}


const getSingleCourse = async (req: IExtendedRequest, res: Response) =>{
    const instituteNumber =req.user?.currentInstituteNumber
    const courseId =req.params.id
    const course = await sequelize.query(`SELECT * FROM course_${instituteNumber} WHERE id = ?`,{
        replacements : [courseId]
    })
    res.status(200).json({
        message : "Single course fetched",
        data : course
    })

}
export {createCourse, deleteCourse, getAllCourse, getSingleCourse}