 import { useRef, useEffect, useState } from 'react';
 import { motion } from 'framer-motion';
 import { ApartmentCard } from './ApartmentCard';
 import { Apartment } from '@/data/apartments';
 
 interface ApartmentCarouselProps {
   apartments: Apartment[];
 }
 
 export function ApartmentCarousel({ apartments }: ApartmentCarouselProps) {
   const containerRef = useRef<HTMLDivElement>(null);
   const [isPaused, setIsPaused] = useState(false);
 
   // Double the apartments for seamless loop
   const duplicatedApartments = [...apartments, ...apartments];
 
   return (
     <div 
       className="relative overflow-hidden py-4"
       onMouseEnter={() => setIsPaused(true)}
       onMouseLeave={() => setIsPaused(false)}
     >
       <div
         ref={containerRef}
         className={`flex gap-6 animate-slide ${isPaused ? 'pause-animation' : ''}`}
         style={{
           width: `${duplicatedApartments.length * 320}px`,
         }}
       >
         {duplicatedApartments.map((apartment, index) => (
           <div
             key={`${apartment.id}-${index}`}
             className="w-[300px] flex-shrink-0"
           >
             <ApartmentCard apartment={apartment} index={0} />
           </div>
         ))}
       </div>
     </div>
   );
 }