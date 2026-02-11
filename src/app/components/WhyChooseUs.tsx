import { Truck, Leaf, Award, Headphones } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Get your food delivered hot and fresh within 30 minutes guaranteed',
  },
  {
    id: 2,
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We use only the freshest, locally-sourced ingredients in every dish',
  },
  {
    id: 3,
    icon: Award,
    title: 'Best Quality',
    description: 'Award-winning chefs prepare every meal with passion and precision',
  },
  {
    id: 4,
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our customer service team is always here to help you anytime',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Why <span className="text-[#FF6B00]">Choose Us</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            We're committed to delivering excellence in every order
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-[#FF6B00] transition-colors">
                  <IconComponent
                    size={32}
                    className="text-[#FF6B00] group-hover:text-white transition-colors"
                  />
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-[#1E1E1E] mb-3"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-gray-600 leading-relaxed"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
