 import { motion } from 'framer-motion';
 import { LucideIcon } from 'lucide-react';
 
 interface FeatureCardProps {
   icon: LucideIcon;
   title: string;
   description: string;
   index?: number;
 }
 
 export function FeatureCard({ icon: Icon, title, description, index = 0 }: FeatureCardProps) {
   return (
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="group rounded-2xl bg-card p-6 text-center transition-all hover:bg-accent"
     >
       <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
         <Icon className="h-7 w-7" />
       </div>
       <h3 className="mb-2 font-semibold text-foreground">{title}</h3>
       <p className="text-sm text-muted-foreground">{description}</p>
     </motion.div>
   );
 }