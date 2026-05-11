import React from 'react'
import { useForm } from 'react-hook-form';
import AppLayout from '../layouts/AppLayout';
import useAuth from '../hooks/useAuth';
const Login = () => {
    const { register, handleSubmit } = useForm();
    const { login } = useAuth();

    const onSubmit = (data) => {
        login(data.email, data.password);
    }

    return (
        <AppLayout>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 p-12'>
                <input type="email" placeholder="Email" {...register("email")} className='border-2 border-gray-300 rounded-md p-2 w-56' />
                <input type="password" placeholder="Password" {...register("password")} className='border-2 border-gray-300 rounded-md p-2 w-56' />
                <button type="submit" className='bg-blue-500 text-white p-2 rounded-md w-56'>Login</button>
            </form>
        </AppLayout>
    )
}

export default Login;