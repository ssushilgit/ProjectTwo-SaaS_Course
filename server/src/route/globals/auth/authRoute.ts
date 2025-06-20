import  express, {Router}  from "express";
// import registerUser from "../../../controller/globals/auth/authController";
import authController from "../../../controller/globals/auth/authController";
const router:Router = express.Router()

router.route("/register").post(authController.registerUser)
router.route("/login").post(authController.loginUser)

export default router