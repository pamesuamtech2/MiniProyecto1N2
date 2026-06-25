import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import SearchBar from './SearchBar';

export default function Header({ searchTerm, setSearchTerm }) {
  const { cart, removeFromCart } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between relative">
        
        {/* LOGO */}
        <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900 flex items-center gap-2">
          <span className="text-blue-600 text-2xl">🛍️</span> LUXE.
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex gap-6 font-medium text-sm text-gray-500">
          <Link to="/products/category/electronics" className="hover:text-black">Electronics</Link>
          <Link to="/products/category/jewelery" className="hover:text-black">Jewelry</Link>
          <Link to="/products/category/men's clothing" className="hover:text-black">Men's</Link>
          <Link to="/products/category/women's clothing" className="hover:text-black">Women's</Link>
        </nav>

        {/* BUSCADOR */}
        <div className="hidden md:block w-1/3">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {/* ICONOS */}
        <div className="flex items-center gap-5 text-gray-600 text-xl">
          <button className="hover:text-black transition-colors">🤍</button>
          
          {/* BOTÓN DEL CARRITO INTERACTIVO */}
          <div className="relative">
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="hover:text-black transition-colors relative"
            >
              🛒
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            </button>

            {/* MENÚ DESPLEGABLE (DROPDOWN) DEL CARRITO */}
            {isCartOpen && (
              <div className="absolute right-0 mt-3 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 p-4 max-h-96 overflow-y-auto">
                <h3 className="text-sm font-bold text-gray-900 border-b pb-2 mb-3">Tu Carrito</h3>
                
                {cart.length === 0 ? (
                  <p className="text-sm text-gray-400 text-center py-4">El carrito está vacío 🫙</p>
                ) : (
                  <div className="flex flex-col gap-3">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between gap-2 border-b pb-2">
                        <img src={item.image} alt={item.title} className="w-10 h-10 object-contain bg-white p-1 rounded" />
                        <div className="flex-grow min-w-0">
                          <p className="text-xs font-semibold text-gray-800 truncate">{item.title}</p>
                          <p className="text-xs text-green-600 font-bold">${item.price}</p>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-red-500 text-sm p-1"
                          title="Eliminar"
                        >
                          ❌
                        </button>
                      </div>
                    ))}
                    
                    <div className="pt-2 flex justify-between font-bold text-sm text-gray-900">
                      <span>Total:</span>
                      <span>${cart.reduce((acc, item) => acc + item.price, 0).toFixed(2)}</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
          
          <button className="hover:text-black transition-colors">👤</button>
        </div>

      </div>
    </header>
  );
}