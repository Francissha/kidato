
import { initialSignInForm, initialSignUpForm } from '@/config';
import { registerService } from '@/services';
import {createContext, useState} from 'react';

export const AuthContext = createContext(null);

export default function AuthProvider({children}){

    const [signInFormData, setSignInFormData]= useState(initialSignInForm);
    const [signUpFormData, setSignUpFormData]= useState(initialSignUpForm);

    async function handleRegisterUser(event){
        event.preventDefault;
        const data = await  registerService(signUpFormData);

        console.log(data);
        
    }

    return <AuthContext.Provider value={{
        signInFormData, setSignInFormData,
        signUpFormData, setSignUpFormData,
        handleRegisterUser
    }}>{children}</AuthContext.Provider>
}