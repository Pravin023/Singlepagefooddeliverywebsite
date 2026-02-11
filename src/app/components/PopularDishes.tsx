import { Star, ShoppingCart } from 'lucide-react';

const dishes = [
  {
    id: 1,
    name: 'Margherita Pizza',
    price: 12.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1667207394004-acb6aaf4790e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJnaGVyaXRhJTIwcGl6emElMjBjbG9zZXxlbnwxfHx8fDE3NzA3OTE1ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Classic Burger',
    price: 9.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1536014019466-da3e69c19fe9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwYnVyZ2VyJTIwY2hlZXNlfGVufDF8fHx8MTc3MDc5MTU4NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    name: 'Pasta Carbonara',
    price: 14.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1749169337822-d875fd6f4c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0YSUyMGl0YWxpYW4lMjBmb29kfGVufDF8fHx8MTc3MDc3ODU0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    name: 'Sushi Platter',
    price: 18.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1626970188409-f71e532a6eaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGphcGFuZXNlJTIwcGxhdHRlcnxlbnwxfHx8fDE3NzA3OTE1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    name: 'Mexican Tacos',
    price: 11.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1707604341704-74abdc25e52a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWNvcyUyMG1leGljYW4lMjBmb29kfGVufDF8fHx8MTc3MDcwMDIzNnww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    name: 'Healthy Salad Bowl',
    price: 10.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1649531794884-b8bb1de72e68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxhZCUyMGhlYWx0aHklMjBib3dsfGVufDF8fHx8MTc3MDY3MDMyOHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function PopularDishes() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Most <span className="text-[#FF6B00]">Popular Dishes</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Discover our customer favorites and best-selling meals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dishes.map((dish) => (
            <div
              key={dish.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              {/* Image */}
              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-lg flex items-center space-x-1">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span
                    className="font-semibold text-sm text-[#1E1E1E]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {dish.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6">
                <h3
                  className="text-xl font-bold text-[#1E1E1E] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {dish.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span
                    className="text-2xl font-bold text-[#FF6B00]"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    ${dish.price}
                  </span>
                  <button className="bg-[#FF6B00] text-white p-3 rounded-full hover:bg-[#e55f00] transition-all shadow-md hover:shadow-lg">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-[#FF6B00] text-white px-10 py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            View Full Menu
          </button>
        </div>
      </div>
    </section>
  );
}
