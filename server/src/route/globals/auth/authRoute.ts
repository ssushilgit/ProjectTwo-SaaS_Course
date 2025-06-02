import  express, {Router}  from "express";
// import registerUser from "../../../controller/globals/auth/authController";
import authController from "../../../controller/globals/auth/authController";
const router:Router = express.Router()

router.route("/register").post(authController.registerUser)

export default router