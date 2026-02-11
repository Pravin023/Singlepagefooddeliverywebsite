export function Hero() {
  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-b from-orange-50/50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Authentic Madurai Flavors{' '}
              <span className="text-[#FF6B00]">Delivered Fresh & Fast</span>
            </h1>
            <p
              className="text-lg md:text-xl text-gray-600 leading-relaxed"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Experience the taste of <span className="font-semibold text-[#FF6B00]">Hotel MaduraiKaran</span> at your doorstep. 
              Authentic Madurai cuisine, prepared with traditional recipes passed down through generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToMenu}
                className="bg-[#FF6B00] text-white px-8 py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Order Now
              </button>
              <button
                onClick={scrollToMenu}
                className="border-2 border-[#FF6B00] text-[#FF6B00] px-8 py-4 rounded-full hover:bg-[#FF6B00] hover:text-white transition-all font-semibold text-lg"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1656296995344-967dc66a8e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXQlMjBmb29kJTIwcGxhdHRlcnxlbnwxfHx8fDE3NzA3OTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Madurai special food platter"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 md:p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <p className="text-sm text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Delivery in
                  </p>
                  <p
                    className="text-xl md:text-2xl font-bold text-[#FF6B00]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    30 Minutes
                  </p>
                </div>
              </div>
            </div>
            {/* Madurai Badge */}
            <div className="absolute top-6 right-6 bg-[#FF6B00] text-white rounded-2xl shadow-xl p-4 md:p-5">
              <p
                className="text-lg md:text-xl font-bold text-center"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                🏛️ Madurai<br />Special
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
