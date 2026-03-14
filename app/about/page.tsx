'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Card } from '@/components/ui/card';
import { Users, Award, Leaf, Heart } from 'lucide-react';

export default function AboutPage() {
  // const teamMembers = [
  //   {
  //     name: 'Chef Rajesh Kumar',
  //     role: 'Head Chef & Founder',
  //     bio: 'With 20+ years of experience in traditional Indian cuisine, Chef Rajesh brings authentic flavors to every dish.',
  //     image: '/placeholder-user.jpg',
  //   },
  //   {
  //     name: 'Priya Sharma',
  //     role: 'Operations Manager',
  //     bio: 'Ensures every event runs smoothly with meticulous planning and attention to detail.',
  //     image: '/placeholder-user.jpg',
  //   },
  //   {
  //     name: 'Amit Patel',
  //     role: 'Sous Chef',
  //     bio: 'Specializes in traditional sweets and desserts with a passion for culinary excellence.',
  //     image: '/placeholder-user.jpg',
  //   },
  //   {
  //     name: 'Divya Nair',
  //     role: 'Client Coordinator',
  //     bio: 'Dedicated to understanding client needs and ensuring exceptional service delivery.',
  //     image: '/placeholder-user.jpg',
  //   },
  // ];

  const values = [
    {
      icon: <Heart size={40} />,
      title: 'Authenticity',
      description: 'We believe in preserving traditional recipes and authentic flavors in every dish we serve.',
    },
    {
      icon: <Leaf size={40} />,
      title: 'Quality Ingredients',
      description: 'We source only the freshest ingredients locally to ensure the highest quality in our food.',
    },
    {
      icon: <Users size={40} />,
      title: 'Exceptional Service',
      description: 'Our team is trained to provide professional and courteous service for every event.',
    },
    {
      icon: <Award size={40} />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect, from food preparation to event execution.',
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
              <h1 className="text-5xl font-bold text-foreground mb-4">About Vaibhavam Caterers</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A legacy of authentic flavors, exceptional service, and unforgettable celebrations.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center mb-20"
            >
              <div>
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Story</h2>
                <p className="text-muted-foreground mb-4 text-lg">
                  Vaibhavam Caterers was founded with a simple vision: to bring authentic traditional flavors and exceptional service to every celebration. What started as a small family venture has grown into a trusted name in catering.
                </p>
                <p className="text-muted-foreground mb-4 text-lg">
                  Our journey has been defined by our commitment to using only the finest ingredients, preserving traditional recipes, and creating memorable experiences for our clients.
                </p>
                <p className="text-muted-foreground text-lg">
                  Today, we are proud to have catered over 500 events and delighted thousands of guests with our authentic culinary creations.
                </p>
              </div>
              <div className="h-96 rounded-lg overflow-hidden shadow-lg">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/about.png)' }}
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
  <div className="max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-10">

      {/* Mission Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Our Mission
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          To deliver memorable dining experiences that celebrate tradition,
          quality, and excellence at every event.
        </p>

        <p className="text-muted-foreground text-lg">
          We are committed to providing authentic traditional flavors, fresh
          ingredients, and professional service that exceeds expectations.
        </p>
      </motion.div>


      {/* Vision Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
      >
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Our Vision
        </h2>

        <p className="text-muted-foreground text-lg mb-4">
          To be the most trusted and preferred catering service, known for
          authenticity, quality, and innovation.
        </p>

        <p className="text-muted-foreground text-lg">
          We envision a future where every celebration is elevated with our
          exceptional culinary expertise and dedicated service.
        </p>
      </motion.div>

    </div>
  </div>
</section>

        {/* Our Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and how we serve our clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="p-8 h-full">
                    <div className="text-primary mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground text-lg">Events Catered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-secondary mb-2">10,000+</div>
                <div className="text-muted-foreground text-lg">Happy Guests</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">100+</div>
                <div className="text-muted-foreground text-lg">Menu Items</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-secondary mb-2">15+</div>
                <div className="text-muted-foreground text-lg">Years Experience</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Dedicated professionals committed to excellence in every aspect of our service.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-all">
                    <div className="h-48 overflow-hidden bg-gradient-to-b from-primary/10 to-secondary/5">
                      <div 
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${member.image})` }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-foreground mb-1">{member.name}</h3>
                      <p className="text-primary font-semibold mb-3">{member.role}</p>
                      <p className="text-muted-foreground text-sm">{member.bio}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
