'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function VegBasicMenuPage() {

  const menu = [
    {
      title: "Sweet (Any 1)",
      items: [
        "Rava Kesari",
        "Payasam",
        "Badusha",
        "Jilebi",
        "Chakkara Pongal",
        "Bobbatlu",
        "Poornam",
        "Jamoon",
        "Double Ka Meetha"
      ]
    },
    {
      title: "Hot Item (Any 1)",
      items: [
        "Mirchi Bajji",
        "Aloo Bajji",
        "Masala Gare"
      ]
    },
    {
      title: "Flavour Rice (Any 1)",
      items: [
        "Pulihora",
        "Lemon Rice",
        "Pudina Rice",
        "Karvepaku Rice",
        "Kothimir Rice",
        "Jeera Rice",
        "Veg Biryani",
        "Bagara Rice"
      ]
    },
    {
      title: "Veg Curry (Any 1)",
      items: [
        "Vankaya Masala",
        "Aloo Kurma",
        "Mixed Veg Kurma",
        "Mirchi Ka Salan"
      ]
    },
    {
      title: "Veg Fry (Any 1)",
      items: [
        "Bendi Fry",
        "Dondakaya Fry",
        "Aloo Fry",
        "Cabbage Fry",
        "Aratikaya Fry"
      ]
    },
    {
      title: "Main Items",
      items: [
        "Plain Rice",
        "Dal",
        "Sambar",
        "Papad",
        "Curd",
        "Chutney",
        "Raitha",
        "Mouth Freshener"
      ]
    }
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

              <h1 className="text-5xl font-bold text-foreground mb-4">
                Veg Basic Menu
              </h1>

              <p className="text-lg text-muted-foreground">
                A delicious vegetarian catering menu featuring traditional
                sweets, hot snacks, rice varieties, curries, and classic
                South Indian accompaniments.
              </p>

            </motion.div>

          </div>
        </section>


        {/* Image + Menu */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[500px] w-full rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src="/images/veg-basic-menu.jpg"
                alt="Veg Basic Menu"
                fill
                className="object-cover"
              />
            </motion.div>


            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >

              {menu.map((section, index) => (

                <div
                  key={index}
                  className="border rounded-xl p-6 shadow-sm bg-white"
                >

                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {section.title}
                  </h2>

                  <ul className="space-y-2 text-muted-foreground">

                    {section.items.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}

                  </ul>

                </div>

              ))}

            </motion.div>

          </div>

        </section>


        {/* CTA */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 px-4">

          <div className="max-w-4xl mx-auto text-center">

            <h2 className="text-3xl font-bold text-white mb-4">
              Book This Menu for Your Event
            </h2>

            <p className="text-white/90 mb-8">
              Contact us to customize this vegetarian catering menu for
              weddings, functions, and celebrations.
            </p>

            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Contact Us
            </button>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}