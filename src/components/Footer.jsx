import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-12 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1: Logo y descripción */}
          <div>
            <Link to="/" className="text-2xl font-black tracking-tighter text-blue-600 flex items-center gap-2 mb-4">
              <span>🛍️</span> LUXE
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your one-stop destination for premium lifestyle products, from jewelry to electronics. Quality guaranteed.
            </p>
          </div>

          {/* Columna 2: Categorías */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wider text-sm uppercase">Categories</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><Link to="/products/category/electronics" className="hover:text-blue-600 transition-colors">Electronics</Link></li>
              <li><Link to="/products/category/jewelery" className="hover:text-blue-600 transition-colors">Jewelry</Link></li>
              <li><Link to="/products/category/men's clothing" className="hover:text-blue-600 transition-colors">Men's Fashion</Link></li>
              <li><Link to="/products/category/women's clothing" className="hover:text-blue-600 transition-colors">Women's Fashion</Link></li>
            </ul>
          </div>

          {/* Columna 3: Soporte */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wider text-sm uppercase">Support</h3>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Order Tracking</a></li>
            </ul>
          </div>

          {/* Columna 4: Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 tracking-wider text-sm uppercase">Newsletter</h3>
            <p className="text-gray-500 text-sm mb-4">
              Get the latest updates on new arrivals and sales.
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <button 
                type="submit" 
                className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Línea divisoria y Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© 2026 Luxe Store. Powered by FakeStore API.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
}