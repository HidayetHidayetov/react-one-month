import React from 'react'
import { useForm } from 'react-hook-form';
import { handleSave } from '../../hooks/books';

const BookAdd = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data) {
    handleSave(data);
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Book</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input 
            type="text" 
            placeholder='Title' 
            {...register("title", { required: "Title is required" })} 
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
          />
          {errors.title && <p className='mt-1 text-sm text-red-500'>{errors.title.message}</p>}
        </div>
        <div>
          <input 
            type="text" 
            placeholder='Author' 
            {...register("author", { required: "Author is required" })} 
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
          />
          {errors.author && <p className='mt-1 text-sm text-red-500'>{errors.author.message}</p>}
        </div>
        <div>
          <input 
            type="number" 
            placeholder='Price' 
            {...register("price", { required: "Price is required" })} 
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' 
          />
          {errors.price && <p className='mt-1 text-sm text-red-500'>{errors.price.message}</p>}
        </div>
        <button type='submit' className='mt-2 bg-blue-600 text-white rounded-md py-2.5 px-4 font-medium hover:bg-blue-700 transition-colors'>
          Add Book
        </button>
      </form>
    </div>
  )
}

export default BookAdd