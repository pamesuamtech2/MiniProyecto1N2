import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductDetail({ product }) {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false)
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-detail-container">
      <button className="btn-back mt-2" onClick={() => navigate(-1)}>⬅️<span className='font-bold'>Go back</span> 
      </button>

      <div className="product-detail-content p-4 md:p-8 rounded-2xl border border-gray-100 ">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="category-tag font-bold text-blue-600 uppercase tracking-wider">{product.category}</span>
          <h1 className='font-bold text-gray-700'>{product.title}</h1>
          
          {product.rating && (
            <p className="rating text-sm text-gray-500">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}

          <p className="detail-price font-bold">${product.price}</p>
          <div className="mb-6">
          <p className="text-gray-600 leading-relaxed text-lg">
            {isExpanded 
              ? product.description 
              : `${product.description.substring(0, 77)}...`
            }
          </p>
          
          {product.description?.length > 77 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-600 font-bold text-sm hover:underline mt-2"
            >
              {isExpanded ? 'Mostrar menos' : 'Ver más'}
            </button>
          )}
        </div>
          
<button 
        onClick={() => addToCart(product)}
        className="w-50 bg-gray-900 text-white text-sm font-semibold py-2.5 px-5 mt-3 ml-20 rounded-lg flex items-center justify-center gap-2  hover:bg-gray-800 transition-colors"
      >
        🛒 Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
}