// collect all slices and store

import { configureStore } from "@reduxjs/toolkit";
import authSlice from './auth/authSlice'
import instituteSlice from './institute/instituteSlice'
import teacherSlice from './teacher/teacherSlice'
import instituteCategorySlice from './institute/category/institute-category-slice'
import instituteCourseSlice from './institute/course/institute-course-slice'
import instituteTeacherSlice from './institute/teacher/institute-teacher-slice'

const store = configureStore({
    reducer : {
        auth : authSlice,
        institute : instituteSlice,
        teacher : teacherSlice,
        category : instituteCategorySlice,
        course : instituteCourseSlice,
        instituteTeacher : instituteTeacherSlice
    }
})

export default store

// dispatch ko type --> paxi kaam lagxa
// dispatch(setName()) --> dispatch() : AppDispatch

export type AppDispatch = typeof store.dispatch // useDispatch lai type dina chainxa
export type RootState = ReturnType<typeof store.getState> // useSelector lai type dina chainxa 