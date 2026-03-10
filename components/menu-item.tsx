'use client';

import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface MenuItemProps {
  name: string;
  description: string;
  image: string;
  index?: number;
}

export function MenuItem({ name, description, image, index = 0 }: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      viewport={{ once: true }}
    >
      <Card className="group overflow-hidden h-full hover:shadow-lg transition-all">
        <div className="relative h-40 overflow-hidden bg-gradient-to-b from-primary/10 to-secondary/5">
          <div 
            className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        <div className="p-4">
          <h4 className="font-bold text-lg text-foreground mb-1">{name}</h4>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
