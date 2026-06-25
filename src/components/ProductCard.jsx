import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductCard({ product }) {
   
const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col hover:shadow-md transition-shadow relative group">
      
      <Link to={`/products/${product.id}`} className="flex flex-col flex-grow cursor-pointer">
        <div className="h-48 w-full bg-white mb-4 p-2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
          />
        </div>
        
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">
          {product.category}
        </span>
        
        <h3 className="text-sm font-semibold text-gray-900 mb-2 h-10 overflow-hidden" title={product.title}>
          {product.title}
        </h3>
      </Link>
      
      <div className="flex justify-between items-center mt-auto mb-4">
        <span className="text-lg font-bold text-gray-900">${product.price}</span>
        <div className="flex items-center text-sm text-gray-500 gap-1">
          <span className="text-yellow-400">⭐</span>
          <span>{product.rating?.rate}</span>
        </div>
      </div>
      
      <button 
        onClick={() => addToCart(product)}
        className="w-full bg-gray-900 text-white text-sm font-semibold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors"
      >
        🛒 Add to Cart
      </button>

    </div>
  );
}