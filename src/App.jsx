import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Books from './pages/Books';
import BookShow from './components/books/BookShow';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/books" element={<Books />} />
      <Route path="/books/:id" element={<BookShow />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;