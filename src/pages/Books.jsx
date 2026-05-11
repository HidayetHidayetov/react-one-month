import React from 'react'
import BookAdd from '../components/books/BookAdd'
import BookList from '../components/books/BookList'
import AppLayout from '../layouts/AppLayout'
import themeStore from '../stores/themeStore'

const Books = () => {
    const { theme, toggleTheme } = themeStore();

    return (
        <AppLayout>
            <div>Theme: {theme}</div>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <BookAdd />
            <BookList />
        </AppLayout>
    )
}

export default Books