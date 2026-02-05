 import { motion } from 'framer-motion';
 import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
 import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
 import { ApartmentCard } from '@/components/apartments/ApartmentCard';
 import { apartments } from '@/data/apartments';
 import hero4 from '@/assets/apartments/hero-4.jpg';
 
 export default function ApartmentsListings() {
   return (
     <div className="min-h-screen bg-background">
       <ApartmentsNavigation />
       
       {/* Hero */}
       <section className="relative h-[40vh] min-h-[300px]">
         <img
           src={hero4}
           alt="Our Apartments"
           className="absolute inset-0 h-full w-full object-cover"
         />
         <div className="hero-overlay absolute inset-0" />
         <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-stylish mb-4 text-4xl text-primary-foreground md:text-6xl"
           >
             Find Your Perfect Stay
           </motion.h1>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl text-lg text-primary-foreground/90"
           >
             Handpicked properties for comfort and convenience
           </motion.p>
         </div>
       </section>
 
       {/* Listings Grid */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <div className="mb-8 flex items-center justify-between">
             <div>
               <h2 className="text-2xl font-bold text-foreground">
                 All Apartments
               </h2>
               <p className="text-muted-foreground">
                 {apartments.length} properties available
               </p>
             </div>
           </div>
 
           <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
             {apartments.map((apartment, index) => (
               <ApartmentCard key={apartment.id} apartment={apartment} index={index} />
             ))}
           </div>
         </div>
       </section>
 
       <ApartmentsFooter />
     </div>
   );
 }