// 'use client';

// import { motion } from 'framer-motion';
// import { Navbar } from '@/components/navbar';
// import { Footer } from '@/components/footer';
// import { ServiceCard } from '@/components/service-card';
// import { MenuItem } from '@/components/menu-item';
// import { TestimonialCard } from '@/components/testimonial-card';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, UtensilsCrossed, Users, Sparkles, Award, Leaf, Wine } from 'lucide-react';
// import Link from 'next/link';

// export default function Home() {
//   const services = [
//     {
//       icon: <UtensilsCrossed />,
//       title: 'Wedding Catering',
//       description: 'Traditional wedding feast with large variety of authentic dishes.',
//       href: '/services#wedding',
//     },
//     {
//       icon: <Users />,
//       title: 'Birthday Parties',
//       description: 'Fun menu with snacks, sweets, and drinks for all ages.',
//       href: '/services#birthday',
//     },
//     {
//       icon: <Sparkles />,
//       title: 'Corporate Events',
//       description: 'Professional catering for office events and business gatherings.',
//       href: '/services#corporate',
//     },
//     {
//       icon: <Award />,
//       title: 'Housewarming Functions',
//       description: 'Perfect menu for celebrating new beginnings and gatherings.',
//       href: '/services#housewarming',
//     },
//     {
//       icon: <Leaf />,
//       title: 'Festivals & Gatherings',
//       description: 'Special menus for Diwali, Sankranti, Ugadi, and celebrations.',
//       href: '/services#festivals',
//     },
//     {
//       icon: <Wine />,
//       title: 'Custom Menus',
//       description: 'Personalized menus tailored to your event and preferences.',
//       href: '/services#custom',
//     },
//   ];

//   const packages = [
//   {
//     title: "Veg Packages",
//     image: "/traditional-meal-spread.jpg",
//     items: [
//       { name: "South indian Veg Menu -1", link: "/menu/veg-basic" },
//       { name: "South indian Veg Menu -2", link: "/menu/veg-basic-2" },
//       { name: "Veg Basic Menu", link: "/menu/veg-basic-menu" },
//     ],
//   },
//   {
//     title: "Non-Veg Packages",
//     image: "/wedding-feast.jpg",
//     items: [
//       { name: "Non-Veg Basic", link: "/menu/nonveg-basic" },
//       { name: "Non-Veg Standard", link: "/menu/nonveg-standard" },
//       { name: "Non-Veg Silver", link: "/menu/nonveg-silver" },
//     ],
//   },
//   {
//     title: "Special Packages",
//     image: "/images/veg-package.jpg",
//     items: [
//       { name: "Telangana / Andhra / Rayalaseema", link: "/menu/telangana" },
//     ],
//   },
// ];
//   const testimonials = [
//     {
//       name: 'Priya Sharma',
//       role: 'Wedding Couple',
//       quote: 'The food was delicious and service was excellent for our wedding. Every guest praised the authentic flavors and presentation.',
//       rating: 5,
//       image: '/placeholder-user.jpg',
//     },
//     {
//       name: 'Rajesh Patel',
//       role: 'Corporate Client',
//       quote: 'Professional service, incredible variety, and outstanding food quality. Vaibhavam Caterers exceeded all our expectations.',
//       rating: 5,
//       image: '/placeholder-user.jpg',
//     },
//     {
//       name: 'Ananya Verma',
//       role: 'Birthday Celebration',
//       quote: 'The best catering service for traditional events. The team was courteous and the food was absolutely delightful.',
//       rating: 5,
//       image: '/placeholder-user.jpg',
//     },
//   ];

//   const whyChooseUs = [
//     {
//       icon: <Award size={32} />,
//       title: 'Authentic Traditional Recipes',
//       description: 'Generations of culinary expertise in every dish',
//     },
//     {
//       icon: <Leaf size={32} />,
//       title: 'Fresh Ingredients',
//       description: 'Sourced locally for quality and taste',
//     },
//     {
//       icon: <Users size={32} />,
//       title: 'Professional Service',
//       description: 'Expert staff ensuring memorable experiences',
//     },
//     {
//       icon: <Sparkles size={32} />,
//       title: 'Customizable Menu',
//       description: 'Tailored to your preferences and dietary needs',
//     },
//   ];

//   return (
//     <>
//       <Navbar />
      
//       <main className="min-h-screen">
//         {/* Hero Section */}
//         <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-secondary/5 overflow-hidden">
//           {/* Background Image */}
//           <div 
//             className="absolute inset-0 z-0 opacity-30"
//             style={{
//               backgroundImage: 'url(/image.png)',
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//             }}
//           />
          
//           {/* Content */}
//           <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
//                 Authentic Flavors for 
//                 <span className="text-primary"> Memorable Celebrations</span>
//               </h1>
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.1 }}
//               className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance"
//             >
//               Vaibhavam Caterers brings traditional taste and exceptional service to weddings, birthdays, and special gatherings.
//             </motion.p>

