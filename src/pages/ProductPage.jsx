import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductDetail from '../components/ProductDetail';

export default function ProductPage() {
  const { id } = useParams();

  const { data: product, loading, error } = useFetchProducts(`https://fakestoreapi.com/products/${id}`);

  // 3. Renderizado Condicional de Carga
  if (loading) {
    return <div className="loading-state">Cargando detalles del producto... 📦</div>;
  }

  if (error || !product) {
    return (
      <div className="error-state">
        <h2>El producto no existe o hubo un error. ❌</h2>
        <button onClick={() => window.location.href = '/'}>Volver al inicio</button>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}