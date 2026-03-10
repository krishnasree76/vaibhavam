'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { TestimonialCard } from '@/components/testimonial-card';

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Couple',
      quote: 'The food was absolutely delicious and the service was exceptional. Every guest praised the authentic flavors and beautiful presentation. We couldn\'t have asked for a better catering experience!',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Rajesh Patel',
      role: 'Corporate Event Manager',
      quote: 'Vaibhavam Caterers provided professional service with incredible variety. The team was courteous, efficient, and the food quality exceeded all our expectations. Highly recommended for corporate events.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Ananya Verma',
      role: 'Birthday Celebration Host',
      quote: 'The best catering service for traditional events. The staff was courteous and helpful, and the food was absolutely delightful. Our guests are still talking about the sweets!',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Vikram Desai',
      role: 'Wedding Event Organizer',
      quote: 'Working with Vaibhavam Caterers was a pleasure. They were flexible with our custom menu requests, professional in execution, and the food was outstanding. Clients always recommend them.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Sneha Kapoor',
      role: 'Housewarming Host',
      quote: 'What a wonderful experience! From consultation to delivery, everything was seamless. The variety of dishes impressed everyone, and the cleanup was quick and thorough.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Arun Kumar',
      role: 'Corporate Client',
      quote: 'The professionalism and attention to detail was remarkable. They handled our office event with precision and made sure every guest had an amazing experience. Worth every penny!',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Divya Singh',
      role: 'Family Gathering Organizer',
      quote: 'The authentic taste of traditional recipes brought back so many memories. The team was punctual, well-organized, and left our home spotless. Highly satisfied with the service.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Mahesh Iyer',
      role: 'Wedding Father of the Bride',
      quote: 'Vaibhavam Caterers made our daughter\'s wedding special with their exceptional food and service. The customized menu was perfect for our family. We are grateful and highly appreciate their work.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Priya Nair',
      role: 'Event Coordinator',
      quote: 'As an event coordinator, I always recommend Vaibhavam to my clients. Their consistency, quality, and reliability are unmatched. Clients are always delighted with their catering services.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Rohan Saxena',
      role: 'Corporate Manager',
      quote: 'The team handled our company anniversary event beautifully. Food was fresh, variety was impressive, and service was impeccable. Definitely booking again for future events!',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Meera Chopra',
      role: 'Festival Celebration Host',
      quote: 'For our Diwali celebration, they brought authentic traditional dishes that were absolutely perfect. The presentation was elegant and the taste was authentic. Loved everything!',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Sanjay Bhattacharya',
      role: 'Birthday Party Organizer',
      quote: 'My son\'s birthday party was a huge success thanks to Vaibhavam Caterers. The food was delicious, the service was friendly, and all the kids loved the menu options provided.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
  ];

  const stats = [
    { number: '500+', label: 'Events Catered' },
    { number: '100+', label: 'Menu Items' },
    { number: '10,000+', label: 'Happy Guests' },
    { number: '15+', label: 'Years Experience' },
  ];

  return (
    <>
      <Navbar />
      
      <main className="min-h-screen">
        {/* Header */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold text-foreground mb-4">What Our Clients Say</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Read testimonials from hundreds of satisfied clients who trusted us with their special celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">Join Our Happy Customers</h2>
              <p className="text-lg text-white/90 mb-8">
                Let's create memorable moments with authentic flavors and exceptional service.
              </p>
              <button className="bg-white hover:bg-background text-primary font-semibold px-8 py-3 rounded-lg transition-colors">
                Book Your Event Now
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
