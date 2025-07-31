import { Status } from "@/lib/types/type"

export interface IAuth {
    username : string,
    password : string
}
export interface IRegisterData extends IAuth {
    email :string
}

export interface IAuthInitialData{
    user : IAuth,
    status : Status
}