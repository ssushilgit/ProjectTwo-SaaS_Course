import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { fetchInstituteCourse } from "@/lib/store/institute/course/institute-course-slice"
import { createInstituteTeacher } from "@/lib/store/institute/teacher/institute-teacher-slice"
import { IInstituteTeacher } from "@/lib/store/institute/teacher/institute-teacher-type"
import { Status } from "@/lib/types/type"
import { ChangeEvent, useEffect, useState } from "react"

interface ICloseModal{
    closeModal : ()=> void
}

const TeacherModal:React.FC<ICloseModal>=({closeModal})=>{
    const { courses } = useAppSelector(store => store.course);
    console.log("Courses in component:", courses);
    const dispatch = useAppDispatch()   
    const {status} = useAppSelector((store)=>store.teacher)
    const [teacherData, setTeacherData] = useState<IInstituteTeacher>({
        courseId : "",
        teacherName : "",
        teacherEmail : "",
        teacherExperience : "",
        teacherJoinedDate : "", 
        teacherPhoneNumber : "",
        teacherSalary : "",
        teacherPhoto : null ,
        id : ""
    })

    const handleTeacherChange = (e :ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>{
        const {name, value} = e.target
        setTeacherData({
            ...teacherData,
            // @ts-ignore
            [name] : name === "teacherPhoto" ? e.target.files[0] : value
        })
    }

    const handleTeacherSubmission = async (e:ChangeEvent<HTMLFormElement>) =>{
        e.preventDefault()
        await dispatch(createInstituteTeacher(teacherData))
        if(status === Status.SUCCESS){
            closeModal()
        }
        console.log("Teacher data sending", teacherData)
    }

    useEffect(()=>{
        dispatch(fetchInstituteCourse())
    },[] )

    return(
        <div id="modal" className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="fixed inset-0 bg-black/50" />
        <div className="relative w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-lg shadow-xl">
            <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Create Teacher</h3>
            <button onClick={closeModal} id="closeModalButton" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </button>
            </div>


            <form onSubmit={handleTeacherSubmission} className="space-y-4">
            <div>
                <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Name</label>
                <input onChange={handleTeacherChange} name="teacherName" type="text" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="Sushil Shrestha " required />
            </div>
            <div>
                <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Email</label>
                <input onChange={handleTeacherChange} name="teacherEmail" type="email" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="shresthasushil741@gmail.com" required />
            </div>
            <div>
                <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Photo</label>
                <input onChange={handleTeacherChange} name="teacherPhoto" type="file" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="shresthasushil741@gmail.com   " required />
            </div>
                 <div>
                    <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Phone Number</label>
                    <input onChange={handleTeacherChange} name="teacherPhoneNumber" type="text" id="website_url" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="9********* " required />
                </div>
            <div className="flex justify-between">
                <div>
                    <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Experience</label>
                    <input onChange={handleTeacherChange} name="teacherExperience" type="text" id="website_url" className="w-45 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="2 years " required />
                </div>
                <div>
                    <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Joined Date</label>
                    <input onChange={handleTeacherChange} name="teacherJoinedDate" type="date" id="website_url" className="w-50 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="28/06/2024 " required />
                </div>
            </div>            
            <div className="flex justify-between">
                <div>
                    <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Salary</label>
                    <input onChange={handleTeacherChange} name="teacherSalary" type="text" id="website_url" className="w-45 mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500" placeholder="45000 " required />
                </div>
                <div>
                    <label htmlFor="website_url" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Teacher Course</label>
                    <select onChange={handleTeacherChange} name ="courseId" id="">
                    {
                         courses.length > 0 && courses.map((course, index)=>{
                            return(
                                    <option className="bg-amber-950" key={`${course.id}-${index}`} value={course.id}> {course.courseName} </option>
                                )
                            }) 
                    }
                    </select>
                </div>
            </div>
            
            <div className="flex justify-end gap-3">
                <button onClick={closeModal} id="cancelButton" className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-600">
                Cancel
                </button>
                <button id="submitUrlButton" className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 dark:from-indigo-500 dark:to-violet-500 dark:hover:from-indigo-600 dark:hover:to-violet-600">
                Create
                <svg className="h-4 w-4 inline-block ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button>
            </div>
            </form>
        </div>
        </div>

    )
}

export default TeacherModal