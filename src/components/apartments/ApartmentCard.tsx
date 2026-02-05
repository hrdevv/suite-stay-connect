 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { MapPin, Bed, Bath, Wifi, Wind, Car, ChevronLeft, ChevronRight, X } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
 import { Apartment } from '@/data/apartments';
 import { Link } from 'react-router-dom';
 
 interface ApartmentCardProps {
   apartment: Apartment;
   index?: number;
 }
 
 const amenityIcons: Record<string, React.ReactNode> = {
   WiFi: <Wifi className="h-4 w-4" />,
   AC: <Wind className="h-4 w-4" />,
   Parking: <Car className="h-4 w-4" />,
 };
 
 export function ApartmentCard({ apartment, index = 0 }: ApartmentCardProps) {
   const [isOpen, setIsOpen] = useState(false);
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
 
   const nextImage = () => {
     setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
   };
 
   const prevImage = () => {
     setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
   };
 
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat('en-NG', {
       style: 'currency',
       currency: 'NGN',
       minimumFractionDigits: 0,
     }).format(price);
   };
 
   return (
     <>
       <motion.div
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: index * 0.1 }}
         className="card-elevated group cursor-pointer overflow-hidden rounded-2xl bg-card"
         onClick={() => setIsOpen(true)}
       >
         {/* Image */}
         <div className="relative aspect-[4/3] overflow-hidden">
           <img
             src={apartment.images[0]}
             alt={apartment.name}
             className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
           />
           {apartment.featured && (
             <Badge className="absolute left-3 top-3 bg-secondary text-secondary-foreground">
               Featured
             </Badge>
           )}
           <div className="absolute bottom-3 right-3 rounded-lg bg-background/90 px-3 py-1.5 backdrop-blur-sm">
             <span className="font-semibold text-foreground">
               {formatPrice(apartment.pricePerNight)}
             </span>
             <span className="text-muted-foreground">/night</span>
           </div>
         </div>
 
         {/* Content */}
         <div className="p-4">
           <h3 className="mb-1 text-lg font-semibold text-foreground">{apartment.name}</h3>
           <div className="mb-3 flex items-center gap-1 text-muted-foreground">
             <MapPin className="h-4 w-4" />
             <span className="text-sm">{apartment.location}</span>
           </div>
 
           <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
             <div className="flex items-center gap-1">
               <Bed className="h-4 w-4" />
               <span>{apartment.bedrooms} Bed</span>
             </div>
             <div className="flex items-center gap-1">
               <Bath className="h-4 w-4" />
               <span>{apartment.bathrooms} Bath</span>
             </div>
           </div>
 
           <div className="flex flex-wrap gap-2">
             {apartment.amenities.slice(0, 3).map((amenity) => (
               <Badge key={amenity} variant="secondary" className="bg-accent text-accent-foreground">
                 {amenityIcons[amenity] || null}
                 <span className="ml-1">{amenity}</span>
               </Badge>
             ))}
             {apartment.amenities.length > 3 && (
               <Badge variant="secondary" className="bg-accent text-accent-foreground">
                 +{apartment.amenities.length - 3}
               </Badge>
             )}
           </div>
         </div>
       </motion.div>
 
       {/* Modal */}
       <Dialog open={isOpen} onOpenChange={setIsOpen}>
         <DialogContent className="max-w-5xl overflow-hidden p-0">
           <div className="flex flex-col md:flex-row">
             {/* Image Area - 70% */}
             <div 
               className="relative w-full md:w-[70%]"
               aria-live="polite"
               aria-atomic="true"
             >
               <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
                 <img
                   src={apartment.images[currentImageIndex]}
                   alt={`${apartment.name} - Image ${currentImageIndex + 1} of ${apartment.images.length}`}
                   className="h-full w-full object-cover"
                 />
                 
                 {/* Carousel Controls */}
                 {apartment.images.length > 1 && (
                   <>
                     <button
                       onClick={prevImage}
                       className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
                       aria-label="View previous image"
                       aria-controls="apartment-image-display"
                     >
                       <ChevronLeft className="h-5 w-5 text-foreground" />
                     </button>
                     <button
                       onClick={nextImage}
                       className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 shadow-lg transition-all hover:bg-background"
                       aria-label="View next image"
                       aria-controls="apartment-image-display"
                     >
                       <ChevronRight className="h-5 w-5 text-foreground" />
                     </button>
                     
                     {/* Image Indicators */}
                     <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                       {apartment.images.map((_, idx) => (
                         <button
                           key={idx}
                           onClick={() => setCurrentImageIndex(idx)}
                           className={`h-2 w-2 rounded-full transition-all ${
                             idx === currentImageIndex 
                               ? 'bg-secondary scale-125' 
                               : 'bg-background/70'
                           }`}
                           aria-label={`View image ${idx + 1}`}
                           aria-current={idx === currentImageIndex}
                         />
                       ))}
                     </div>
                   </>
                 )}
               </div>
             </div>
 
             {/* Content Area - 30% */}
             <div className="w-full p-6 md:w-[30%]">
               <DialogHeader className="text-left">
                 <DialogTitle className="text-xl font-bold">{apartment.name}</DialogTitle>
                 <DialogDescription className="flex items-center gap-1 text-muted-foreground">
                   <MapPin className="h-4 w-4" />
                   {apartment.location}
                 </DialogDescription>
               </DialogHeader>
 
               <div className="mt-4 space-y-4">
                 <div className="rounded-xl bg-accent p-4">
                   <div className="text-2xl font-bold text-foreground">
                     {formatPrice(apartment.pricePerNight)}
                   </div>
                   <div className="text-sm text-muted-foreground">per night</div>
                 </div>
 
                 <div className="flex gap-4 text-sm">
                   <div className="flex items-center gap-1">
                     <Bed className="h-4 w-4 text-muted-foreground" />
                     <span>{apartment.bedrooms} Bedroom{apartment.bedrooms > 1 ? 's' : ''}</span>
                   </div>
                   <div className="flex items-center gap-1">
                     <Bath className="h-4 w-4 text-muted-foreground" />
                     <span>{apartment.bathrooms} Bath</span>
                   </div>
                 </div>
 
                 <div>
                   <h4 className="mb-2 font-semibold">Amenities</h4>
                   <div className="flex flex-wrap gap-2">
                     {apartment.amenities.map((amenity) => (
                       <Badge key={amenity} variant="secondary" className="bg-muted text-muted-foreground">
                         {amenity}
                       </Badge>
                     ))}
                   </div>
                 </div>
 
                 <p className="text-sm text-muted-foreground line-clamp-4">
                   {apartment.description}
                 </p>
 
                 <div className="flex flex-col gap-2 pt-2">
                   <Button asChild variant="cta" className="w-full">
                     <Link to="/apartments/contact">Make an Inquiry</Link>
                   </Button>
                   <Button asChild variant="outline" className="w-full">
                     <Link to={`/apartments/room/${apartment.id}`}>View Details</Link>
                   </Button>
                 </div>
               </div>
             </div>
           </div>
         </DialogContent>
       </Dialog>
     </>
   );
 }