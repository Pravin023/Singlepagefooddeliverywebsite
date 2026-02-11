import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1E1E] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                FoodieGo
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Delivering happiness one meal at a time. Your favorite food, delivered fresh and fast.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-2">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#FF6B00] transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-xl font-bold mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3
              className="text-xl font-bold mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Services
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Food Delivery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Catering Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Party Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Gift Cards
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3
              className="text-xl font-bold mb-5"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              © {currentYear} FoodieGo. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FF6B00] transition-colors"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
