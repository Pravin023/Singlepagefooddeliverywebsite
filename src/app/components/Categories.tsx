import { Pizza, Sandwich, Coffee, IceCream, UtensilsCrossed, ChefHat } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Pizza',
    icon: Pizza,
    image: 'https://images.unsplash.com/photo-1622060458125-8c9ae7d5f84d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaXp6YSUyMGNhdGVnb3J5JTIwaWNvbnxlbnwxfHx8fDE3NzA3OTE1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-orange-400 to-red-500',
  },
  {
    id: 2,
    name: 'Burger',
    icon: Sandwich,
    image: 'https://images.unsplash.com/photo-1627378378955-a3f4e406c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBnb3VybWV0JTIwZm9vZHxlbnwxfHx8fDE3NzA3MDM1OTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-yellow-400 to-orange-500',
  },
  {
    id: 3,
    name: 'Drinks',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1685270386242-487b9e1c9fc7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWZyZXNoaW5nJTIwZHJpbmtzJTIwYmV2ZXJhZ2VzfGVufDF8fHx8MTc3MDc5MTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    id: 4,
    name: 'Desserts',
    icon: IceCream,
    image: 'https://images.unsplash.com/photo-1611292995678-b5cbfa9b47c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNzZXJ0cyUyMHN3ZWV0JTIwY2FrZXxlbnwxfHx8fDE3NzA3OTE1ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-pink-400 to-purple-500',
  },
  {
    id: 5,
    name: 'South Indian',
    icon: UtensilsCrossed,
    image: 'https://images.unsplash.com/photo-1725483990122-802996d84699?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3V0aCUyMGluZGlhbiUyMGRvc2ElMjBmb29kfGVufDF8fHx8MTc3MDc4NDk3NXww&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-green-400 to-emerald-500',
  },
  {
    id: 6,
    name: 'Chinese',
    icon: ChefHat,
    image: 'https://images.unsplash.com/photo-1716535232835-6d56282dfe8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwbm9vZGxlcyUyMGZvb2R8ZW58MXx8fHwxNzcwNzg3Njk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    color: 'from-red-400 to-orange-600',
  },
];

export function Categories() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Browse By <span className="text-[#FF6B00]">Category</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Explore our diverse menu with cuisines from around the world
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group cursor-pointer"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* Background Image */}
                  <div className="relative h-40 md:h-48">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70 group-hover:opacity-80 transition-opacity`}></div>
                  </div>
                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <IconComponent size={40} className="mb-3" />
                    <h3
                      className="text-lg md:text-xl font-semibold"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {category.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
