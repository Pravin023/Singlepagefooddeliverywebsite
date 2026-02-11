import { useState } from 'react';
import { X, CreditCard, Smartphone, Banknote } from 'lucide-react';
import { CartItem, CustomerDetails, PaymentMethod } from '../types/cart';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onPlaceOrder: (customerDetails: CustomerDetails, paymentMethod: PaymentMethod) => void;
}

export function Checkout({ isOpen, onClose, cart, onPlaceOrder }: CheckoutProps) {
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    landmark: '',
    city: '',
    pincode: '',
  });

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    type: 'cod',
  });

  const deliveryFee = 30;
  const tax = 0.05;
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxAmount = subtotal * tax;
  const total = subtotal + deliveryFee + taxAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPlaceOrder(customerDetails, paymentMethod);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerDetails({
      ...customerDetails,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-white">
            <h2
              className="text-2xl md:text-3xl font-bold text-[#1E1E1E]"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Checkout
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
            >
              <X size={24} className="text-gray-600" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Customer Details */}
                <div>
                  <h3
                    className="text-xl font-bold text-[#1E1E1E] mb-5 flex items-center"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span className="w-8 h-8 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mr-3 text-sm">
                      1
                    </span>
                    Customer Details
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={customerDetails.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={customerDetails.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="10-digit mobile number"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={customerDetails.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Delivery Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={customerDetails.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="Street address"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="landmark"
                        className="block text-sm font-medium text-gray-700 mb-2"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        id="landmark"
                        name="landmark"
                        value={customerDetails.landmark}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                        placeholder="Nearby landmark"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="city"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          City *
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={customerDetails.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                          placeholder="City"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="pincode"
                          className="block text-sm font-medium text-gray-700 mb-2"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                          Pincode *
                        </label>
                        <input
                          type="text"
                          id="pincode"
                          name="pincode"
                          value={customerDetails.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                          style={{ fontFamily: 'Poppins, sans-serif' }}
                          placeholder="6-digit"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment & Summary */}
                <div>
                  {/* Payment Method */}
                  <h3
                    className="text-xl font-bold text-[#1E1E1E] mb-5 flex items-center"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span className="w-8 h-8 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mr-3 text-sm">
                      2
                    </span>
                    Payment Method
                  </h3>
                  <div className="space-y-3 mb-8">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#FF6B00] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={paymentMethod.type === 'cod'}
                        onChange={() => setPaymentMethod({ type: 'cod' })}
                        className="w-5 h-5 text-[#FF6B00]"
                      />
                      <Banknote size={24} className="mx-3 text-gray-600" />
                      <span
                        className="font-medium text-gray-700"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Cash on Delivery
                      </span>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#FF6B00] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={paymentMethod.type === 'upi'}
                        onChange={() => setPaymentMethod({ type: 'upi' })}
                        className="w-5 h-5 text-[#FF6B00]"
                      />
                      <Smartphone size={24} className="mx-3 text-gray-600" />
                      <span
                        className="font-medium text-gray-700"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        UPI
                      </span>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-[#FF6B00] transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod.type === 'card'}
                        onChange={() => setPaymentMethod({ type: 'card' })}
                        className="w-5 h-5 text-[#FF6B00]"
                      />
                      <CreditCard size={24} className="mx-3 text-gray-600" />
                      <span
                        className="font-medium text-gray-700"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Credit/Debit Card
                      </span>
                    </label>
                  </div>

                  {/* Order Summary */}
                  <h3
                    className="text-xl font-bold text-[#1E1E1E] mb-5 flex items-center"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    <span className="w-8 h-8 bg-[#FF6B00] text-white rounded-full flex items-center justify-center mr-3 text-sm">
                      3
                    </span>
                    Order Summary
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-5 border border-orange-100">
                    <div className="space-y-3 mb-4">
                      {cart.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span
                            className="text-gray-700"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            {item.name} × {item.quantity}
                          </span>
                          <span
                            className="font-semibold text-gray-900"
                            style={{ fontFamily: 'Poppins, sans-serif' }}
                          >
                            ₹{(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-orange-200 pt-3 space-y-2">
                      <div className="flex justify-between text-sm text-gray-600">
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>Subtotal</span>
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ₹{subtotal.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>Delivery Fee</span>
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ₹{deliveryFee.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>Tax (5%)</span>
                        <span style={{ fontFamily: 'Poppins, sans-serif' }}>
                          ₹{taxAmount.toFixed(2)}
                        </span>
                      </div>
                      <div className="border-t border-orange-200 pt-3 flex justify-between items-center">
                        <span
                          className="text-lg font-bold text-[#1E1E1E]"
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
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-gray-200">
                <button
                  type="submit"
                  className="w-full bg-[#FF6B00] text-white py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Place Order - ₹{total.toFixed(2)}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
