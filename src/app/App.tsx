import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Categories } from './components/Categories';
import { MaduraiKaranMenu } from './components/MaduraiKaranMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { AppDownload } from './components/AppDownload';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { OrderConfirmation } from './components/OrderConfirmation';
import { CartItem, MenuItem, CustomerDetails, PaymentMethod } from './types/cart';

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isOrderConfirmationOpen, setIsOrderConfirmationOpen] = useState(false);
  const [orderId, setOrderId] = useState('');

  const handleAddToCart = (item: MenuItem) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleUpdateQuantity = (itemId: number, quantity: number) => {
    if (quantity <= 0) {
      setCart(cart.filter((item) => item.id !== itemId));
    } else {
      setCart(
        cart.map((item) =>
          item.id === itemId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (itemId: number) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handlePlaceOrder = (customerDetails: CustomerDetails, paymentMethod: PaymentMethod) => {
    // Generate order ID
    const newOrderId = 'MK' + Math.random().toString(36).substr(2, 9).toUpperCase();
    setOrderId(newOrderId);
    
    // Clear cart
    setCart([]);
    
    // Close checkout and show confirmation
    setIsCheckoutOpen(false);
    setIsOrderConfirmationOpen(true);
  };

  const handleCloseOrderConfirmation = () => {
    setIsOrderConfirmationOpen(false);
    setOrderId('');
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Navigation 
        cartItemCount={cartItemCount} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      <Hero />
      <Categories />
      <MaduraiKaranMenu 
        onAddToCart={handleAddToCart}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
      />
      <WhyChooseUs />
      <AboutUs />
      <AppDownload />
      <Contact />
      <Footer />
      
      {/* Cart Slide-in Panel */}
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      
      {/* Checkout Modal */}
      <Checkout
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onPlaceOrder={handlePlaceOrder}
      />
      
      {/* Order Confirmation Modal */}
      <OrderConfirmation
        isOpen={isOrderConfirmationOpen}
        onClose={handleCloseOrderConfirmation}
        orderId={orderId}
      />
    </div>
  );
}
