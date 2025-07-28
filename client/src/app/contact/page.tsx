import { useAppDispatch } from "@/lib/store/hooks"
import { setAddress, setName } from "@/lib/store/userSlice"

function contact(){
    let name  = "Sugam"
    let address = "Australia"
    const dispatch = useAppDispatch()
    dispatch(setName(name))
    dispatch(setAddress(address))
    return(
        <h1>HelloContact</h1>
    )
}

export default contact 