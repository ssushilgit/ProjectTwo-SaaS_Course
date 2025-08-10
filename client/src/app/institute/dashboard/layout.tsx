
// layout.tsx

import Dashboard from "@/lib/components/dashboard/Dashboard"

function InstituteDashboardLayout({children} : Readonly<{children : React.ReactNode}>){
    return(
        <>
        <Dashboard>
            {children}
        </Dashboard>
        </>
    )
}
export default InstituteDashboardLayout 

{/* courses.length > 0 && courses.map((course)=>{
                            return(
                                <select name = "courseId" id="">
                                    <option value={course.id}> {course.courseName} </option>
                                </select>
                            )
                        }) */}