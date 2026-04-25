import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import AppLayout from '../layouts/AppLayout';
const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [activities, setActivities] = useState([]);

    const onSubmit = (data) => {
        console.log(data);
    }


    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Activities')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setActivities(data);
            })
            .catch(err => {
                console.log(err);
            })

    }, []);

    return (
        <AppLayout>
            <form className='flex flex-col gap-2 p-12' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-2'>
                    <input {...register("name", { required: "Name is required" })} className={`${errors.name ? "border-red-500" : "border-gray-300"} border-2 rounded-md p-2 w-56`} placeholder='Name' />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    <input {...register("surname", { required: "Surname is required" })} className='border-2 border-gray-300 rounded-md p-2 w-56' placeholder='Surname' />
                    {errors.surname && <p className='text-red-500'>{errors.surname.message}</p>}
                    <input {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email" } })} className='border-2 border-gray-300 rounded-md p-2 w-56' placeholder='Email' />
                    {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    <input {...register("message", { minLength: { value: 10, message: "Message must be at least 10 characters" } })} className='border-2 border-gray-300 rounded-md p-2 w-56' placeholder='Message' />
                    {errors.message && <p className='text-red-500'>{errors.message.message}</p>}
                </div>
                <button type="submit" className='bg-blue-500 text-white rounded-md p-2 w-56'>Submit</button>

                {activities.map(activity => (
                    <div key={activity.id} className='border-2 border-gray-300 rounded-md p-2 w-56'>
                        <h3>{activity.title}</h3>
                        <p>{activity.id}</p>
                        <p>
                            <span className={`${activity.completed ? "bg-green-500" : "bg-red-500"} text-white rounded-md p-2 w-56`}>{activity.completed ? "Completed" : "Not Completed"}</span>
                        </p>
                    </div>
                ))}
            </form>
        </AppLayout>
    )
}

export default Contact;