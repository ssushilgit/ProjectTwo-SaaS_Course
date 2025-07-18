import  express, {Router}  from "express";
import  {createCourseTable, createInstitute, createStudentTable, createTeacherTable, createCategoryTable } from "../../controller/institute/instituteController";
import isLoggedIn from "../../middleware/middleware";
import asyncErrorHandler from "../../services/asyncErrorHandler";

import {} from './../../middleware/multerMiddleware'
const router:Router = express.Router()


router.route("/").post(asyncErrorHandler(isLoggedIn), asyncErrorHandler(createInstitute), asyncErrorHandler(createTeacherTable), asyncErrorHandler(createStudentTable), asyncErrorHandler(createCategoryTable),  asyncErrorHandler(createCourseTable))

export default router