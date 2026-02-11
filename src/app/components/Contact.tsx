import { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E1E1E] mb-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Get In <span className="text-[#FF6B00]">Touch</span>
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Have questions or feedback? We'd love to hear from you
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
            <h3
              className="text-2xl font-bold text-[#1E1E1E] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#1E1E1E] mb-2 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-[#1E1E1E] mb-2 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-[#1E1E1E] mb-2 font-medium"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#FF6B00] focus:ring-2 focus:ring-[#FF6B00]/20 outline-none transition-all resize-none"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white px-8 py-4 rounded-full hover:bg-[#e55f00] transition-all shadow-lg hover:shadow-xl font-semibold text-lg flex items-center justify-center space-x-2"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3
                className="text-2xl font-bold text-[#1E1E1E] mb-6"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[#1E1E1E] mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Address
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      123 Food Street, Culinary District
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone size={24} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[#1E1E1E] mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Phone
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      +1 (555) 123-4567
                      <br />
                      +1 (555) 987-6543
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail size={24} className="text-[#FF6B00]" />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-[#1E1E1E] mb-1"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      Email
                    </p>
                    <p className="text-gray-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                      info@foodiego.com
                      <br />
                      support@foodiego.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500" style={{ fontFamily: 'Poppins, sans-serif' }}>
                    Map Location
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
