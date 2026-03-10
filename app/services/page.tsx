'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'wedding',
      title: 'Wedding Catering',
      description: 'Create unforgettable memories with our traditional wedding catering service.',
      image: '/hero-wedding-catering.jpg',
      features: [
        'Complete menu customization',
        'Professional staff and service',
        'Elegant presentation and setup',
        'Large variety of dishes',
        'Dietary accommodations',
        'Event coordination assistance',
      ],
    },
    {
      id: 'birthday',
      title: 'Birthday Party Catering',
      description: 'Celebrate in style with our fun and festive birthday party catering.',
      image: '/birthday-party-catering.jpg',
      features: [
        'Fun menu options',
        'Snacks and sweets',
        'Beverages and soft drinks',
        'Flexible serving options',
        'Kid-friendly choices',
        'Party setup assistance',
      ],
    },
    {
      id: 'corporate',
      title: 'Corporate Event Catering',
      description: 'Professional catering for your office events and business gatherings.',
      image: '/wedding-feast.jpg',
      features: [
        'Professional presentation',
        'Efficient service',
        'Business-appropriate menu',
        'Customizable portions',
        'Quick setup and cleanup',
        'Conference room compatible',
      ],
    },
    {
      id: 'housewarming',
      title: 'Housewarming Functions',
      description: 'Perfect menu for celebrating new homes and family gatherings.',
      image: '/paneer-butter-masala.jpg',
      features: [
        'Home-style menu options',
        'Flexible guest count',
        'Traditional recipes',
        'Easy serving arrangements',
        'Customizable timing',
        'Cleanup provided',
      ],
    },
    {
      id: 'festivals',
      title: 'Festival & Celebration Catering',
      description: 'Special menus for Diwali, Sankranti, Ugadi, and cultural celebrations.',
      image: '/traditional-sweets.jpg',
      features: [
        'Traditional festival menus',
        'Authentic recipes',
        'Seasonal specialties',
        'Special sweets and delicacies',
        'Cultural expertise',
        'Festive presentation',
      ],
    },
    {
      id: 'custom',
      title: 'Custom Menu Services',
      description: 'Your event, your way. We can create a personalized menu just for you.',
      image: '/wedding-feast.jpg',
      features: [
        'Personalized menu creation',
        'Dietary preferences',
        'Budget-friendly options',
        'Innovation and creativity',
        'Tasting sessions available',
        'Dedicated event manager',
      ],
    },
  ];

  const process = [
    {
      step: 1,
      title: 'Consultation',
      description: 'Discuss your event details, preferences, and budget with our team.',
    },
    {
      step: 2,
      title: 'Menu Selection',
      description: 'Choose from our menu or create a custom menu together.',
    },
    {
      step: 3,
      title: 'Confirmation',
      description: 'Finalize details including date, guest count, and service time.',
    },
    {
      step: 4,
      title: 'Preparation',
      description: 'Our team prepares everything with meticulous attention to detail.',
    },
    {
      step: 5,
      title: 'Service',
      description: 'Professional service ensuring your guests have a memorable experience.',
    },
    {
      step: 6,
      title: 'Cleanup',
      description: 'Complete cleanup leaving your venue perfect.',
    },
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
              <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive catering solutions for every type of celebration and gathering.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                id={service.id}
              >
                <div className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <div 
                      className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h2 className="text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05, duration: 0.3 }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3"
                        >
                          <Check size={20} className="text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <Button className="bg-primary hover:bg-secondary text-white px-8 py-3 font-semibold flex items-center gap-2">
                      Learn More
                      <ArrowRight size={20} />
                    </Button>
                  </div>
                </div>

                {index < services.length - 1 && <div className="border-t border-border my-12" />}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our streamlined process ensures your event is perfectly planned and executed.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full relative">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 pt-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Book Your Event?</h2>
              <p className="text-lg text-white/90 mb-8">
                Contact us today to discuss your catering needs and create something memorable.
              </p>
              <Button className="bg-white hover:bg-background text-primary font-semibold px-8 py-3 rounded-lg flex items-center gap-2 mx-auto">
                Get in Touch
                <ArrowRight size={20} />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
