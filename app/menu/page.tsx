'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { MenuItem } from '@/components/menu-item';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MenuPage() {
  const menuItems = {
    veg: [
      { name: 'Paneer Butter Masala', description: 'Cottage cheese in creamy tomato sauce', image: '/paneer-butter-masala.jpg' },
      { name: 'Veg Biryani', description: 'Fragrant rice with mixed vegetables', image: '/veg-biryani.jpg' },
      { name: 'Dal Tadka', description: 'Yellow lentils with aromatic tempering', image: '/paneer-butter-masala.jpg' },
      { name: 'Mixed Vegetable Curry', description: 'Seasonal vegetables in aromatic gravy', image: '/wedding-feast.jpg' },
      { name: 'Palak Paneer', description: 'Cottage cheese in spinach sauce', image: '/paneer-butter-masala.jpg' },
      { name: 'Jeera Rice', description: 'Basmati rice flavored with cumin', image: '/veg-biryani.jpg' },
      { name: 'Veg Pulao', description: 'Fragrant rice with vegetables', image: '/wedding-feast.jpg' },
      { name: 'Chana Masala', description: 'Chickpeas in spiced tomato sauce', image: '/paneer-butter-masala.jpg' },
    ],
    nonveg: [
      { name: 'Chicken Biryani', description: 'Fragrant rice with tender chicken', image: '/chicken-curry.jpg' },
      { name: 'Chicken Curry', description: 'Tender chicken in aromatic gravy', image: '/chicken-curry.jpg' },
      { name: 'Mutton Curry', description: 'Slow-cooked mutton in traditional spices', image: '/wedding-feast.jpg' },
      { name: 'Fish Fry', description: 'Crispy fried fish with traditional spices', image: '/paneer-tikka.jpg' },
      { name: 'Butter Chicken', description: 'Tender chicken in creamy tomato sauce', image: '/chicken-curry.jpg' },
      { name: 'Egg Curry', description: 'Boiled eggs in aromatic spiced sauce', image: '/wedding-feast.jpg' },
      { name: 'Tandoori Chicken', description: 'Marinated and roasted chicken', image: '/paneer-tikka.jpg' },
      { name: 'Prawn Curry', description: 'Fresh prawns in traditional curry', image: '/chicken-curry.jpg' },
    ],
    starters: [
      { name: 'Veg Manchurian', description: 'Crispy vegetable balls in Indo-Chinese sauce', image: '/paneer-tikka.jpg' },
      { name: 'Paneer Tikka', description: 'Marinated cottage cheese cooked in tandoor', image: '/paneer-tikka.jpg' },
      { name: 'Chicken 65', description: 'Spicy and crispy chicken appetizer', image: '/paneer-tikka.jpg' },
      { name: 'Samosa', description: 'Fried pastry with potato and pea filling', image: '/birthday-party-catering.jpg' },
      { name: 'Spring Rolls', description: 'Vegetable filled crispy rolls', image: '/paneer-tikka.jpg' },
      { name: 'Pakoda', description: 'Battered and fried vegetable fritters', image: '/birthday-party-catering.jpg' },
      { name: 'Chicken Tikka', description: 'Marinated chicken cooked in tandoor', image: '/paneer-tikka.jpg' },
      { name: 'Onion Bhaji', description: 'Crispy onion fritters', image: '/birthday-party-catering.jpg' },
    ],
    sweets: [
      { name: 'Gulab Jamun', description: 'Soft pastry balls in sweet syrup', image: '/gulab-jamun.jpg' },
      { name: 'Rasgulla', description: 'Soft cheese balls in sweet syrup', image: '/traditional-sweets.jpg' },
      { name: 'Ladoo', description: 'Traditional sweet round balls', image: '/traditional-sweets.jpg' },
      { name: 'Kaju Katli', description: 'Cashew fudge with cardamom flavor', image: '/traditional-sweets.jpg' },
      { name: 'Payasam', description: 'Sweet rice pudding with nuts and raisins', image: '/gulab-jamun.jpg' },
      { name: 'Jalebi', description: 'Crispy spirals in sweet syrup', image: '/traditional-sweets.jpg' },
      { name: 'Barfi', description: 'Milk fudge with various flavors', image: '/gulab-jamun.jpg' },
      { name: 'Kheer', description: 'Creamy rice pudding with cardamom', image: '/gulab-jamun.jpg' },
    ],
    beverages: [
      { name: 'Fresh Lime Juice', description: 'Refreshing lime with mineral water', image: '/wedding-feast.jpg' },
      { name: 'Badam Milk', description: 'Almond milk with warm spices', image: '/paneer-butter-masala.jpg' },
      { name: 'Mango Juice', description: 'Fresh mango juice', image: '/wedding-feast.jpg' },
      { name: 'Buttermilk', description: 'Traditional spiced buttermilk', image: '/paneer-butter-masala.jpg' },
      { name: 'Soft Drinks', description: 'Various carbonated beverages', image: '/birthday-party-catering.jpg' },
      { name: 'Lassi', description: 'Traditional yogurt drink with mango', image: '/paneer-butter-masala.jpg' },
      { name: 'Masala Tea', description: 'Spiced Indian tea with milk', image: '/wedding-feast.jpg' },
      { name: 'Fruit Punch', description: 'Mixed fruit refreshing punch', image: '/birthday-party-catering.jpg' },
    ],
  };

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
              <h1 className="text-5xl font-bold text-foreground mb-4">Our Menu</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse range of authentic dishes, from traditional vegetarian specialties to premium non-vegetarian selections, snacks, sweets, and refreshing beverages.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Menu Tabs */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tabs defaultValue="veg" className="w-full">
                <TabsList className="grid w-full grid-cols-5 mb-12 bg-background border border-border rounded-lg">
                  <TabsTrigger value="veg">Veg Menu</TabsTrigger>
                  <TabsTrigger value="nonveg">Non-Veg</TabsTrigger>
                  <TabsTrigger value="starters">Starters</TabsTrigger>
                  <TabsTrigger value="sweets">Sweets</TabsTrigger>
                  <TabsTrigger value="beverages">Drinks</TabsTrigger>
                </TabsList>

                {/* Vegetarian Menu */}
                <TabsContent value="veg">
                  <div className="grid md:grid-cols-4 gap-6">
                    {menuItems.veg.map((item, index) => (
                      <MenuItem key={index} {...item} index={index} />
                    ))}
                  </div>
                </TabsContent>

                {/* Non-Vegetarian Menu */}
                <TabsContent value="nonveg">
                  <div className="grid md:grid-cols-4 gap-6">
                    {menuItems.nonveg.map((item, index) => (
                      <MenuItem key={index} {...item} index={index} />
                    ))}
                  </div>
                </TabsContent>

                {/* Starters */}
                <TabsContent value="starters">
                  <div className="grid md:grid-cols-4 gap-6">
                    {menuItems.starters.map((item, index) => (
                      <MenuItem key={index} {...item} index={index} />
                    ))}
                  </div>
                </TabsContent>

                {/* Sweets */}
                <TabsContent value="sweets">
                  <div className="grid md:grid-cols-4 gap-6">
                    {menuItems.sweets.map((item, index) => (
                      <MenuItem key={index} {...item} index={index} />
                    ))}
                  </div>
                </TabsContent>

                {/* Beverages */}
                <TabsContent value="beverages">
                  <div className="grid md:grid-cols-4 gap-6">
                    {menuItems.beverages.map((item, index) => (
                      <MenuItem key={index} {...item} index={index} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-4">Custom Menu Available</h2>
              <p className="text-lg text-white/90 mb-8">
                Don't see what you're looking for? We can create a customized menu tailored to your preferences.
              </p>
              <button className="bg-white hover:bg-background text-primary font-semibold px-8 py-3 rounded-lg transition-colors">
                Contact Us for Custom Menu
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
