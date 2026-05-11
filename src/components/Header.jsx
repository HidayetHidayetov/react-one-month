import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
const Header = () => {
    const { isLoggedIn, logout } = useAuth();
    return (
        <header className='bg-gray-800 text-white p-4'>
            <nav>
                <ul className='flex gap-4 items-center'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/books">Books</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {isLoggedIn() ? <li><Link onClick={logout}>Logout</Link></li> : <li><Link to="/login">Login</Link></li>}
                </ul>
            </nav>
        </header>
    )
}

export default Header