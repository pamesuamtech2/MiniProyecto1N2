import { Link } from 'react-router-dom';

export default function CategoryGrid({ products }) {
  if (!products || products.length === 0) return null;

  const uniqueCategoryNames = [...new Set(products.map(p => p.category))];
  const categories = uniqueCategoryNames.map((categoryName, index) => {

    const firstProductOfCategory = products.find(p => p.category === categoryName);
    
    return {
      id: index,
      name: categoryName, 
      path: categoryName,
      image: firstProductOfCategory ? firstProductOfCategory.image : '' 
    };
  });

  return (
    <section className="my-10 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Shop by Category</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/products/category/${cat.path}`}
            className="group flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100"
          >
            <div className="h-32 w-32 mb-4 flex justify-center items-center">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <h3 className="font-semibold text-gray-700 group-hover:text-blue-600 transition-colors text-center text-sm md:text-base capitalize">
              {cat.name}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
}