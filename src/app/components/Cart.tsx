import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types/cart';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: number, quantity: number) => void;
  onRemoveItem: (itemId: number) => void;
  onCheckout: () => void;
}

export function Cart({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const deliveryFee = 30;
  const tax = 0.05; // 5% tax

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxAmount = subtotal * tax;
  const total = subtotal + deliveryFee + taxAmount;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={onClose}
        ></div>
      )}

      {/* Slide-in Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
            <div className="flex items-center space-x-3">
              <ShoppingBag size={28} className="text-[#FF6B00]" />
              <div>
                <h2
                  className="text-2xl font-bold text-[#1E1E1E]"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Your Cart
                </h2>
                <p className="text-sm text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {cart.length} {cart.length === 1 ? 'item' : 'items'}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag size={48} className="text-gray-400" />
                </div>
                <p
                  className="text-xl font-semibold text-gray-600 mb-2"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Your cart is empty
                </p>
                <p className="text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Add some delicious items from the menu
                </p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h3
                        className="font-semibold text-[#1E1E1E] mb-1 truncate"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-lg font-bold text-[#FF6B00] mb-3"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        ₹{item.price}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3 bg-gray-100 rounded-full p-1">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span
                            className="font-semibold text-[#1E1E1E] w-6 text-center"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-7 h-7 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="p-2 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <Trash2 size={18} className="text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer with Total */}
          {cart.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="space-y-3 mb-5">
                <div className="flex justify-between text-gray-600">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Subtotal</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Delivery Fee</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>Tax (5%)</span>
                  <span style={{ fontFamily: 'Poppins, sans-serif' }}>₹{taxAmount.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
                  <span
                    className="text-xl font-bold text-[#1E1E1E]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    Total
                  </span>
                  <span
                    className="text-2xl font-bold text-[#FF6B00]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ₹{total.toFixed(2)}
                  </span>
                </div>
              </div>
              <button
                onClick={onCheckout}
                className="w-full bg-[#FF6B00] text-white py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
