import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Footer from './components/Footer';
import NotFound from './pages/NotFound'
import Header from './components/Header';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
    <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <Routes>
      <Route path="/" element={<Home searchTerm={searchTerm} />} />
      <Route path="/products/category/:category" element={<Home searchTerm={searchTerm} />} />
      <Route path="/" element={<Home/>}></Route>
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
