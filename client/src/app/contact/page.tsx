import { setAddress, setName } from "@/lib/store/userSlice"
import { useDispatch } from "react-redux"

function contact(){
    let name  = "Sugam"
    let address = "Australia"
    const dispatch = useDispatch()
    dispatch(setName(name))
    dispatch(setAddress(address))
    return(
        <h1>HelloContact</h1>
    )
}

export default contact