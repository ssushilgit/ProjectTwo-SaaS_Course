import { Request, Response } from "express";
import sequelize from "../../database/connection";
import generateRandomInstituteNumber from "../../services/generateRandomInstituteNumber";

     const createInstitute = async (req : Request, res: Response) =>{
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
        const instituteNuber = generateRandomInstituteNumber()

        await sequelize.query(`CREATE TABLE IF NOT EXISTS institute_${instituteNuber} (
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
        
        await sequelize.query(`INSERT INTO institute_${instituteNuber}(instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo) VALUES(?,?,?,?,?,?)` , {
            replacements : [instituteName, instituteEmail, institutePhoneNumber, instituteAddress, instituteVatNo, institutePanNo]
        })

        await sequelize.query(`CREATE TABLE teacher_${instituteNuber} (
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, 
            teacherName VARCHAR(255) NOT NULL, 
            teacherEmail VARCHAR(255) NOT NULL UNIQUE, 
            teacherPhoneNumber VARCHAR(255) NOT NULL UNIQUE
            )`)

        res.status(200).json({
            success : true,
            message : "Institute created !!!"
        })
    }


export default createInstitute