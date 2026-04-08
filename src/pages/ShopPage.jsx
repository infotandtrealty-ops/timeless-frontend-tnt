import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { Star, Heart, Filter, Search, ArrowRight, Phone, ShoppingBag, X } from "lucide-react";
import Header from "../components/Nav";
import Footer from "../components/Footer";
import { allProducts } from "../pages/shopData"; 

// --- STYLED INLINE COMPONENTS ---

const Card = ({ className = "", children }) => (
  <div className={`bg-white rounded-2xl border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className }) => (
  <span className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full ${className}`}>
    {children}
  </span>
);

const Button = ({ className = "", variant = "primary", size = "default", children, onClick, ...props }) => {
  const base = "inline-flex items-center justify-center font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none rounded-lg";
  
  const variants = {
    primary: "bg-[#D4AF37] text-white hover:bg-[#b5952f] shadow-lg shadow-orange-100", // Gold
    secondary: "bg-gray-900 text-white hover:bg-gray-800",
    outline: "border border-gray-200 text-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] bg-transparent",
    ghost: "text-gray-500 hover:text-[#D4AF37] hover:bg-orange-50",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#1ebd59] shadow-md", // WhatsApp Green
  };

  const sizes = {
    sm: "h-8 px-3 text-xs",
    default: "h-11 px-5 text-sm",
    lg: "h-12 px-8 text-base",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

// --- MAIN PAGE COMPONENT ---

const ShopPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState(""); // Search State
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Categories Definition
  const categories = useMemo(() => [
    { id: 'all', name: 'All Collections', count: allProducts.length },
    { id: 'permanent-makeup', name: 'Permanent Makeup', count: allProducts.filter(p=>p.category==='permanent-makeup').length },
    { id: 'cosmetology', name: 'Cosmetology', count: allProducts.filter(p=>p.category==='cosmetology').length },
    { id: 'facial-aesthetics', name: 'Facial Aesthetics', count: allProducts.filter(p=>p.category==='facial-aesthetics').length }
  ], []);

  // Handle URL params for categories
  useEffect(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const category = pathSegments[1];
    
    if (category && category !== 'shop') {
      setActiveCategory(category);
    } else {
      setActiveCategory('all');
    }
  }, [location.pathname]);

  // --- FILTERING LOGIC (Search + Category) ---
  useEffect(() => {
    setLoading(true);
    
    // Simulate a brief loading for UX feel
    const timer = setTimeout(() => {
      let result = allProducts;

      // 1. Filter by Category
      if (activeCategory !== 'all') {
        result = result.filter(p => p.category === activeCategory);
      }

      // 2. Filter by Search Query
      if (searchQuery.trim() !== "") {
        result = result.filter(p => 
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
          p.description?.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      setDisplayedProducts(result);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, searchQuery]);


  // WhatsApp Handler
  const handleWhatsAppOrder = (productName, productPrice) => {
    const phoneNumber = "919654009966"; 
    const message = `Hello, I am interested in purchasing: *${productName}* (${productPrice}). Please guide me through the process.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans selection:bg-[#D4AF37] selection:text-white">
      <Header />

      {/* --- HERO BANNER --- */}
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 opacity-60 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop')" }} 
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
        
        <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
          <Badge className="bg-[#D4AF37] text-white mb-4 shadow-lg">Professional Grade</Badge>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 tracking-tight">
            The Aesthetic Shop
          </h1>
          <p className="text-lg text-gray-200 font-light">
            Premium equipment & supplies for top-tier beauty professionals.
          </p>
        </div>
      </div>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* --- LEFT SIDEBAR (Sticky) --- */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 space-y-8">
              
              {/* Category Menu */}
              <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Filter className="w-4 h-4 text-[#D4AF37]" /> Collections
                </h3>
                <div className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                        activeCategory === cat.id 
                          ? 'bg-[#D4AF37] text-white shadow-md font-medium' 
                          : 'text-gray-600 hover:bg-orange-50 hover:text-[#D4AF37]'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${activeCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'}`}>
                        {cat.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Support Card */}
              <div className="bg-gray-900 rounded-2xl p-6 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#D4AF37] rounded-full opacity-20 blur-xl"></div>
                <h4 className="font-bold text-lg mb-2 relative z-10">Need Expert Advice?</h4>
                <p className="text-gray-400 text-sm mb-4 relative z-10">Our specialists are here to help you choose the right equipment.</p>
                <Button variant="outline" className="border-gray-600 text-white hover:border-white w-full">
                  Contact Support
                </Button>
              </div>

            </div>
          </aside>

          {/* --- RIGHT PRODUCT GRID --- */}
          <main className="lg:w-3/4">
            
            {/* Search & Sort Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              
              {/* Search Bar - NOW FUNCTIONAL */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-gray-50 border border-transparent rounded-full text-sm focus:bg-white focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Showing <strong>{displayedProducts.length}</strong> results</span>
              </div>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="h-64 flex flex-col items-center justify-center text-[#D4AF37]">
                <div className="w-10 h-10 border-4 border-current border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-500 text-sm animate-pulse">Curating products...</p>
              </div>
            ) : (
              <>
                {/* Product Grid */}
                {displayedProducts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProducts.map((product) => (
                      <Card key={product.id} className="group flex flex-col h-full">
                        
                        {/* Image Container */}
                        <div className="relative aspect-square overflow-hidden bg-gray-100">
                          {product.originalPrice && (
                            <Badge className="absolute top-3 left-3 z-10 bg-red-500 text-white shadow-md">Sale</Badge>
                          )}
                          <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-400 hover:text-red-500 hover:scale-110 transition-all shadow-sm">
                            <Heart className="w-4 h-4" />
                          </button>
                          
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                          />
                          
                          {/* Quick Action Overlay */}
                          <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent">
                             <Button 
                              variant="primary" 
                              className="w-full shadow-none bg-white text-gray-900 hover:bg-[#D4AF37] hover:text-white"
                              onClick={() => navigate(`/shop/product/${product.id}`)}
                             >
                               View Details
                             </Button>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                          <div className="mb-2">
                             <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 group-hover:text-[#D4AF37] transition-colors">
                              {product.name}
                            </h3>
                             {/* Rating */}
                            <div className="flex items-center gap-1 mt-2">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-3 h-3 ${i < Math.floor(product.rating || 0) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
                                />
                              ))}
                              <span className="text-xs text-gray-400 ml-1">({product.reviews || 0})</span>
                            </div>
                          </div>

                          <p className="text-sm text-gray-500 line-clamp-2 mb-4 flex-grow">
                            {product.description}
                          </p>

                          {/* Footer: Price & WhatsApp */}
                          <div className="pt-4 border-t border-gray-100 mt-auto">
                            <div className="flex items-end justify-between mb-4">
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-400 uppercase font-semibold">Price</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-xl font-bold text-gray-900">{product.price}</span>
                                  {product.originalPrice && (
                                    <span className="text-sm text-gray-400 line-through decoration-red-400">
                                      {product.originalPrice}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <Button 
                              variant="whatsapp" 
                              className="w-full gap-2 rounded-xl"
                              onClick={() => handleWhatsAppOrder(product.name, product.price)}
                            >
                              <Phone className="w-4 h-4" /> Order via WhatsApp
                            </Button>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                ) : (
                  // Empty State
                  <div className="bg-white rounded-2xl p-12 text-center border border-dashed border-gray-300">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <ShoppingBag className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
                    <p className="text-gray-500 max-w-md mx-auto">
                      We couldn't find any products matching "{searchQuery}". Try adjusting your search or switching categories.
                    </p>
                    <Button 
                      variant="outline" 
                      className="mt-6"
                      onClick={() => {setSearchQuery(""); setActiveCategory("all");}}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShopPage;




