import React, { useContext } from 'react'
import AppLayout from '../layouts/AppLayout';
import UserContext from '../contexts/UserContext';
import useCount from '../hooks/useCount';

const Home = () => {
    const user = useContext(UserContext);
    const { count, increment, decrement, reset } = useCount();
    return (
        <AppLayout>
            <div>Home : Hello {user.name} {user.age}</div>
            <div>Count: {count}</div>
            <button onClick={increment} className='bg-blue-500 text-white p-2 rounded-md'>Increment</button>
            <button onClick={decrement} className='bg-red-500 text-white p-2 rounded-md'>Decrement</button>
            <button onClick={reset} className='bg-gray-500 text-white p-2 rounded-md'>Reset</button>
        </AppLayout>
    )
}

export default Home