import express, {Router} from "express"
import isLoggedIn from "../../../middleware/middleware"
import { createCourse, deleteCourse, getAllCourse, getSingleCourse } from "../../../controller/institute/course/courseController"
import asyncErrorHandler from "../../../services/asyncErrorHandler"

const router: Router = express.Router()

router.route("/")
    .post(isLoggedIn, asyncErrorHandler(createCourse))
    .get(asyncErrorHandler(getAllCourse))

router.route("/")
    .get(asyncErrorHandler(getSingleCourse))
    .delete(isLoggedIn, asyncErrorHandler(deleteCourse))

export default router