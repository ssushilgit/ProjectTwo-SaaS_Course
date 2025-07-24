// collect all slices and store

import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import studentSlice from './studentSlice'
import teacherSlice from './teacherSlice'

const store = configureStore({
    reducer : {
        userSlice : userSlice,
        studentSlice : studentSlice,
        teacherSlice : teacherSlice
    }
})

export default store

// dispatch ko type --> paxi kaam lagxa
// dispatch(setName()) --> dispatch() : AppDispatch
export  type AppDispatch = typeof store.dispatch