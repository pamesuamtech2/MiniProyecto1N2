import { Link } from 'react-router-dom';

export default function CategoryFilter() {
  const categories = [
    "electronics", 
    "jewelery", 
    "men's clothing", 
    "women's clothing"
  ];

  return (
    <div className="category-filter-container">
      <Link to="/" className="category-btn">
        Todos
      </Link>
      
      {categories.map((category) => (
        <Link 
          key={category} 
          to={`/products/category/${category}`} 
          className="category-btn"
        >
        </Link>
      ))}
    </div>
  );
}