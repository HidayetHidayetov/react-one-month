import React from 'react'
import BookAdd from '../components/books/BookAdd'
import BookList from '../components/books/BookList'
import AppLayout from '../layouts/AppLayout'

const Books = () => {
    return (
        <AppLayout>
            <BookAdd />
            <BookList />
        </AppLayout>
    )
}

export default Books