import { QueryTypes } from "sequelize";
import sequelize from "../../../database/connection";
import { IExtendedRequest } from "../../../middleware/type";
import { Response } from "express";
import generateRandomPassword from "../../../services/generateRandomPassword";
import sendMail from "../../../services/sendMail";

const createTeacher = async (req : IExtendedRequest, res : Response) =>{
    const instituteNumber = req.user?.currentInstituteNumber
    const {teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, joinedDate, salary, courseId } = req.body
    const teacherPhoto = req.file ? req.file.path : "https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-white-background-vector-illustration-106473768.jpg"
    if(!teacherName || !teacherEmail || !teacherPhoneNumber || !teacherExpertise || !joinedDate || !salary){
        return res.status(400).json({
            message : "Please provide teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, teacherSalary, teacherJoinedDate"
        })
    }
 
    // password generate function
    const data = generateRandomPassword(teacherName)
    const insertedData = await sequelize.query(`INSERT INTO teacher_${instituteNumber} 
        (teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, salary, joinedDate, teacherPhoto, teacherPassword)
        VALUES(?,?,?,?,?,?,?,?)`,{
            type : QueryTypes.INSERT,
            replacements : [teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, salary, joinedDate, teacherPhoto, data.hashedVersion]
        })

    const teacherData : {id:string}[]= await sequelize.query(`SELECT id FROM teacher_${instituteNumber} WHERE teacherEmail=?`,{
        type : QueryTypes.SELECT, 
        replacements : [teacherEmail]
    })
    // console.log(teacherData,"teacher data")
    await sequelize.query(`UPDATE course_${instituteNumber} SET teacherId=? WHERE id=?`,{
        type : QueryTypes.UPDATE,
        replacements : [teacherData[0].id,courseId]
    })

    // send mail function
    const mailInformation = {
        to : teacherEmail,
        subject : "Welcome to our SaaS MERN project",
        text : `Welcome xa hai, <b>Email</b> : ${teacherEmail} Password : ${data.plainVersion}, Your Institute Number : ${instituteNumber}`
    }
    await sendMail(mailInformation)


    res.status(200).json({
        message : "teacher created successfully"
    })   
}


const getTeachers = async(req:IExtendedRequest,res:Response)=>{
    const instituteNumber = req.user?.currentInstituteNumber; 
    const teachers = await sequelize.query(`SELECT * FROM teacher_${instituteNumber}`,{
        type : QueryTypes.SELECT
    })
    res.status(200).json({
        message : "teachers fetched", data:teachers
    })
}

const deleteTeacher = async(req:IExtendedRequest,res:Response)=>{
    const instituteNumber = req.user?.currentInstituteNumber; 
    const id = req.params.id
    await sequelize.query(`DELETE FROM teacher_${instituteNumber} WHERE id=?`,{
        type : QueryTypes.DELETE, 
        replacements : [id]
    })
    res.status(200).json({
        message : "delete Teacher successfully"
    })
}


export {createTeacher,getTeachers,deleteTeacher}

