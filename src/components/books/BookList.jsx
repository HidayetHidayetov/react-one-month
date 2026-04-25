import React, { useEffect, useState } from 'react'
import { getBooks } from '../../hooks/books';
import { Link } from 'react-router-dom';
const BookList = () => {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(data => setBooks(data)).catch(err => console.log(err));
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Books</h2>
      <div className="overflow-hidden rounded-lg shadow-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {books.map(book => (
              <tr key={book.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{book.title}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">${book.price}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{book.author}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  <Link to={`/books/${book.id}`}>Show</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BookList