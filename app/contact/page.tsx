'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    guestCount: '',
    eventDate: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        eventType: '',
        guestCount: '',
        eventDate: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone size={32} />,
      title: 'Phone',
      value: '+1 (234) 567-890',
      link: 'tel:+1234567890',
    },
    {
      icon: <Mail size={32} />,
      title: 'Email',
      value: 'hello@vaibhavam.com',
      link: 'mailto:hello@vaibhavam.com',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Location',
      value: '123 Celebration St, Event City, EC 12345',
    },
    {
      icon: <Clock size={32} />,
      title: 'Hours',
      value: 'Mon - Sun, 9:00 AM - 9:00 PM',
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
              <h1 className="text-5xl font-bold text-foreground mb-4">Contact Us</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get in touch with our team to discuss your catering needs and book your next event.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link || '#'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center text-center p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors group"
                >
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-muted-foreground">{info.value}</p>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Send us an Inquiry</h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="bg-card p-8 rounded-lg border border-border">
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mb-6 p-4 bg-green-100 border border-green-500 text-green-700 rounded-lg"
                  >
                    Thank you for your inquiry! We'll get back to you soon.
                  </motion.div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Full Name *</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Phone *</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      required
                      className="border border-border"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Email *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                      className="border border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Event Type *</label>
                    <Select value={formData.eventType} onValueChange={(value) => handleSelectChange('eventType', value)}>
                      <SelectTrigger className="border border-border">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="birthday">Birthday Party</SelectItem>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="housewarming">Housewarming</SelectItem>
                        <SelectItem value="festival">Festival Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Number of Guests *</label>
                    <Select value={formData.guestCount} onValueChange={(value) => handleSelectChange('guestCount', value)}>
                      <SelectTrigger className="border border-border">
                        <SelectValue placeholder="Select guest count" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="20-50">20-50 Guests</SelectItem>
                        <SelectItem value="51-100">51-100 Guests</SelectItem>
                        <SelectItem value="101-200">101-200 Guests</SelectItem>
                        <SelectItem value="201-500">201-500 Guests</SelectItem>
                        <SelectItem value="500+">500+ Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-foreground font-semibold mb-2">Event Date *</label>
                    <Input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="border border-border"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-foreground font-semibold mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event and any special requirements..."
                    rows={6}
                    className="border border-border"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  q: 'How far in advance should I book?',
                  a: 'We recommend booking at least 2-4 weeks in advance for standard events, and 2-3 months for large weddings.',
                },
                {
                  q: 'Do you accommodate dietary restrictions?',
                  a: 'Yes, we provide vegetarian, vegan, and other dietary accommodations. Please mention them during booking.',
                },
                {
                  q: 'What is your cancellation policy?',
                  a: 'Cancellations made 30+ days before the event receive a full refund. Lesser notice incurs a 50% charge.',
                },
                {
                  q: 'Do you provide service staff?',
                  a: 'Yes, our professional service staff is included in our catering packages.',
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
                >
                  <h3 className="font-bold text-lg text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
