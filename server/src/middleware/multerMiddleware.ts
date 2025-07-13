// multer configuration
import { Request } from "express";
import multer from "multer";

// storing file locally
const storage = multer.diskStorage({
    // incoming file kata rakhne vanne ho
    // cb   - callback function
    destination : function(req: Request, file: Express.Multer.File, cb: any){
        cb(null, './src/storage') // cb(error ayo vane k garne, success vayo vane k garne )

    },
    // mathi ko location deko ma rakhey paxi , k name ma rakhne vanne 
    filename : function(req: Request, file: Express.Multer.File, cb: any){
        cb(null, Date.now() + "-" + file.originalname)
    }
})

/* 
    hello.pdf --> multer --> location(src/storage/) --> 2025-hello.pdf
    hello.pdf --> multer --> location(storage) --> hello-123.png 
*/

export {multer, storage}