 import { motion } from 'framer-motion';
 import { Button } from '@/components/ui/button';
 import { Service } from '@/data/apartments';
 import { Link } from 'react-router-dom';
 
 interface ServiceCardProps {
   service: Service;
   index?: number;
 }
 
 export function ServiceCard({ service, index = 0 }: ServiceCardProps) {
   return (
     <motion.div
       initial={{ opacity: 0, y: 20 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="card-elevated group overflow-hidden rounded-2xl bg-card"
     >
       <div className="relative aspect-[16/10] overflow-hidden">
         <img
           src={service.image}
           alt={service.title}
           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
         <h3 className="absolute bottom-4 left-4 text-xl font-bold text-background">
           {service.title}
         </h3>
       </div>
       <div className="p-5">
         <p className="mb-4 text-sm text-muted-foreground">
           {service.description}
         </p>
         <ul className="mb-4 grid grid-cols-2 gap-2">
           {service.features.map((feature) => (
             <li key={feature} className="flex items-center gap-2 text-sm">
               <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
               {feature}
             </li>
           ))}
         </ul>
         <Button asChild variant="cta" className="w-full">
           <Link to="/apartments/contact">Inquire Now</Link>
         </Button>
       </div>
     </motion.div>
   );
 }