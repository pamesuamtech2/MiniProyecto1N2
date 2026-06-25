export default function Hero() {
  return (
    <div 
      className="relative bg-gray-900 bg-opacity-70 bg-blend-overlay rounded-2xl p-8 md:p-16 mb-12 flex flex-col items-start justify-center overflow-hidden"
      style={{ 
        backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        minHeight: '400px'
      }}
    >
      <span className="text-blue-400 font-bold tracking-wider mb-2 text-sm uppercase">
        New Collection 2024
      </span>
      
      <h1 className="text-4xl md:text-6xl font-black text-white mb-4 max-w-2xl leading-tight tracking-tight">
        Redefine Your <span className="text-blue-500">Everyday Style</span>
      </h1>
      
      <p className="text-gray-200 mb-8 max-w-lg text-lg">
        Discover our curated selection of premium essentials designed for the modern lifestyle.
      </p>
      
      <div className="flex flex-wrap gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          Shop Collection
        </button>
        <button className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg transition-colors">
          View Lookbook
        </button>
      </div>
    </div>
  );
}