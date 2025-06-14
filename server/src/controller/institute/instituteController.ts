import { Request, Response } from "express";
import sequelize from "../../database/connection";
import generateRandomInstituteNumber from "../../services/generateRandomInstituteNumber";

interface IExtendedRequest extends Request{
    user?: {
        name : string, 
        age :number
    }
} 

     const createInstitute = async (req : IExtendedRequest, res: Response) =>{
        console.log(req.user && req.user.name, "Name from middleware")
        const {instituteName, instituteEmail, institutePhoneNumber, instituteAddress} = req.body
        const instituteVatNo = req.body.instituteVatNo || null
        const institutePanNo = req.body.institutePanNo || null

        if(!instituteName || !instituteEmail || !instituteAddress || !institutePhoneNumber){
            res.status(400).json({
                success : false, 
                message : "Please provide instituteName, instituteEmail, instituteAddress, institutePhoneNumber "
            })
            return
        }

        // aayo vane - institute create garna paryo  --> institute_123123, course_123123
        // for creating institute(name) table
        const instituteNumber = generateRandomInstituteNumber()

        await sequelize.query(`CREATE TABLE IF NOT EXISTS institute_${instituteNumber} (
                id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
                instituteName VARCHAR(255) NOT NULL,
                instituteEmail VARCHAR(255) NOT NULL UNIQUE, 
                institutePhoneNumber VARCHAR(255) NOT NULL UNIQUE,
                instituteAddress VARCHAR(255) NOT NULL,
                instituteVatNo VARCHAR(255),
                institutePanNo VARCHAR(255),
                createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`)
        
        await sequelize.query(`INSERT INTO institute_${instituteNumber}(instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo) VALUES(?,?,?,?,?,?)` , {
            replacements : [instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo]
        })

        res.status(200).json({
            message : "Institute created !!!"
        })
    }

    const createTeacherTable = async (req : Request, res : Response) =>{
        //  await sequelize.query(`CREATE TABLE teacher_${instituteNumber} (
        //     id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
        //     teacherName VARCHAR(255) NOT NULL, 
        //     teacherEmail VARCHAR(255) NOT NULL UNIQUE, 
        //     teacherPhoneNumber VARCHAR(255) NOT NULL UNIQUE
        // )`)
    }


export default createInstitute