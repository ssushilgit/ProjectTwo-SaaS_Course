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
import bcrypt from "bcrypt"
import  jwt  from "jsonwebtoken"
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
        return
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

/* 
login flow
email/username, password (basic)
email, password --> data accept --> validation
first check whether email exist or not (verification) --> yes then check password now --> milyo vane token generation(jsonwebtoken) --> token generate vayena vane kolle login garyo tha hunna

google login, fb, github login (oauth)
email login
*/


class AuthController{
    static async registerUser(req:  Request, res: Response){
    if(req.body == undefined){
        // console.log(req.body)
        res.status(400).json({
            message : "No data found"
        })
        return
    }

    const {username, password, email} = req.body
    if(!username || !password || !email){
        res.status(404).json({
            success : false, 
            message : "All fields are require !!!"
        })
        return
    } 
    // insert into users table
    await User.create({
        username : username,
        password : bcrypt.hashSync(password,12),
        email : email
        // role vayo vane bola - broken object authorization attack auxa
    })
    res.status(200).json({
        success : true,
        message : "User registered successfully"
    })
    }

    static async loginUser(req : Request, res : Response){
        const  {email, password } = req.body
        if(!email || !password){
            res.status(404).json({
                success : false,
                message : "Please provide email and password"
            })
            return
        }

        // check if email exist in users table
        // kunai pani table bata sabai data nikalyo vane array ko format ma auxa tara euta matra specific data nikalyo vane object ko form ma auxa
        const data = await User.findAll({
            where : {
                email : email
            }
        })
        if(data.length ==0){
            res.status(404).json({
                success : false,
                message : "Not registered!"
            })
        }else{
            // check password, password lai hash ma convert garna parxa, duita hash lai compare garna parxa
            // bcrypt.compareSync(plain password jun user bata ako, hashed password jun register huda vako thyo)
            const isPasswordMatch = bcrypt.compareSync(password, data[0].password)
            if(isPasswordMatch){
                // password match vaayo vane, login vayo, token generate vayo - token vaneko user ko identity ho jun ma chai user ko kehi unique kura lukeko hunxa - token generate vayesi frontend lai dinxa
                const token = jwt.sign({id : data[0].id}, "thisissecret",{
                    expiresIn :"90d"
                })
                res.json({
                    token : token
                })

            } else {
                res.status(403).json({
                    success : false, 
                    message : "Invalid email or pasword!"
                })
            }
            
        }

    }
}

// export default registerUser
export default AuthController


