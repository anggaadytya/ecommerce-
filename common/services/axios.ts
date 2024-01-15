import instance from "../libs/axios";



export const authServices = {
    registerAccount: (data:any)=>instance.post(`/auth/register`,data),
}