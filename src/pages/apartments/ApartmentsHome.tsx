import { motion } from 'framer-motion';
import { MapPin, Sparkles, Shield, HeadphonesIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeroSlider } from '@/components/apartments/HeroSlider';
import { ApartmentCarousel } from '@/components/apartments/ApartmentCarousel';
import { FeatureCard } from '@/components/apartments/FeatureCard';
import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
import { apartments } from '@/data/apartments';
import { TestimonialsSection } from '@/components/apartments/TestimonialsSection';
import suite5 from '@/assets/apartments/suite-5.jpg';
 
 const features = [
   {
     icon: MapPin,
     title: 'Prime Locations',
     description: 'Strategically located in Lagos & Ogun States',
   },
   {
     icon: Sparkles,
     title: 'Fully Furnished',
     description: 'Modern amenities for your comfort',
   },
   {
     icon: Shield,
     title: 'Affordable Rates',
     description: 'Competitive pricing with flexible booking',
   },
   {
     icon: HeadphonesIcon,
     title: '24/7 Support',
     description: 'Round-the-clock assistance',
   },
 ];
 
 export default function ApartmentsHome() {
   return (
     <div className="min-h-screen bg-background">
       <ApartmentsNavigation />
       
       {/* Hero Section */}
       <HeroSlider />
 
       {/* Features Section */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-12 text-center"
           >
             <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
               Why Choose <span className="text-gradient">Lifters' Suites</span>
             </h2>
             <p className="mx-auto max-w-2xl text-muted-foreground">
               Experience premium hospitality that makes a difference. Every stay supports 
               community empowerment programs.
             </p>
           </motion.div>
 
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
             {features.map((feature, index) => (
               <FeatureCard
                 key={feature.title}
                 icon={feature.icon}
                 title={feature.title}
                 description={feature.description}
                 index={index}
               />
             ))}
           </div>
         </div>
       </section>
 
       {/* Featured Apartments */}
       <section className="bg-muted py-16 md:py-24">
         <div className="container mx-auto px-4">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="mb-8 flex items-end justify-between"
           >
             <div>
               <h2 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
                 Featured Apartments
               </h2>
               <p className="text-muted-foreground">
                 Handpicked properties for comfort and convenience
               </p>
             </div>
             <Button asChild variant="outline" className="hidden md:flex">
               <Link to="/apartments/listings">
                 View All <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
             </Button>
           </motion.div>
 
           <ApartmentCarousel apartments={apartments.filter(a => a.featured)} />
 
           <div className="mt-8 text-center md:hidden">
             <Button asChild variant="cta">
               <Link to="/apartments/listings">View All Apartments</Link>
             </Button>
           </div>
         </div>
       </section>
 
       {/* Banquet Hall Highlight */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <div className="grid items-center gap-8 lg:grid-cols-2">
             <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="relative overflow-hidden rounded-2xl"
             >
                <img
                  src={suite5}
                  alt="Banquet Hall"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
             </motion.div>
             
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:pl-8"
             >
               <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                 Elegant <span className="text-gradient">Banquet Hall</span>
               </h2>
               <p className="mb-6 text-muted-foreground">
                 Host unforgettable events in our stunning banquet hall. With capacity 
                 for up to 200 guests, state-of-the-art sound systems, and flexible 
                 catering options, we make your special occasions truly memorable.
               </p>
               <ul className="mb-8 space-y-3">
                 {['Weddings & Receptions', 'Corporate Events', 'Birthday Celebrations', 'Conferences'].map((item) => (
                   <li key={item} className="flex items-center gap-3">
                     <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/20 text-secondary">
                       ✓
                     </span>
                     <span className="text-foreground">{item}</span>
                   </li>
                 ))}
               </ul>
               <Button asChild variant="cta" size="lg">
                 <Link to="/apartments/services">Learn More</Link>
               </Button>
             </motion.div>
           </div>
         </div>
       </section>
 
        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <section className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">
                Ready to Experience Comfort?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
                Book your stay today and be part of a mission that empowers communities. 
                Your comfort, our commitment.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <Link to="/apartments/listings">Browse Apartments</Link>
                </Button>
                <Button asChild variant="hero-outline" size="xl">
                  <Link to="/apartments/contact">Contact Us</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
 
       <ApartmentsFooter />
     </div>
   );
 }