import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
// Assuming relative paths for custom files:
import Header from "../components/Nav"; // Assuming this is available
import Footer from "../components/Footer"; // Assuming this is available
import { allProducts } from "../pages/shopData"; 

import { ShoppingCart, Plus, Minus, Star, CheckCircle, Truck, Shield } from "lucide-react";


// --- INLINE COMPONENT SUBSTITUTES ---

// Card Components
const Card = ({ className = "", children }) => (
  <div className={`rounded-xl border bg-white text-card-foreground shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ className = "", children }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ className = "", children }) => (
  <h3 className={`font-semibold tracking-tight text-xl ${className}`}>
    {children}
  </h3>
);

const CardContent = ({ className = "", children }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

// Button Component
const Button = ({ className = "", variant = "default", size = "default", children, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  let variantClasses = "";
  if (variant === "default") {
    variantClasses = "bg-luxury-gold text-white hover:bg-luxury-gold/90";
  } else if (variant === "ghost") {
    variantClasses = "hover:bg-gray-100";
  }

  let sizeClasses = "";
  if (size === "default") {
    sizeClasses = "h-10 py-2 px-4";
  } else if (size === "lg") {
    sizeClasses = "h-11 px-8";
  } else if (size === "sm") {
    sizeClasses = "h-9 px-3";
  }

  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

// Badge Component
const Badge = ({ className = "", variant = "default", children }) => {
  const baseClasses = "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors";
  
  let variantClasses = "";
  if (variant === "secondary") {
    // Mimics a typical secondary badge style
    variantClasses = "bg-gray-100 text-gray-800 hover:bg-gray-200";
  } 

  const classes = `${baseClasses} ${variantClasses} ${className}`;

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

// Input Component
const Input = ({ className = "", type = "text", ...props }) => (
  <input
    type={type}
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Label Component
const Label = ({ className = "", children, ...props }) => (
  <label className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props}>
    {children}
  </label>
);
// --- END INLINE COMPONENT SUBSTITUTES ---


const ProductDetail = () => {
  // Removed interface Product definition
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [quantity, setQuantity] = useState(1);

  // Cast product lookup result to a non-typed variable in JSX
  const product = allProducts.find(p => p.id === id); 

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <p>Product not found.</p>
        </div>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Get existing cart
    const existingCart = localStorage.getItem("cart");
    // Removed type annotation from cart variable
    const cart = existingCart ? JSON.parse(existingCart) : { items: [], total: 0, itemCount: 0 };

    // Check if item already exists
    // Removed type annotation from item variable
    const existingItemIndex = cart.items.findIndex((item) => item.id === product.id);
    
    if (existingItemIndex > -1) {
      // Update quantity
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({
        id: product.id,
        type: "product",
        name: product.name,
        // Safely parse price, converting string price (e.g., '₹ 4500') to number
        price: parseFloat(product.price.replace(/[₹,]/g, '')),
        originalPrice: product.originalPrice ? parseFloat(product.originalPrice.replace(/[₹,]/g, '')) : undefined,
        image: product.image,
        quantity: quantity,
        category: product.category || "General"
      });
    }

    // Recalculate totals
    // Removed type annotation from sum and item variables
    cart.total = cart.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cart.itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    
    alert("Product added to cart!");
    navigate("/cart");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden mb-4">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              {product.category && (
                <Badge variant="secondary" className="mb-2">
                  {product.category}
                </Badge>
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
              
              {/* Rating */}
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating || 0)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    {product.rating} ({product.reviewCount || 0} reviews)
                  </span>
                </div>
              )}

              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-green-600">{product.price}</span>
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {product.description || "Premium quality product designed for professional use. This product offers exceptional performance and durability."}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-4">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center gap-3">
                <div className="flex items-center border rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    id="quantity"
                    type="number" // Ensure input type is set for mobile keyboards
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 h-10 text-center border-0 focus:ring-0"
                    min="1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                {product.stock && (
                  <span className="text-sm text-gray-600">
                    {product.stock} in stock
                  </span>
                )}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-green-600 hover:bg-green-700"
              size="lg"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Shipping Info */}
            <Card>
              <CardContent className="p-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Truck className="h-4 w-4 text-green-600" />
                    <span>Free shipping on all orders</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="h-4 w-4 text-blue-600" />
                    <span>30-day return policy</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span>Authentic products guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specifications */}
        {product.specifications && Object.keys(product.specifications).length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;