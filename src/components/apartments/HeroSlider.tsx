 import { useState, useEffect, useCallback } from 'react';
 import { motion, AnimatePresence } from 'framer-motion';
 import { ChevronLeft, ChevronRight } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { heroImages } from '@/data/apartments';
 import { Link } from 'react-router-dom';
 
 export function HeroSlider() {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [shuffledImages, setShuffledImages] = useState<string[]>([]);
 
   useEffect(() => {
     // Shuffle images on mount
     const shuffled = [...heroImages].sort(() => Math.random() - 0.5);
     setShuffledImages(shuffled);
   }, []);
 
   const nextSlide = useCallback(() => {
     setCurrentIndex((prev) => (prev + 1) % shuffledImages.length);
   }, [shuffledImages.length]);
 
   const prevSlide = useCallback(() => {
     setCurrentIndex((prev) => (prev - 1 + shuffledImages.length) % shuffledImages.length);
   }, [shuffledImages.length]);
 
   useEffect(() => {
     if (shuffledImages.length === 0) return;
     const interval = setInterval(nextSlide, 5000);
     return () => clearInterval(interval);
   }, [nextSlide, shuffledImages.length]);
 
   if (shuffledImages.length === 0) return null;
 
   return (
     <section 
       className="relative h-screen w-full overflow-hidden"
       aria-label="Hero image slider"
       role="region"
     >
       {/* Background Images */}
       <div 
         className="absolute inset-0"
         aria-live="polite"
         aria-atomic="true"
       >
         <AnimatePresence mode="wait">
           <motion.div
             key={currentIndex}
             initial={{ opacity: 0, scale: 1.1 }}
             animate={{ opacity: 1, scale: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.7 }}
             className="absolute inset-0"
           >
             <img
               src={shuffledImages[currentIndex]}
               alt={`Lifters' Suites showcase ${currentIndex + 1}`}
               className="h-full w-full object-cover"
             />
           </motion.div>
         </AnimatePresence>
       </div>
 
       {/* Overlay */}
       <div className="hero-overlay absolute inset-0" />
 
       {/* Content */}
       <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.3 }}
           className="max-w-4xl"
         >
           <h1 className="font-stylish mb-6 text-5xl leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
             Lifters' Suites
           </h1>
           <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-foreground/90 md:text-xl">
             Experience Comfort, Embrace Community. Premium short-stay apartments 
             and banquet services in Lagos & Ogun States.
           </p>
           <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
             <Button asChild variant="hero" size="xl">
               <Link to="/apartments/listings">View Apartments</Link>
             </Button>
             <Button asChild variant="hero-outline" size="xl">
               <Link to="/apartments/contact">Make Inquiry</Link>
             </Button>
           </div>
         </motion.div>
 
         {/* Slide Indicators */}
         <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2" role="tablist">
           {shuffledImages.map((_, index) => (
             <button
               key={index}
               onClick={() => setCurrentIndex(index)}
               className={`h-2 rounded-full transition-all duration-300 ${
                 index === currentIndex 
                   ? 'w-8 bg-secondary' 
                   : 'w-2 bg-primary-foreground/50 hover:bg-primary-foreground/70'
               }`}
               aria-label={`Go to slide ${index + 1}`}
               aria-selected={index === currentIndex}
               role="tab"
             />
           ))}
         </div>
       </div>
 
       {/* Navigation Arrows */}
       <button
         onClick={prevSlide}
         className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-3 backdrop-blur-sm transition-all hover:bg-background/40"
         aria-label="Previous slide"
       >
         <ChevronLeft className="h-6 w-6 text-primary-foreground" />
       </button>
       <button
         onClick={nextSlide}
         className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/20 p-3 backdrop-blur-sm transition-all hover:bg-background/40"
         aria-label="Next slide"
       >
         <ChevronRight className="h-6 w-6 text-primary-foreground" />
       </button>
     </section>
   );
 }