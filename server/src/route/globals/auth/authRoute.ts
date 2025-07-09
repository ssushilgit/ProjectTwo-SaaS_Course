import  express, {Router}  from "express";
// import registerUser from "../../../controller/globals/auth/authController";
import authController from "../../../controller/globals/auth/authController";
import asyncErrorHandler from "../../../services/asyncErrorHandler";
const router:Router = express.Router()

router.route("/register").post(asyncErrorHandler(authController.registerUser))
router.route("/login").post(asyncErrorHandler(authController.loginUser))

export default router