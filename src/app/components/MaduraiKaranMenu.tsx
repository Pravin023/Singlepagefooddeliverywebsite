import { Star, Plus, Minus } from 'lucide-react';
import { MenuItem, CartItem } from '../types/cart';
import { useState } from 'react';

interface MaduraiKaranMenuProps {
  onAddToCart: (item: MenuItem) => void;
  cart: CartItem[];
  onUpdateQuantity: (itemId: number, quantity: number) => void;
}

const menuItems: MenuItem[] = [
  // Non-Veg Specials
  {
    id: 1,
    name: 'Madurai Kari Dosa',
    description: 'Crispy dosa stuffed with spicy mutton keema',
    price: 180,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1723388800779-5699cc142f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBjcmlzcHl8ZW58MXx8fHwxNzcwNzkyNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  {
    id: 2,
    name: 'Mutton Chukka',
    description: 'Dry mutton roast with authentic Madurai spices',
    price: 240,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NzA3MDkxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  {
    id: 3,
    name: 'Chicken Chukka',
    description: 'Spicy dry chicken fry with curry leaves',
    price: 190,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzA3OTIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  {
    id: 4,
    name: 'Mutton Biryani (Seeraga Samba)',
    description: 'Aromatic biryani with tender mutton pieces',
    price: 220,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzA3OTIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  {
    id: 5,
    name: 'Chicken Biryani',
    description: 'Classic Madurai-style chicken biryani',
    price: 180,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYmlyeWFuaSUyMGluZGlhbnxlbnwxfHx8fDE3NzA3OTIyMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  {
    id: 6,
    name: 'Nattu Kozhi Kulambu',
    description: 'Country chicken curry with traditional spices',
    price: 210,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NzA3MDkxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  {
    id: 7,
    name: 'Kola Urundai',
    description: 'Deep-fried meatballs with aromatic spices',
    price: 200,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1652545297020-f5e8ad779eb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBjdXJyeSUyMGluZGlhbnxlbnwxfHx8fDE3NzA3MDkxMjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'non-veg',
  },
  // Tiffin Varieties
  {
    id: 8,
    name: 'Idly (2 pcs)',
    description: 'Soft steamed rice cakes with sambar & chutney',
    price: 40,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1657196118354-f25f29fe636d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGxpJTIwc291dGglMjBpbmRpYW58ZW58MXx8fHwxNzcwNzA5MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiffin',
  },
  {
    id: 9,
    name: 'Dosai',
    description: 'Crispy traditional south Indian crepe',
    price: 50,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1723388800779-5699cc142f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBjcmlzcHl8ZW58MXx8fHwxNzcwNzkyNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiffin',
  },
  {
    id: 10,
    name: 'Kal Dosai',
    description: 'Thick soft dosa with spicy chutneys',
    price: 70,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1723388800779-5699cc142f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBjcmlzcHl8ZW58MXx8fHwxNzcwNzkyNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiffin',
  },
  {
    id: 11,
    name: 'Kothu Parotta (Chicken)',
    description: 'Shredded parotta mixed with chicken & spices',
    price: 170,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1656296995344-967dc66a8e0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBzdHJlZXQlMjBmb29kJTIwcGxhdHRlcnxlbnwxfHx8fDE3NzA3OTI1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiffin',
  },
  {
    id: 12,
    name: 'Plain Parotta',
    description: 'Flaky layered flatbread',
    price: 20,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1725483990122-802996d84699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBmb29kfGVufDF8fHx8MTc3MDc4NDk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiffin',
  },
  {
    id: 13,
    name: 'Egg Dosai',
    description: 'Dosa topped with egg and spices',
    price: 90,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1723388800779-5699cc142f18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBjcmlzcHl8ZW58MXx8fHwxNzcwNzkyNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'tiffin',
  },
  // Madurai Famous Drinks
  {
    id: 14,
    name: 'Jigarthanda (Special)',
    description: 'Iconic Madurai cold milk drink with ice cream',
    price: 70,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1646056385288-46b2ce4ca4f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWR1cmFpJTIwdGVtcGxlJTIwZm9vZHxlbnwxfHx8fDE3NzA3OTI1ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'drinks',
  },
  {
    id: 15,
    name: 'Rose Milk',
    description: 'Refreshing rose-flavored milk',
    price: 40,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1685270386242-487b9e1c9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZyZXNoaW5nJTIwZHJpbmtzJTIwYmV2ZXJhZ2VzfGVufDF8fHx8MTc3MDc5MTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'drinks',
  },
  {
    id: 16,
    name: 'Buttermilk',
    description: 'Traditional spiced buttermilk',
    price: 20,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1685270386242-487b9e1c9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZyZXNoaW5nJTIwZHJpbmtzJTIwYmV2ZXJhZ2VzfGVufDF8fHx8MTc3MDc5MTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'drinks',
  },
  {
    id: 17,
    name: 'Filter Coffee',
    description: 'Traditional South Indian filter coffee',
    price: 25,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1668236482744-b48b28650f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmaWx0ZXIlMjBjb2ZmZWV8ZW58MXx8fHwxNzcwNzkyNTg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    category: 'drinks',
  },
];

export function MaduraiKaranMenu({ onAddToCart, cart, onUpdateQuantity }: MaduraiKaranMenuProps) {
  const [activeCategory, setActiveCategory] = useState<'all' | 'non-veg' | 'tiffin' | 'drinks'>('all');

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const getCartQuantity = (itemId: number) => {
    const cartItem = cart.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Hotel <span className="text-[#FF6B00]">MaduraiKaran</span>
          </h2>
          <p
            className="text-xl text-gray-600 mb-2"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Madurai Special Menu
          </p>
          <p
            className="text-base text-gray-500 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Authentic flavors from the temple city, crafted with 25+ years of culinary expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-[#FF6B00] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            All Items
          </button>
          <button
            onClick={() => setActiveCategory('non-veg')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === 'non-veg'
                ? 'bg-[#FF6B00] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            🥘 Non-Veg Specials
          </button>
          <button
            onClick={() => setActiveCategory('tiffin')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === 'tiffin'
                ? 'bg-[#FF6B00] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            🍳 Tiffin Varieties
          </button>
          <button
            onClick={() => setActiveCategory('drinks')}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeCategory === 'drinks'
                ? 'bg-[#FF6B00] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            🥤 Madurai Drinks
          </button>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {filteredItems.map((item) => {
            const quantity = getCartQuantity(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 shadow-lg flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400 fill-yellow-400" />
                    <span
                      className="font-semibold text-sm text-[#1E1E1E]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {item.rating}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3
                    className="text-lg font-bold text-[#1E1E1E] mb-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="text-sm text-gray-600 mb-4 line-clamp-2"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="text-2xl font-bold text-[#FF6B00]"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      ₹{item.price}
                    </span>
                  </div>

                  {/* Quantity Selector & Add to Cart */}
                  {quantity > 0 ? (
                    <div className="flex items-center justify-between bg-orange-50 rounded-full p-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity - 1)}
                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors shadow-sm"
                      >
                        <Minus size={18} />
                      </button>
                      <span
                        className="font-bold text-lg text-[#FF6B00]"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, quantity + 1)}
                        className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-[#FF6B00] hover:text-white transition-colors shadow-sm"
                      >
                        <Plus size={18} />
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => onAddToCart(item)}
                      className="w-full bg-[#FF6B00] text-white py-3 rounded-full hover:bg-[#e55f00] transition-all shadow-md hover:shadow-lg font-semibold"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Add to Cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
