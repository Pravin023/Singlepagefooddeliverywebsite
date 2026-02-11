import { Apple, PlayCircle } from 'lucide-react';

export function AppDownload() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-[#FF6B00] to-[#e55f00] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 order-2 md:order-1">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Download Our App For Better Experience
            </h2>
            <p
              className="text-lg text-white/90 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Get exclusive deals, faster ordering, and real-time tracking with the FoodieGo mobile app.
              Available on iOS and Android.
            </p>

            {/* Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-[#1E1E1E] px-6 py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center space-x-3 justify-center">
                <Apple size={32} />
                <div className="text-left">
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Download on the
                  </p>
                  <p className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    App Store
                  </p>
                </div>
              </button>
              <button className="bg-white text-[#1E1E1E] px-6 py-4 rounded-2xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl flex items-center space-x-3 justify-center">
                <PlayCircle size={32} />
                <div className="text-left">
                  <p className="text-xs text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Get it on
                  </p>
                  <p className="text-lg font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Google Play
                  </p>
                </div>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
              <div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  50K+
                </p>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Downloads
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  4.8★
                </p>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Rating
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  500+
                </p>
                <p className="text-sm text-white/80" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Restaurants
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1629697776809-f37ceac39e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwbW9iaWxlJTIwYXBwJTIwbW9ja3VwfGVufDF8fHx8MTc3MDczMTgxNnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Mobile app mockup"
                className="w-80 md:w-96 h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
