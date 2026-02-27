 import { motion } from 'framer-motion';
import { Heart, Users, Home, Award } from 'lucide-react';
import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
import { useState } from 'react';
import hero1 from '@/assets/apartments/hero-1.jpg';
import hero2 from '@/assets/apartments/hero-2.jpg';
import suite1 from '@/assets/apartments/suite-1.jpg';
import suite2 from '@/assets/apartments/suite-2.jpg';
import suite3 from '@/assets/apartments/suite-3.jpg';
import suite4 from '@/assets/apartments/suite-4.jpg';
import suite5 from '@/assets/apartments/suite-5.jpg';
import suite6 from '@/assets/apartments/suite-6.jpg';
import suite7 from '@/assets/apartments/suite-7.jpg';

const galleryImages = [
  { src: suite1, alt: 'Luxury suite living area' },
  { src: suite2, alt: 'Premium bedroom suite' },
  { src: suite3, alt: 'Executive suite interior' },
  { src: suite4, alt: 'Modern apartment lounge' },
  { src: suite5, alt: 'Elegant dining space' },
  { src: suite6, alt: 'Spacious family suite' },
  { src: suite7, alt: 'Deluxe suite bathroom' },
];
 
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
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const closeLightbox = () => setLightboxIndex(null);
    const prevLightbox = () => setLightboxIndex((prev) => prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : 0);
    const nextLightbox = () => setLightboxIndex((prev) => prev !== null ? (prev + 1) % galleryImages.length : 0);

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
 
        {/* Photo Gallery */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                Our <span className="text-gradient">Spaces</span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Take a glimpse into the comfort and elegance that awaits you at Lifters' Suites.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl ${
                    index === 0 ? 'col-span-2 row-span-2' : ''
                  }`}
                >
                  <button
                    onClick={() => setLightboxIndex(index)}
                    className="h-full w-full text-left"
                    aria-label={`View ${image.alt} fullscreen`}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ minHeight: index === 0 ? '360px' : '180px' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <p className="absolute bottom-3 left-3 text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {image.alt}
                    </p>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
                What Our <span className="text-gradient">Guests Say</span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Real experiences from people who chose to stay with us.
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  name: 'Adaeze O.',
                  location: 'Lagos',
                  text: 'Absolutely loved my stay! The suite was spotless, modern, and felt like a true home away from home. Will definitely be back.',
                  rating: 5,
                },
                {
                  name: 'Tunde M.',
                  location: 'Abuja',
                  text: 'Great value for money. The staff were incredibly warm and helpful. Knowing my booking supports community programs made it even better.',
                  rating: 5,
                },
                {
                  name: 'Chioma E.',
                  location: 'Port Harcourt',
                  text: 'We hosted our family reunion at the banquet hall — everything was perfect. Professional service and beautiful spaces.',
                  rating: 4,
                },
              ].map((review, index) => (
                <motion.div
                  key={review.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl bg-card p-6 shadow-sm"
                >
                  <div className="mb-3 flex gap-1 text-secondary">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="mb-4 text-muted-foreground italic">"{review.text}"</p>
                  <div className="text-sm font-semibold text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.location}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
 
        <ApartmentsFooter />

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              onClick={closeLightbox}
              className="absolute right-4 top-4 rounded-full bg-background/20 p-2 text-white transition-colors hover:bg-background/40"
              aria-label="Close lightbox"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevLightbox(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-3 text-white transition-colors hover:bg-background/40"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[85vh] max-w-[90vw] rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextLightbox(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-3 text-white transition-colors hover:bg-background/40"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </div>
        )}
      </div>
    );
  }