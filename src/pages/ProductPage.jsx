import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductDetail from '../components/ProductDetail';
import Spinner from '../components/Spinner';

export default function ProductPage() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetchProducts(`https://fakestoreapi.com/products/${id}`);

  if (loading) {
    return (
      <main className="max-w-7xl mx-auto p-4 py-32 flex justify-center items-center">
        <Spinner />
      </main>
    );
  }

  if (error || !product) {
    return (
      <div className="error-state text-center mt-20">
        <h2 className="text-red-500 font-bold text-xl">El producto no existe o hubo un error. ❌</h2>
        <button onClick={() => window.location.href = '/'} className="mt-4 text-blue-600 hover:underline">Volver al inicio</button>
      </div>
    );
  }

  return <ProductDetail product={product} />;
}