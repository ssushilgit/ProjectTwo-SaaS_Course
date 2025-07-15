import { QueryTypes } from "sequelize";
import sequelize from "../../../database/connection";
import { IExtendedRequest } from "../../../middleware/type";
import { Response } from "express";
import generateRandomPassword from "../../../services/generateRandomPassword";

const createTeacher = async (req : IExtendedRequest, res : Response) =>{
    const instituteNumber = req.user?.currentInstituteNumber
    const [teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, joinedDate, salary ] = req.body
    const teacherPhoto = req.file ? req.file.path : "https://thumbs.dreamstime.com/b/profile-anonymous-face-icon-gray-silhouette-person-male-default-avatar-photo-placeholder-white-background-vector-illustration-106473768.jpg"
    if(!teacherName || !teacherEmail || !teacherPhoneNumber || !teacherExpertise || !joinedDate || !salary){
        return res.status(400).json({
            message : "Please provide teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, teacherSalary, teacherJoinedDate"
        })
    }

    // password generate function
    const data = generateRandomPassword(teacherName)
    await sequelize.query(`INSERT INTO teacher_${instituteNumber} (teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, teacherSalary, teacherJoinedDate, teacherPhoto, teacherPassword) VALUES(?,?,?,?,?,?,?,?)`,{
        type : QueryTypes.INSERT,
        replacements : [teacherName, teacherEmail, teacherPhoneNumber, teacherExpertise, joinedDate, salary, teacherPhoto, data.hashedVersion]
    })

    // send mail function



    res.status(200).json({
        message : "teacher created successfully"
    })
}

export {createTeacher}