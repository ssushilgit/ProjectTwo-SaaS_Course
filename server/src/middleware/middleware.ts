import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import User from "../database/models/user.model";
// import { IExtendedRequest } from "./type";

interface IExtendedRequest extends Request{
    user ?: {
        id : string,     
        currentInstituteNumber : string
    },
    instituteNumber ?: number | string
}
 
const isLoggedIn = async (req:IExtendedRequest,res:Response,next:NextFunction)=>{
    // check if login or not 
    // token accept 
    const token = req.headers.authorization //jwt eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30

    if(!token){
        res.status(401).json({
            message : "please provide token"
        })
        return
        
    }
    // verify garne 
    jwt.verify(token,'thisissecret',async (error,result : any)=>{
        if(error){
            res.status(403).json({
                message : "Token invalid vayooo"
            })
        }else{
            // verified vayo 

            //    const userData = await User.findAll({
            //         where : {
            //             id : resultaayo.id
            //         }
            //     })
            const userData = await User.findByPk(result.id, {
                attributes : ['id', 'currentInstituteNumber']
            })

            /*
                userData = {
                    id : "",
                    currentInstituteNumber : ""
                }
            */
            if(!userData){
                res.status(403).json({
                    message : "No user with that id, invalid token "
                })
            }else{
                req.user = userData
                next()
            }
        }
    })
}

export default isLoggedIn

// class Middleware {
//     static isLoggedIn(req: IExtendRequest, res:Response, next: NextFunction){
//         // check if logged in or not
//         // token accept
//         // console.log("isLoggedIn triggered")
//         const name = "Sushil Shrestha"
//         const token = req.headers.authorization
//         // console.log(token)
//         // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
//         if(!token){
//             res.status(401).json({
//                 message : "Please provide token"
//             })
//             return
//         }

//         // verify garne
//         jwt.verify(token, "thisissecret", async (error, result : any)=>{
//             if(error){
//                 res.status(403).json( {
//                     message : "Token Invalid!"
//                 })
//             } else {
//                 // verify vayo

//                 // console.log(result, "result")
//                 // const userData = await User.findAll({
//                 //     where : {
//                 //         id : result
//                 //     }
//                 // })
//                 const userData = await User.findByPk(result.id)
//                 if(!userData){
//                     res.status(404).json({
//                         message : "No user with that id, invalid token"
//                     })
//                 } else {
//                     req.user.name = name,
//                     req.user.age = 24
//                 }
//             }
//         })
//         next() // next lekhepaxi instituteRoute.ts ma arko function trigger hunxa
//     }

// }

// export default Middleware