import { useNavigate } from 'react-router-dom';

export default function ProductDetail({ product }) {
  const navigate = useNavigate();

  return (
    <div className="product-detail-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ⬅️ Volver Atrás
      </button>

      <div className="product-detail-content">
        <div className="detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="detail-info">
          <span className="category-tag">{product.category}</span>
          <h1>{product.title}</h1>
          
          {product.rating && (
            <p className="rating">
              ⭐ {product.rating.rate} ({product.rating.count} reviews)
            </p>
          )}

          <p className="detail-price">${product.price}</p>
          <p className="detail-description">{product.description}</p>
          
          <button className="btn-add-cart">Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
}