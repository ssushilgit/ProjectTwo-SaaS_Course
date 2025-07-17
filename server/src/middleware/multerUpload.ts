import multer from 'multer'
import { Request } from 'express'
import {cloudinary, storage} from './../services/cloudinaryConfig'
const upload = multer({storage : storage , 

    fileFilter : (req:Request, file:Express.Multer.File, cb:any)=>{
        const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg']
        if(allowedFileTypes.includes(file.mimetype)){
            cb(null, true)
        } else {
            cb(new Error("Only image supported!!!")) 
        }
    },
    limits : {
        fileSize : 8 * 1024 * 1024
    }
})

export default upload