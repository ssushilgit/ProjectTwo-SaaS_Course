import express, {Request, Router} from "express"
import isLoggedIn from "../../../middleware/middleware"
import { createCourse, deleteCourse, getAllCourse, getSingleCourse } from "../../../controller/institute/course/courseController"
import asyncErrorHandler from "../../../services/asyncErrorHandler"
const router: Router = express.Router()

// for local storage
// import {multer, storage} from './../../../middleware/multerMiddleware'
// const upload = multer({storage : storage})

// for cloudinary
import upload from "../../../middleware/multerUpload"

// fieldname - frontend/postman bata chai k naam ma aairaxa file tesko naam
router.route("/")
    .post(isLoggedIn, upload.single('courseThumbnail'), asyncErrorHandler(createCourse))
    .get(isLoggedIn, asyncErrorHandler(getAllCourse))

router.route("/")
    .get(isLoggedIn, asyncErrorHandler(getSingleCourse))
    .delete(isLoggedIn, asyncErrorHandler(deleteCourse))

export default router