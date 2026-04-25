import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const Activities = () => {

    const [activities, setActivities] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingActivity, setEditingActivity] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    useEffect(() => {
        axios.get('http://localhost:3000/activities')
        .then(res => {
            setActivities(res.data);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            console.log('Activities fetched');
        })
    }, []);

    const onSubmit = (data) => {
        axios.post('http://localhost:3000/activities', data)
        .then(res => {
            setActivities([...activities, res.data]);
        })
        .catch(err => {
            console.log(err);
        })
    }
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3000/activities/${id}`)
        .then(res => {
            setActivities(activities.filter(activity => activity.id !== id));
        })
        .catch(err => {
            console.log(err);
        })
    }
    const handleEdit = (activity) => {
        setEditingActivity(activity);
        setIsModalOpen(true);
    }

    const handleUpdate = (data) => {
        axios.put(`http://localhost:3000/activities/${editingActivity.id}`, data)
        .then(res => {
            setActivities(activities.map(activity => activity.id === editingActivity.id ? res.data : activity));
            setIsModalOpen(false);
            setEditingActivity(null);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingActivity(null);
    }

  return (
      <div>
          <h1 className='text-2xl font-bold text-center'>Activities</h1>

          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 p-12'>
              <input type="text" placeholder='Title' {...register("title")} className='border-2 border-gray-300 rounded-md p-2 w-56'    />
              <input type="text" placeholder='Description' {...register("description")} className='border-2 border-gray-300 rounded-md p-2 w-56' />
              <input type="checkbox" placeholder='Completed' {...register("completed")} className='border-2 border-gray-300 rounded-md p-2 w-56' />
              <button type='submit' className='bg-blue-500 text-white rounded-md p-2 w-56'>Add Activity</button>
          </form>

          <table className='border-2 border-gray-300 rounded-md p-2 '>
              <thead className='border-2 border-gray-300 rounded-md p-2 w-56'>
                  <tr>
                      <th>Title</th>
                      <th>ID</th>
                      <th>Completed</th>
                  </tr>
              </thead>
              <tbody className='border-2 border-gray-300 rounded-md p-2 w-56'>
                  {activities.map((activity, index) => (
                      <tr key={index}>
                        <td className='border-2 border-gray-300 rounded-md p-2 w-56'>{activity.title}</td>
                        <td className='border-2 border-gray-300 rounded-md p-2 w-56'>{activity.id}</td>
                        <td className={`${activity.completed ? 'bg-green-500' : 'bg-red-500'} text-white rounded-md p-2 w-56`}>{activity.completed ? 'Completed' : 'Not Completed'}</td>
                          <td className='border-2 border-gray-300 rounded-md p-2 w-56'>
                              <button className='bg-blue-500 text-white rounded-md p-2 w-56' onClick={() => handleEdit(activity)}>Edit</button>
                              <button className='bg-red-500 text-white rounded-md p-2 w-56' onClick={() => handleDelete(activity.id)}>Delete</button>
                        </td>
                      </tr>
                  ))}
</tbody>
           </table>

           {isModalOpen && (
               <div className="fixed inset-0 bg-red-300 bg-opacity-50 flex items-center justify-center z-50">
                   <div className="bg-white p-6 rounded-lg shadow-xl w-96">
                       <h2 className="text-xl font-bold mb-4">Edit Activity</h2>
                       <form onSubmit={handleSubmit(handleUpdate)} className="flex flex-col gap-3">
                           <input 
                               type="text" 
                               placeholder='Title' 
                               {...register("title", { required: true })} 
                              defaultValue={editingActivity?.title}
                              value={editingActivity?.title}
                               className='border-2 border-gray-300 rounded-md p-2' 
                           />
                           <input 
                               type="text" 
                               placeholder='Description' 
                               {...register("description")} 
                              defaultValue={editingActivity?.description}
                              value={editingActivity?.description}
                               className='border-2 border-gray-300 rounded-md p-2' 
                           />
                           <label className="flex items-center gap-2">
                               <input 
                                   type="checkbox" 
                                   {...register("completed")} 
                                   defaultChecked={editingActivity?.completed}
                                   checked={editingActivity?.completed}
                               />
                               <span>Completed</span>
                           </label>
                           <div className="flex gap-2 mt-2">
                               <button type="submit" className="bg-green-500 text-white rounded-md p-2 flex-1">Update</button>
                               <button type="button" onClick={handleCloseModal} className="bg-gray-500 text-white rounded-md p-2 flex-1">Cancel</button>
                           </div>
                       </form>
                   </div>
               </div>
           )}
     </div>
  )
}

export default Activities