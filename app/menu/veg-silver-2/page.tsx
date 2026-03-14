'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function VegSilverMenu2Page() {

  const menu = [
    {
      title: "Welcome Drink (Any 1)",
      items: [
        "Season Juice",
        "Fruit Punch",
        "Badam Milk"
      ]
    },
    {
      title: "Welcome Starter (Any 1)",
      items: [
        "Veg Manchurian",
        "Corn Samosa",
        "Veg Spring Roll",
        "Veg Bullet",
        "Hara Hara Kabab"
      ]
    },
    {
      title: "Sweet (Any 2)",
      items: [
        "Bobbatlu",
        "Jamoon",
        "Double Ka Meetha",
        "Badusha",
        "Jilebi",
        "Poornam",
        "Chakkara Pongal",
        "Laddu",
        "Carrot Halwa",
        "Semya Kesari"
      ]
    },
    {
      title: "Hot Item (Any 1)",
      items: [
        "Mirchi Bajji",
        "Aloo Bajji",
        "Minapa Gare",
        "Masala Gare",
        "Pakoda",
        "Veg Manchurian",
        "Gobi Manchurian",
        "Corn Samosa"
      ]
    },
    {
      title: "Indian Bread (Any 1)",
      items: [
        "Rumali Roti",
        "Poori",
        "Pulka",
        "Chapathi"
      ]
    },
    {
      title: "Flavour Rice (Any 1)",
      items: [
        "Veg Biryani",
        "Bagara Rice",
        "Jeera Rice",
        "Coconut Rice",
        "Veg Dum Biryani",
        "Panasakaya Biryani",
        "Paneer Dum Biryani"
      ]
    },
    {
      title: "Common Masala Curry (Any 1)",
      items: [
        "Vankaya Masala",
        "Aloo Kurma",
        "Mixed Veg Kurma",
        "Mirchi Ka Salan"
      ]
    },
    {
      title: "Special Masala Curry (Any 1)",
      items: [
        "Paneer Butter Masala",
        "Chole Masala",
        "Palak Paneer",
        "Kadai Paneer"
      ]
    },
    {
      title: "Veg Fry (Any 1)",
      items: [
        "Bhendi Fry",
        "Dondakaya Fry",
        "Cabbage Fry",
        "Aloo Fry",
        "Gobi 65"
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
        "Pickle",
        "Green Salad",
        "Sweet Pan",
        "Ice Cream",
        "Raitha"
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
                Veg Silver Menu - 2
              </h1>

              <p className="text-lg text-muted-foreground">
                A premium vegetarian catering package including welcome drinks,
                starters, sweets, breads, biryani varieties, and rich curries.
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
                src="/images/veg-silver-menu2.jpg"
                alt="Veg Silver Menu 2"
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
              Contact us to customize this premium vegetarian catering menu
              for weddings, receptions, and special celebrations.
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