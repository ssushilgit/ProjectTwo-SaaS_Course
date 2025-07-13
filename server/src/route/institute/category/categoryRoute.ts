import  express, {Router}  from "express";
import isLoggedIn from "../../../middleware/middleware";
import asyncErrorHandler from "../../../services/asyncErrorHandler";
import { createCateory, deleteCategory, getCategory } from "../../../controller/institute/category/categoryController";
const router:Router = express.Router()


router.route("/")
    .post(isLoggedIn, asyncErrorHandler(createCateory))
    .get(isLoggedIn, asyncErrorHandler(getCategory))

router.route("/:id")
    .delete(isLoggedIn, asyncErrorHandler(deleteCategory))

export default router