//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               className="flex flex-col sm:flex-row gap-4 justify-center"
//             >
//               <Button className="bg-primary hover:bg-secondary text-white px-8 py-6 text-lg font-semibold rounded-lg flex items-center gap-2 w-full sm:w-auto justify-center">
//                 View Menu
//                 <ArrowRight size={20} />
//               </Button>
//               <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg font-semibold rounded-lg w-full sm:w-auto">
//                 Book Catering
//               </Button>
//             </motion.div>
//           </div>
//         </section>

//         {/* Services Highlight Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Services</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Comprehensive catering solutions for every type of celebration and gathering.
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {services.map((service, index) => (
//                 <div key={index}>
//                   <ServiceCard {...service} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Food Categories Preview */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
//   <div className="max-w-7xl mx-auto">

//     {/* Heading */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="text-center mb-16"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//         Our Menu Packages
//       </h2>

//       <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//         Choose from our carefully crafted vegetarian, non-vegetarian,
//         and regional catering packages.
//       </p>
//     </motion.div>


//     {/* Package Cards */}
//     <div className="grid md:grid-cols-3 gap-8">

//       {packages.map((pkg, index) => (

//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//         >

//           {/* Image */}
//           <div className="relative h-52 w-full">
//             <Image
//               src={pkg.image}
//               alt={pkg.title}
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Content */}
//           <div className="p-6">

//             <h3 className="text-2xl font-bold text-primary mb-4">
//               {pkg.title}
//             </h3>

//             <ul className="space-y-2">

//               {pkg.items.slice(0,3).map((item, i) => (
//                 <li key={i}>
//                   <Link
//                     href={item.link}
//                     className="text-muted-foreground hover:text-primary transition"
//                   >
//                     • {item.name}
//                   </Link>
//                 </li>
//               ))}

//             </ul>

//             <Link
//               href="/menu"
//               className="inline-block mt-4 text-primary font-semibold hover:underline"
//             >
//               View Packages →
//             </Link>

//           </div>

//         </motion.div>

//       ))}

//     </div>


//     {/* Button */}
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="text-center mt-12"
//     >
//       <Link href="/menu">
//         <button className="bg-primary hover:bg-secondary text-white px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 mx-auto">
//           View Full Menu
//         </button>
//       </Link>
//     </motion.div>

//   </div>
// </section>

//         {/* Why Choose Us */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-secondary/5">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Why Choose Vaibhavam?</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Experience the difference with our commitment to quality and tradition.
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-2 gap-12">
//               {whyChooseUs.map((item, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: index * 0.1, duration: 0.4 }}
//                   viewport={{ once: true }}
//                   className="flex gap-6"
//                 >
//                   <div className="text-primary flex-shrink-0 pt-1">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
//                     <p className="text-muted-foreground">{item.description}</p>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Testimonials */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
//           <div className="max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//               className="text-center mb-16"
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Clients Say</h2>
//               <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//                 Trusted by hundreds of families for memorable celebrations.
//               </p>
//             </motion.div>

//             <div className="grid md:grid-cols-3 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <TestimonialCard key={index} {...testimonial} index={index} />
//               ))}
//             </div>

//             <div className="mt-16 text-center">
//               <p className="text-lg text-muted-foreground mb-4">Trusted for events:</p>
//               <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-foreground">
//                 <span className="px-4 py-2 bg-primary/10 rounded-full">500+ Events Catered</span>
//                 <span className="px-4 py-2 bg-secondary/10 rounded-full">100+ Menu Items</span>
//                 <span className="px-4 py-2 bg-accent/10 rounded-full">Thousands of Happy Guests</span>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
//           <div className="max-w-4xl mx-auto text-center">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Planning an Event?</h2>
//               <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
//                 Let's create something memorable together. Get in touch with our team to discuss your catering needs.
//               </p>
//               <Button className="bg-white hover:bg-background text-primary font-semibold px-8 py-3 text-lg rounded-lg flex items-center gap-2 mx-auto">
//                 Book Catering Now
//                 <ArrowRight size={20} />
//               </Button>
//             </motion.div>
//           </div>
//         </section>
//       </main>

//       <Footer />
//     </>
//   );
// }
'use client';

import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ServiceCard } from '@/components/service-card';
import { TestimonialCard } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import { ArrowRight, UtensilsCrossed, Users, Sparkles, Award, Leaf, Wine } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image'; // ✅ FIXED IMPORT

export default function Home() {

  const services = [
    {
      icon: <UtensilsCrossed />,
      title: 'Wedding Catering',
      description: 'Traditional wedding feast with large variety of authentic dishes.',
      href: '/services#wedding',
    },
    {
      icon: <Users />,
      title: 'Birthday Parties',
      description: 'Fun menu with snacks, sweets, and drinks for all ages.',
      href: '/services#birthday',
    },
    {
      icon: <Sparkles />,
      title: 'Corporate Events',
      description: 'Professional catering for office events and business gatherings.',
      href: '/services#corporate',
    },
    {
      icon: <Award />,
      title: 'Housewarming Functions',
      description: 'Perfect menu for celebrating new beginnings and gatherings.',
      href: '/services#housewarming',
    },
    {
      icon: <Leaf />,
      title: 'Festivals & Gatherings',
      description: 'Special menus for Diwali, Sankranti, Ugadi, and celebrations.',
      href: '/services#festivals',
    },
    {
      icon: <Wine />,
      title: 'Custom Menus',
      description: 'Personalized menus tailored to your event and preferences.',
      href: '/services#custom',
    },
  ];

  const packages = [
    {
      title: "Veg Packages",
      image: "/traditional-meal-spread.jpg",
      items: [
        { name: "South indian Veg Menu -1", link: "/menu/veg-basic" },
        { name: "South indian Veg Menu -2", link: "/menu/veg-basic-2" },
        { name: "Veg Basic Menu", link: "/menu/veg-basic-menu" },
      ],
    },
    {
      title: "Non-Veg Packages",
      image: "/wedding-feast.jpg",
      items: [
        { name: "Non-Veg Basic", link: "/menu/nonveg-basic" },
        { name: "Non-Veg Standard", link: "/menu/nonveg-standard" },
        { name: "Non-Veg Silver", link: "/menu/nonveg-silver" },
      ],
    },
    {
      title: "Special Packages",
      image: "/images/veg-package.jpg",
      items: [
        { name: "Telangana / Andhra / Rayalaseema", link: "/menu/telangana" },
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wedding Couple',
      quote: 'The food was delicious and service was excellent for our wedding.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Rajesh Patel',
      role: 'Corporate Client',
      quote: 'Professional service, incredible variety, and outstanding food quality.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
    {
      name: 'Ananya Verma',
      role: 'Birthday Celebration',
      quote: 'The best catering service for traditional events.',
      rating: 5,
      image: '/placeholder-user.jpg',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Award size={32} />,
      title: 'Authentic Traditional Recipes',
      description: 'Generations of culinary expertise in every dish',
    },
    {
      icon: <Leaf size={32} />,
      title: 'Fresh Ingredients',
      description: 'Sourced locally for quality and taste',
    },
    {
      icon: <Users size={32} />,
      title: 'Professional Service',
      description: 'Expert staff ensuring memorable experiences',
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Customizable Menu',
      description: 'Tailored to your preferences and dietary needs',
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen">

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-secondary/5">

          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(/image.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            >
              Authentic Flavors for
              <span className="text-primary"> Memorable Celebrations</span>
            </motion.h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Vaibhavam Caterers brings traditional taste and exceptional service to weddings and celebrations.
            </p>

            <div className="flex gap-4 justify-center">

              <Link href="/menu">
                <Button className="bg-primary text-white flex items-center gap-2">
                  View Menu
                  <ArrowRight size={20} />
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="outline">
                  Book Catering
                </Button>
              </Link>

            </div>

          </div>

        </section>

        {/* SERVICES */}
        <section className="py-20 bg-card">
          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>

          </div>
        </section>

        {/* MENU PACKAGES */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Our Menu Packages
      </h2>

      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Choose from our vegetarian, non-vegetarian and regional catering packages.
      </p>
    </motion.div>

    {/* Package Cards */}
    <div className="grid md:grid-cols-3 gap-8">

      {packages.map((pkg, index) => (

        <Link key={index} href="/menu">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer"
          >

            {/* Image */}
            <div className="relative h-52 w-full">
              <Image
                src={pkg.image}
                alt={pkg.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Title */}
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-primary">
                {pkg.title}
              </h3>
            </div>

          </motion.div>

        </Link>

      ))}

    </div>

    {/* Button */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mt-12"
    >
      <Link href="/menu">
        <Button className="bg-primary hover:bg-secondary text-white px-8 py-3 text-lg font-semibold rounded-lg flex items-center gap-2 mx-auto">
          View Full Menu
          <ArrowRight size={20} />
        </Button>
      </Link>
    </motion.div>

  </div>
</section>

        {/* WHY CHOOSE US */}
        <section className="py-20 bg-gradient-to-b from-primary/5 to-secondary/5">

          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose Vaibhavam?
            </h2>

            <div className="grid md:grid-cols-2 gap-10">

              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-card">

          <div className="max-w-7xl mx-auto px-4">

            <h2 className="text-4xl font-bold text-center mb-12">
              What Our Clients Say
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <TestimonialCard key={index} {...t} />
              ))}
            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-secondary text-center">

          <h2 className="text-4xl font-bold text-white mb-6">
            Planning an Event?
          </h2>

          <Link href="/contact">
            <Button className="bg-white text-primary">
              Book Catering Now
              <ArrowRight size={20} />
            </Button>
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}