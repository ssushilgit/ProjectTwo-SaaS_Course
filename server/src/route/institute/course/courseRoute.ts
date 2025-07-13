import express, {Request, Router} from "express"
import isLoggedIn from "../../../middleware/middleware"
import { createCourse, deleteCourse, getAllCourse, getSingleCourse } from "../../../controller/institute/course/courseController"
import asyncErrorHandler from "../../../services/asyncErrorHandler"
const router: Router = express.Router()

// for local storage
// import {multer, storage} from './../../../middleware/multerMiddleware'
// const upload = multer({storage : storage})

// for cloudinary
import {cloudinary, storage} from './../../../services/cloudinaryConfig'
import multer from 'multer'
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

// fieldname - frontend/postman bata chai k naam ma aairaxa file tesko naam
router.route("/")
    .post(isLoggedIn, upload.single('courseThumbnail'), asyncErrorHandler(createCourse))
    .get(isLoggedIn, asyncErrorHandler(getAllCourse))

router.route("/")
    .get(isLoggedIn, asyncErrorHandler(getSingleCourse))
    .delete(isLoggedIn, asyncErrorHandler(deleteCourse))

export default router