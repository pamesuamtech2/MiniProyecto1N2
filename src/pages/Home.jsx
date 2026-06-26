import { useParams } from 'react-router-dom';
import { useFetchProducts } from '../hooks/useFetchProducts';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import Hero from '../components/Hero';
import Spinner from '../components/Spinner';
import CategoryGrid from '../components/CategoryGrid';

export default function Home({ searchTerm }) {
  const { category } = useParams();
  
  const apiUrl = category 
    ? `https://fakestoreapi.com/products/category/${category}`
    : 'https://fakestoreapi.com/products';
    
  const { data: products, loading, error } = useFetchProducts(apiUrl);
  
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="error-state">
        <h2>¡Ups! Algo salió mal. 😥</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-4 bg-gray-50 min-h-screen">
      {!category && <CategoryGrid />}
      
      <Hero />

      <h1 className="text-3xl font-bold text-gray-800 mb-2 mt-12 capitalize">
        {category ? category : "Trending Now"}
      </h1>

      <CategoryFilter />

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500 text-lg mt-8">No se encontraron productos con esa búsqueda. 🕵️‍♀️</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">          
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}