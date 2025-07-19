import jwt from 'jsonwebtoken'

const generateJWTToken = (data : {
    id : string,
    instituteNumber ?: string
}) =>{
     const token = jwt.sign(data, 'thisissecret', {
        expiresIn : "30d"
    })
}

export default generateJWTToken