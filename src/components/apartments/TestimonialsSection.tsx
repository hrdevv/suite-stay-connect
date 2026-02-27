import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const reviews = [
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
];

function ReviewCard({ review, index }: { review: typeof reviews[0]; index: number }) {
  return (
    <motion.div
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
  );
}

export function TestimonialsSection() {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  // Auto-slide on mobile
  useEffect(() => {
    if (!emblaApi || !isMobile) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, isMobile]);

  return (
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

        {/* Mobile: Embla carousel */}
        {isMobile ? (
          <div>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {reviews.map((review, index) => (
                  <div key={review.name} className="min-w-0 flex-[0_0_100%]">
                    <ReviewCard review={review} index={index} />
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 flex justify-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === activeIndex ? 'w-6 bg-secondary' : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: Grid */
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <ReviewCard key={review.name} review={review} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
