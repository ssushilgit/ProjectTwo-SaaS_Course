
import express, { Router } from "express"
import asyncErrorHandler from "../../../services/asyncErrorHandler"
import isLoggedIn from "../../../middleware/middleware"
import { createTeacher } from "../../../controller/institute/teacher/teacherController"

const router:Router = express.Router()

router.route("/")
    .post(isLoggedIn, asyncErrorHandler(createTeacher))

export default router