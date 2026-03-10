'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  image?: string;
  href?: string;
}

export function ServiceCard({ icon, title, description, image, href }: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ translateY: -4 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="group overflow-hidden h-full hover:shadow-lg transition-all">
        {image && (
          <div className="relative h-48 overflow-hidden bg-gradient-to-b from-primary/10 to-secondary/5">
            <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-300" style={{ backgroundImage: `url(${image})` }} />
          </div>
        )}
        <div className="p-6">
          <div className="text-primary mb-3 text-4xl">
            {icon}
          </div>
          <h3 className="font-bold text-xl text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4 text-sm">{description}</p>
          {href && (
            <a href={href} className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
              Learn More
              <ArrowRight size={16} />
            </a>
          )}
        </div>
      </Card>
    </motion.div>
  );
}
