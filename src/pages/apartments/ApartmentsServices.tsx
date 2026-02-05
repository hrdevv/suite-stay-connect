 import { motion } from 'framer-motion';
 import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
 import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
 import { ServiceCard } from '@/components/apartments/ServiceCard';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 import { services } from '@/data/apartments';
 import hero3 from '@/assets/apartments/hero-3.jpg';
 
 export default function ApartmentsServices() {
   return (
     <div className="min-h-screen bg-background">
       <ApartmentsNavigation />
       
       {/* Hero */}
       <section className="relative h-[50vh] min-h-[400px]">
         <img
           src={hero3}
           alt="Our Services"
           className="absolute inset-0 h-full w-full object-cover"
         />
         <div className="hero-overlay absolute inset-0" />
         <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-stylish mb-4 text-4xl text-primary-foreground md:text-6xl"
           >
             Spaces for Every Occasion
           </motion.h1>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl text-lg text-primary-foreground/90"
           >
             From cozy apartments to grand celebrations
           </motion.p>
         </div>
       </section>
 
       {/* Services Grid */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12 text-center"
           >
             <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
               Our <span className="text-gradient">Services</span>
             </h2>
             <p className="mx-auto max-w-2xl text-muted-foreground">
               Whether you need a comfortable stay, a venue for your event, or a professional 
               space for business, we have you covered.
             </p>
           </motion.div>
 
           <div className="grid gap-8 md:grid-cols-2">
             {services.map((service, index) => (
               <ServiceCard key={service.id} service={service} index={index} />
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA */}
       <section className="bg-muted py-16 md:py-24">
         <div className="container mx-auto px-4 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
               Ready to Get Started?
             </h2>
             <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
               Contact us today to discuss your requirements and get a personalized quote.
             </p>
             <Button asChild variant="cta" size="xl">
               <Link to="/apartments/contact">Make an Inquiry</Link>
             </Button>
           </motion.div>
         </div>
       </section>
 
       <ApartmentsFooter />
     </div>
   );
 }