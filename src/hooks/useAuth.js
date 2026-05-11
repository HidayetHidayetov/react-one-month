import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        const users = await axios.get('http://localhost:3000/users');
        const user = users.data.find(user => user.email === email && user.password === password);
        if (user) {
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
            return true;
        } else {
            return false;
        }
    }

    const isLoggedIn = () => localStorage.getItem('user') ? true : false;

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }

    return { user, login, isLoggedIn, logout };
}

export default useAuth;