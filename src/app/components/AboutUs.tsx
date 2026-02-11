import { ArrowRight } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="relative order-2 md:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMHByb2Zlc3Npb25hbCUyMGtpdGNoZW58ZW58MXx8fHwxNzcwNzQzNzExfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Professional chef cooking"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
            </div>
            {/* Floating Stats */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 md:p-8 hidden md:block">
              <div className="text-center">
                <p
                  className="text-4xl font-bold text-[#FF6B00] mb-1"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  25+
                </p>
                <p
                  className="text-gray-600 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Years Legacy
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 md:order-2">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About <span className="text-[#FF6B00]">Hotel MaduraiKaran</span>
            </h2>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Established in the heart of Madurai, Hotel MaduraiKaran has been serving authentic 
              temple city flavors for over 25 years. Our journey began with a simple mission: to bring 
              the rich, traditional taste of Madurai to food lovers everywhere.
            </p>
            <p
              className="text-lg text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              From our legendary Jigarthanda to the aromatic Mutton Biryani made with Seeraga Samba rice, 
              every dish is prepared using age-old recipes passed down through generations. We take pride 
              in using only the freshest ingredients and traditional cooking methods.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <span
                  className="text-gray-700 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Traditional Recipes from Madurai
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <span
                  className="text-gray-700 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Fresh Ingredients & Authentic Spices
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-[#FF6B00] rounded-full flex items-center justify-center">
                  <span className="text-white text-lg">✓</span>
                </div>
                <span
                  className="text-gray-700 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  25+ Years of Taste Legacy
                </span>
              </div>
            </div>
            <button
              className="bg-[#FF6B00] text-white px-8 py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg flex items-center space-x-2 group"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              <span>Learn More</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
