import app from "./src/app";
import dotenv from 'dotenv'
dotenv.config()


import "./src/database/connection"
function startServer(){
    const port = process.env.PORT
    app.listen(port, function(){
        console.log(`Server has started at port ${port}`)
    })
}

startServer()