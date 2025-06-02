/*
REGISTER / SIGNUP
incoming data --> username, email, password
processing/checking --> email validation, compulsary data should be fetched
db query --> table ma insert/read/update/delete

LOGIN / SIGNIN
LOGOUT
FORGOT PASSWORD
RESET PASSWORD / OTP
*/


import { Request , Response} from "express"
import User from "../../../database/models/user.model"
// json data --> req.body --> username, email, pasword
//files --> req.files --> image, files
const registerUser = async (req : Request, res : Response) =>{
    // const username = req.body.username
    // const password = req.body.password
    // const email = req.body.email

    const {username, password, email} = req.body
    if(!username || !password || !email){
        res.status(404).json({
            success : false, 
            message : "All fields are require !!!"
        })
    } 
    // insert into users table
    await User.create({
        username : username,
        password : password,
        email : email
        // role vayo vane bola - broken object authorization attack auxa
    })
    res.status(200).json({
        success : true,
        message : "User registered successfully"
    })
}


class AuthController{
    static async registerUser(req:  Request, res: Response){
        const {username, password, email} = req.body
    if(!username || !password || !email){
        res.status(404).json({
            success : false, 
            message : "All fields are require !!!"
        })
    } 
    // insert into users table
    await User.create({
        username : username,
        password : password,
        email : email
        // role vayo vane bola - broken object authorization attack auxa
    })
    res.status(200).json({
        success : true,
        message : "User registered successfully"
    })
    }
}


// export default registerUser
export default AuthController

