 import { motion } from 'framer-motion';
 import { Heart, Users, Home, Award } from 'lucide-react';
 import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
 import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
 import { Button } from '@/components/ui/button';
 import { Link } from 'react-router-dom';
 import hero1 from '@/assets/apartments/hero-1.jpg';
 import hero2 from '@/assets/apartments/hero-2.jpg';
 
 const values = [
   {
     icon: Heart,
     title: 'Community Impact',
     description: 'Your stay supports women and youth empowerment programs.',
   },
   {
     icon: Award,
     title: 'Quality Assurance',
     description: 'Well-maintained, secure properties with modern amenities.',
   },
   {
     icon: Users,
     title: 'Local Experience',
     description: 'Authentic Nigerian hospitality with personal touch.',
   },
   {
     icon: Home,
     title: 'Transparent Pricing',
     description: 'No hidden fees, competitive rates, flexible booking.',
   },
 ];
 
 export default function ApartmentsAbout() {
   return (
     <div className="min-h-screen bg-background">
       <ApartmentsNavigation />
       
       {/* Hero */}
       <section className="relative h-[50vh] min-h-[400px]">
         <img
           src={hero1}
           alt="About Lifters' Suites"
           className="absolute inset-0 h-full w-full object-cover"
         />
         <div className="hero-overlay absolute inset-0" />
         <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-stylish mb-4 text-4xl text-primary-foreground md:text-6xl"
           >
             More Than a Stay
           </motion.h1>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl text-lg text-primary-foreground/90"
           >
             Every booking supports community empowerment
           </motion.p>
         </div>
       </section>
 
       {/* Story Section */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <div className="grid items-center gap-12 lg:grid-cols-2">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
                 Our <span className="text-gradient">Story</span>
               </h2>
               <div className="space-y-4 text-muted-foreground">
                 <p>
                   Lifters' Suites is a social enterprise initiative proudly supporting 
                   the mission of Lifter's Touch Empowerment Foundation. We believe that 
                   quality hospitality can be a powerful force for positive change.
                 </p>
                 <p>
                   Revenue from our apartment services directly funds community empowerment 
                   programs, helping women and youth across Lagos and Ogun States build 
                   better futures for themselves and their families.
                 </p>
                 <p>
                   When you stay with us, you're not just booking accommodation—you're 
                   becoming part of a movement that transforms lives and strengthens 
                   communities.
                 </p>
               </div>
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative"
             >
               <img
                 src={hero2}
                 alt="Comfortable apartment interior"
                 className="rounded-2xl"
               />
               <div className="absolute -bottom-6 -left-6 rounded-xl bg-secondary p-6 text-secondary-foreground shadow-lg">
                 <div className="text-3xl font-bold">100%</div>
                 <div className="text-sm">Impact Driven</div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>
 
       {/* Mission */}
       <section className="bg-muted py-16 md:py-24">
         <div className="container mx-auto px-4 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="mb-6 text-3xl font-bold text-foreground md:text-4xl">
               Our Mission
             </h2>
             <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
               To provide quality, affordable short-stay accommodations while creating 
               sustainable income streams for community development. We combine Nigerian 
               hospitality with world-class service to make every guest feel at home.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Values */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl"
           >
             Why Choose Us
           </motion.h2>
           
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
             {values.map((value, index) => (
               <motion.div
                 key={value.title}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className="rounded-2xl bg-card p-6 text-center"
               >
                 <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                   <value.icon className="h-7 w-7" />
                 </div>
                 <h3 className="mb-2 font-semibold text-foreground">{value.title}</h3>
                 <p className="text-sm text-muted-foreground">{value.description}</p>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* CTA */}
       <section className="bg-primary py-16 md:py-24">
         <div className="container mx-auto px-4 text-center">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
           >
             <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
               Be Part of Our Mission
             </h2>
             <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
               Book your stay today and experience comfort that creates impact.
             </p>
             <Button asChild variant="hero" size="xl">
               <Link to="/apartments/listings">Explore Our Apartments</Link>
             </Button>
           </motion.div>
         </div>
       </section>
 
       <ApartmentsFooter />
     </div>
   );
 }