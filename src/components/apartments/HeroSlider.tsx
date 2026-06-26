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
      className="relative h-[100svh] w-full overflow-hidden"
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
              alt={`Lifters' Apartments showcase ${currentIndex + 1}`}
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Overlay with modern gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          {/* Decorative element */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-6 h-1 w-20 rounded-full bg-secondary"
          />
          
          <h1 className="font-stylish mb-6 text-4xl leading-tight text-primary-foreground sm:text-5xl md:text-7xl lg:text-8xl">
            Lifters' Apartments
          </h1>
          
          <p className="mx-auto mb-8 max-w-2xl text-base text-primary-foreground/90 sm:text-lg md:text-xl">
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

        {/* Slide Indicators - Modern dots */}
        <div 
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2 sm:bottom-12" 
          role="tablist"
        >
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-20 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-8 w-5 rounded-full border-2 border-primary-foreground/30 p-1"
          >
            <div className="h-2 w-full rounded-full bg-primary-foreground/60" />
          </motion.div>
        </motion.div>
      </div>

      {/* Navigation Arrows - Modern design */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/10 p-2 backdrop-blur-md transition-all hover:bg-background/30 sm:left-6 sm:p-3"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/10 p-2 backdrop-blur-md transition-all hover:bg-background/30 sm:right-6 sm:p-3"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5 text-primary-foreground sm:h-6 sm:w-6" />
      </button>
    </section>
  );
}
