'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function GalleryPage() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // const galleryImages = {
  //   wedding: [
  //     { src: '/hero-wedding-catering.jpg', title: 'Wedding Feast' },
  //     { src: '/gallery-wedding-2.jpg', title: 'Elegant Wedding Setup' },
  //     { src: '/buffet-setup.jpg', title: 'Wedding Buffet' },
  //     { src: '/wedding-feast.jpg', title: 'Traditional Wedding Spread' },
  //     { src: '/hero-wedding-catering.jpg', title: 'Wedding Decoration' },
  //     { src: '/gallery-wedding-2.jpg', title: 'Celebration Moment' },
  //   ],
  //   birthday: [
  //     { src: '/birthday-party-catering.jpg', title: 'Birthday Setup' },
  //     { src: '/traditional-sweets.jpg', title: 'Birthday Sweets' },
  //     { src: '/paneer-tikka.jpg', title: 'Birthday Starters' },
  //     { src: '/birthday-party-catering.jpg', title: 'Party Buffet' },
  //     { src: '/traditional-sweets.jpg', title: 'Celebration Sweets' },
  //     { src: '/paneer-tikka.jpg', title: 'Party Appetizers' },
  //   ],
  //   buffet: [
  //     { src: '/buffet-setup.jpg', title: 'Full Buffet Setup' },
  //     { src: '/wedding-feast.jpg', title: 'Multiple Station Buffet' },
  //     { src: '/traditional-meal-spread.jpg', title: 'Main Course Buffet' },
  //     { src: '/buffet-setup.jpg', title: 'Catering Service' },
  //     { src: '/wedding-feast.jpg', title: 'Event Buffet' },
  //     { src: '/traditional-meal-spread.jpg', title: 'Food Service' },
  //   ],
  //   traditional: [
  //     { src: '/traditional-meal-spread.jpg', title: 'Traditional Meal' },
  //     { src: '/paneer-butter-masala.jpg', title: 'Paneer Curry' },
  //     { src: '/veg-biryani.jpg', title: 'Vegetarian Biryani' },
  //     { src: '/chicken-curry.jpg', title: 'Chicken Preparation' },
  //     { src: '/paneer-tikka.jpg', title: 'Tandoori Items' },
  //     { src: '/traditional-meal-spread.jpg', title: 'Complete Meal' },
  //   ],
  //   desserts: [
  //     { src: '/dessert-table.jpg', title: 'Dessert Table' },
  //     { src: '/traditional-sweets.jpg', title: 'Traditional Sweets' },
  //     { src: '/gulab-jamun.jpg', title: 'Gulab Jamun' },
  //     { src: '/traditional-sweets.jpg', title: 'Sweet Selection' },
  //     { src: '/dessert-table.jpg', title: 'Dessert Spread' },
  //     { src: '/gulab-jamun.jpg', title: 'Sweet Presentation' },
  //   ],
  // };

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
              <h1 className="text-5xl font-bold text-foreground mb-4">Gallery</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our beautiful catering events and see the elegance and quality we bring to every celebration.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Gallery Section */}
        {/* <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Tabs defaultValue="wedding" className="w-full">
              <TabsList className="grid w-full grid-cols-5 mb-12 bg-background border border-border rounded-lg">
                <TabsTrigger value="wedding">Wedding</TabsTrigger>
                <TabsTrigger value="birthday">Birthday</TabsTrigger>
                <TabsTrigger value="buffet">Buffet</TabsTrigger>
                <TabsTrigger value="traditional">Traditional</TabsTrigger>
                <TabsTrigger value="desserts">Desserts</TabsTrigger>
              </TabsList> */}

              {/* Wedding Gallery */}
              {/* <TabsContent value="wedding">
                <div className="grid md:grid-cols-3 gap-6">
                  {galleryImages.wedding.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredImage(image.src)}
                      onMouseLeave={() => setHoveredImage(null)}
                      className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-end p-4 group-hover:p-6 transition-all duration-300">
                        <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent> */}

              {/* Birthday Gallery */}
              {/* <TabsContent value="birthday">
                <div className="grid md:grid-cols-3 gap-6">
                  {galleryImages.birthday.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredImage(image.src)}
                      onMouseLeave={() => setHoveredImage(null)}
                      className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-end p-4 group-hover:p-6 transition-all duration-300">
                        <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent> */}

              {/* Buffet Gallery */}
              {/* <TabsContent value="buffet">
                <div className="grid md:grid-cols-3 gap-6">
                  {galleryImages.buffet.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredImage(image.src)}
                      onMouseLeave={() => setHoveredImage(null)}
                      className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-end p-4 group-hover:p-6 transition-all duration-300">
                        <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent> */}

              {/* Traditional Gallery */}
              {/* <TabsContent value="traditional">
                <div className="grid md:grid-cols-3 gap-6">
                  {galleryImages.traditional.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredImage(image.src)}
                      onMouseLeave={() => setHoveredImage(null)}
                      className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-end p-4 group-hover:p-6 transition-all duration-300">
                        <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent> */}

              {/* Desserts Gallery */}
              {/* <TabsContent value="desserts">
                <div className="grid md:grid-cols-3 gap-6">
                  {galleryImages.desserts.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      viewport={{ once: true }}
                      onMouseEnter={() => setHoveredImage(image.src)}
                      onMouseLeave={() => setHoveredImage(null)}
                      className="group relative h-64 rounded-lg overflow-hidden cursor-pointer"
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${image.src})` }}
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-end p-4 group-hover:p-6 transition-all duration-300">
                        <h3 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {image.title}
                        </h3>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent> */}
            {/* </Tabs>
          </div>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
