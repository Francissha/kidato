import axiosInstance from "@/api/axiosinstance";

export async function registerService(formData){
        const { data }= await axiosInstance.post('/auth/register',{
        ...formData,
        role:'user'
    });

        return data;
    }


export async function loginService(formData){
        const { data }= await axiosInstance.post('/auth/login',formData)

        return data;
    }


export async function checkAuth(){
        const { data }= await axiosInstance.get('/auth/check-auth',formData)

        return data;
    }