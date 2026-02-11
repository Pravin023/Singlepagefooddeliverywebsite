import { CheckCircle, Package } from 'lucide-react';

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  orderId: string;
}

export function OrderConfirmation({ isOpen, onClose, orderId }: OrderConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 text-center">
        {/* Success Icon */}
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={56} className="text-green-500" />
        </div>

        {/* Success Message */}
        <h2
          className="text-3xl font-bold text-[#1E1E1E] mb-3"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Order Placed Successfully! 🎉
        </h2>
        <p
          className="text-xl text-[#FF6B00] font-semibold mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Your Madurai feast is on the way!
        </p>

        {/* Order Details */}
        <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-6 mb-6 border border-orange-100">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Package size={24} className="text-[#FF6B00]" />
            <span
              className="text-sm text-gray-600"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Order ID
            </span>
          </div>
          <p
            className="text-2xl font-bold text-[#1E1E1E] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            #{orderId}
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-600">
            <span className="text-2xl">⏱️</span>
            <div className="text-left">
              <p className="text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Estimated Delivery
              </p>
              <p
                className="text-lg font-bold text-[#FF6B00]"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                30 Minutes
              </p>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <p
          className="text-gray-600 mb-6"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          We've sent a confirmation to your email. You can track your order status in real-time.
        </p>

        {/* Buttons */}
        <div className="space-y-3">
          <button
            className="w-full bg-[#FF6B00] text-white px-8 py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Track Order
          </button>
          <button
            onClick={onClose}
            className="w-full border-2 border-[#FF6B00] text-[#FF6B00] px-8 py-4 rounded-full hover:bg-orange-50 transition-all font-semibold text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Continue Browsing
          </button>
        </div>

        {/* Thank You Message */}
        <p
          className="text-gray-500 mt-6 text-sm"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Thank you for choosing Hotel MaduraiKaran! 🙏
        </p>
      </div>
    </div>
  );
}
