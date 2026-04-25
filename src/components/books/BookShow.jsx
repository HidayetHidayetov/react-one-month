import React, { useEffect, useState } from 'react'
import { getBookById } from '../../hooks/books';
import { useParams, Link } from 'react-router-dom';
import Loading from '../Loading';

const BookShow = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getBookById(id)
            .then(data => setBook(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <Loading />;
    }

    if (!book) {
        return <div className="text-center mt-8 text-gray-600">Book not found</div>;
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <div className="flex justify-between items-center mb-6">
                <h2 className='text-2xl font-bold text-gray-800'>Book Details</h2>
                <Link to='/books' className='text-blue-600 hover:text-blue-800 text-sm font-medium'>← Back</Link>
            </div>
            <div className="space-y-4">
                <div className="pb-4 border-b border-gray-100">
                    <h3 className="text-sm text-gray-500 uppercase tracking-wide">Title</h3>
                    <p className="text-lg font-semibold text-gray-900 mt-1">{book.title}</p>
                </div>
                <div className="pb-4 border-b border-gray-100">
                    <h3 className="text-sm text-gray-500 uppercase tracking-wide">Author</h3>
                    <p className="text-gray-700 mt-1">{book.author}</p>
                </div>
                <div>
                    <h3 className="text-sm text-gray-500 uppercase tracking-wide">Price</h3>
                    <p className="text-xl font-bold text-blue-600 mt-1">${book.price}</p>
                </div>
            </div>
        </div>
    );
};

export default BookShow;