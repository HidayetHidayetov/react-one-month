import axios from 'axios';

export async function getBooks() {
    const response = await axios.get('http://localhost:3000/books')
    return response.data;
}

export async function getBookById(id) {
    const response = await axios.get(`http://localhost:3000/books/${id}`)
    return response.data;
}

export function handleSave(data) {
    axios.post('http://localhost:3000/books', data)
    .then(res => {
        console.log(res);
        alert('Book added successfully');
    })
    .catch(err => {
        console.log(err);
        alert('Book addition failed');
    })
}