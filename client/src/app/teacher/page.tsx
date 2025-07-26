import { useAppSelector } from "@/lib/store/hooks"
// import { useSelector } from "react-redux"

function Teacher(){
    // @ts-ignore
    const data = useAppSelector((store)=>store.teacher.teacherPassword)
    return(
        <h2>This is teacher page</h2>
    )
}

export default Teacher