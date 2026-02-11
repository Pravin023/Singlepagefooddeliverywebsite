import { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

interface NavigationProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Navigation({ cartItemCount, onCartClick }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-md py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#FF6B00] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">F</span>
            </div>
            <span className="text-2xl font-bold text-[#1E1E1E]" style={{ fontFamily: 'Poppins, sans-serif' }}>
              FoodieGo
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </button>
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-orange-50 rounded-full transition-colors"
            >
              <ShoppingCart size={24} className="text-[#1E1E1E]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF6B00] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="bg-[#FF6B00] text-white px-6 py-2.5 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-orange-50 rounded-full transition-colors"
            >
              <ShoppingCart size={24} className="text-[#1E1E1E]" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF6B00] text-white rounded-full flex items-center justify-center text-xs font-bold">
                  {cartItemCount}
                </span>
              )}
            </button>
            <button
              className="text-[#1E1E1E] p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left py-2 text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left py-2 text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-[#1E1E1E] hover:text-[#FF6B00] transition-colors font-medium"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="w-full bg-[#FF6B00] text-white px-6 py-2.5 rounded-full hover:bg-[#e55f00] transition-all shadow-lg"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Order Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}