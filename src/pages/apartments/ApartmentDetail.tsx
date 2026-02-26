 import { useParams, Link } from 'react-router-dom';
 import { useState } from 'react';
 import { motion } from 'framer-motion';
 import { MapPin, Bed, Bath, ChevronLeft, ChevronRight, Wifi, Wind, Car, Waves, Dumbbell, Users } from 'lucide-react';
 import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
 import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
 import { Button } from '@/components/ui/button';
 import { Badge } from '@/components/ui/badge';
 import { ApartmentCard } from '@/components/apartments/ApartmentCard';
 import { apartments } from '@/data/apartments';
 
 const amenityIcons: Record<string, React.ReactNode> = {
   WiFi: <Wifi className="h-5 w-5" />,
   AC: <Wind className="h-5 w-5" />,
   Parking: <Car className="h-5 w-5" />,
   Pool: <Waves className="h-5 w-5" />,
   Gym: <Dumbbell className="h-5 w-5" />,
   Concierge: <Users className="h-5 w-5" />,
 };
 
 export default function ApartmentDetail() {
   const { id } = useParams();
   const [currentImageIndex, setCurrentImageIndex] = useState(0);
   
   const apartment = apartments.find(a => a.id === id);
   const similarApartments = apartments.filter(a => a.id !== id).slice(0, 3);
 
   if (!apartment) {
     return (
       <div className="flex min-h-screen items-center justify-center">
         <div className="text-center">
           <h1 className="mb-4 text-2xl font-bold">Apartment Not Found</h1>
           <Button asChild>
             <Link to="/apartments/listings">Back to Listings</Link>
           </Button>
         </div>
       </div>
     );
   }
 
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat('en-NG', {
       style: 'currency',
       currency: 'NGN',
       minimumFractionDigits: 0,
     }).format(price);
   };
 
   const nextImage = () => {
     setCurrentImageIndex((prev) => (prev + 1) % apartment.images.length);
   };
 
   const prevImage = () => {
     setCurrentImageIndex((prev) => (prev - 1 + apartment.images.length) % apartment.images.length);
   };
 
   return (
     <div className="min-h-screen bg-background">
       <ApartmentsNavigation />
       
       {/* Image Gallery */}
       <section className="pt-20">
         <div 
           className="relative h-[50vh] min-h-[400px]"
           aria-live="polite"
         >
           <motion.img
             key={currentImageIndex}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             src={apartment.images[currentImageIndex]}
             alt={`${apartment.name} - Image ${currentImageIndex + 1}`}
             className="h-full w-full object-cover"
           />
           
           {apartment.images.length > 1 && (
             <>
               <button
                 onClick={prevImage}
                 className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg transition-all hover:bg-background"
                 aria-label="View previous image"
               >
                 <ChevronLeft className="h-6 w-6" />
               </button>
               <button
                 onClick={nextImage}
                 className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-3 shadow-lg transition-all hover:bg-background"
                 aria-label="View next image"
               >
                 <ChevronRight className="h-6 w-6" />
               </button>
               
                <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                  {apartment.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-12 w-16 overflow-hidden rounded-lg border-2 transition-all ${
                        idx === currentImageIndex 
                          ? 'border-secondary shadow-lg scale-110' 
                          : 'border-background/50 opacity-70 hover:opacity-100'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    >
                      <img src={img} alt="" className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
             </>
           )}
         </div>
       </section>
 
       {/* Content */}
       <section className="py-12">
         <div className="container mx-auto px-4">
           <div className="grid gap-8 lg:grid-cols-3">
             {/* Main Content */}
             <div className="lg:col-span-2">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
               >
                 <div className="mb-4 flex items-start justify-between">
                   <div>
                     <h1 className="mb-2 text-3xl font-bold text-foreground md:text-4xl">
                       {apartment.name}
                     </h1>
                     <div className="flex items-center gap-2 text-muted-foreground">
                       <MapPin className="h-5 w-5" />
                       <span>{apartment.location}</span>
                     </div>
                   </div>
                   {apartment.featured && (
                     <Badge className="bg-secondary text-secondary-foreground">Featured</Badge>
                   )}
                 </div>
 
                 <div className="mb-6 flex gap-6 text-muted-foreground">
                   <div className="flex items-center gap-2">
                     <Bed className="h-5 w-5" />
                     <span>{apartment.bedrooms} Bedroom{apartment.bedrooms > 1 ? 's' : ''}</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Bath className="h-5 w-5" />
                     <span>{apartment.bathrooms} Bathroom{apartment.bathrooms > 1 ? 's' : ''}</span>
                   </div>
                 </div>
 
                 <div className="mb-8">
                   <h2 className="mb-4 text-xl font-semibold">Description</h2>
                   <p className="text-muted-foreground leading-relaxed">
                     {apartment.description}
                   </p>
                 </div>
 
                 <div className="mb-8">
                   <h2 className="mb-4 text-xl font-semibold">Amenities</h2>
                   <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                     {apartment.amenities.map((amenity) => (
                       <div
                         key={amenity}
                         className="flex items-center gap-3 rounded-xl bg-accent p-3"
                       >
                         <span className="text-primary">
                           {amenityIcons[amenity] || <Wifi className="h-5 w-5" />}
                         </span>
                         <span className="text-foreground">{amenity}</span>
                       </div>
                     ))}
                   </div>
                 </div>
 
                 <div>
                   <h2 className="mb-4 text-xl font-semibold">House Rules</h2>
                   <ul className="space-y-2">
                     {apartment.houseRules.map((rule) => (
                       <li key={rule} className="flex items-center gap-3 text-muted-foreground">
                         <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                         {rule}
                       </li>
                     ))}
                   </ul>
                 </div>
               </motion.div>
             </div>
 
             {/* Booking Sidebar */}
             <div className="lg:col-span-1">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="sticky top-24 rounded-2xl bg-card p-6 shadow-lg"
               >
                 <div className="mb-6">
                   <div className="text-3xl font-bold text-foreground">
                     {formatPrice(apartment.pricePerNight)}
                   </div>
                   <div className="text-muted-foreground">per night</div>
                 </div>
 
                 <div className="space-y-4">
                   <Button asChild variant="cta" size="lg" className="w-full">
                     <Link to="/apartments/contact">Make an Inquiry</Link>
                   </Button>
                   <Button asChild variant="outline" size="lg" className="w-full">
                     <a href="https://wa.me/+234XXXXXXXXX" target="_blank" rel="noopener noreferrer">
                       WhatsApp Us
                     </a>
                   </Button>
                 </div>
 
                 <p className="mt-4 text-center text-sm text-muted-foreground">
                   Free cancellation up to 48 hours before check-in
                 </p>
               </motion.div>
             </div>
           </div>
         </div>
       </section>
 
       {/* Similar Listings */}
       <section className="bg-muted py-16">
         <div className="container mx-auto px-4">
           <h2 className="mb-8 text-2xl font-bold text-foreground">Similar Apartments</h2>
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {similarApartments.map((apt, index) => (
               <ApartmentCard key={apt.id} apartment={apt} index={index} />
             ))}
           </div>
         </div>
       </section>
 
       <ApartmentsFooter />
     </div>
   );
 }