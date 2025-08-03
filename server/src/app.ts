import express from 'express'
const app = express()
app.use(express.json())

import authRoute from './route/globals/auth/authRoute'
import instituteRoute from './route/institute/instituteRoute'
import courseRoute from './route/institute/course/courseRoute'
import studentRoute from './route/institute/student/studentRoute'
import categoryRoute from './route/institute/category/categoryRoute'
import teacherInstituteRoute from './route/institute/teacher/teacherRoute'
import teacherRoute from './route/teacher/teacherRoute'
import cors from 'cors'

// cors config
app.use(cors({
    origin : "http://localhost:3000"
}))

// institute route
app.use("/api/auth", authRoute )
app.use("/api/institute", instituteRoute )
app.use("/api/institute/course", courseRoute)
app.use("/api/institute/student", studentRoute)
app.use("/api/institute/category",categoryRoute)
app.use("/api/institute/teacher", teacherInstituteRoute)

// teacher route
app.use("/api/teacher", teacherRoute) 
  
export default app