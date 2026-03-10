'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image: string;
  index?: number;
}

export function TestimonialCard({ name, role, quote, rating, image, index = 0 }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-all border-2 border-transparent hover:border-primary/20">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={18}
              className={i < rating ? 'fill-accent text-accent' : 'text-muted'}
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-foreground mb-4 italic">"{quote}"</p>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
            />
          </div>
          <div>
            <p className="font-bold text-foreground">{name}</p>
            <p className="text-muted-foreground text-sm">{role}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
