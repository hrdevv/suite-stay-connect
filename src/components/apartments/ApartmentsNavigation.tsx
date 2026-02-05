 import { useState } from 'react';
 import { Link, useLocation } from 'react-router-dom';
 import { motion, AnimatePresence } from 'framer-motion';
 import { Menu, X, Home, Info, Briefcase, Building2, Mail } from 'lucide-react';
 import { Button } from '@/components/ui/button';
 
 const navLinks = [
   { href: '/apartments', label: 'Home', icon: Home },
   { href: '/apartments/about', label: 'About', icon: Info },
   { href: '/apartments/services', label: 'Services', icon: Briefcase },
   { href: '/apartments/listings', label: 'Listings', icon: Building2 },
   { href: '/apartments/contact', label: 'Contact', icon: Mail },
 ];
 
 export function ApartmentsNavigation() {
   const [isOpen, setIsOpen] = useState(false);
   const location = useLocation();
 
   return (
     <nav className="fixed left-0 right-0 top-0 z-50 bg-background/80 backdrop-blur-lg">
       <div className="container mx-auto px-4">
         <div className="flex h-16 items-center justify-between md:h-20">
           {/* Logo */}
           <Link to="/apartments" className="flex items-center gap-2">
             <span className="font-stylish text-2xl text-primary md:text-3xl">
               Lifters' Suites
             </span>
           </Link>
 
           {/* Desktop Navigation */}
           <div className="hidden items-center gap-1 md:flex">
             {navLinks.map((link) => (
               <Link
                 key={link.href}
                 to={link.href}
                 className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                   location.pathname === link.href
                     ? 'bg-accent text-accent-foreground'
                     : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                 }`}
               >
                 {link.label}
               </Link>
             ))}
           </div>
 
           {/* CTA Button */}
           <div className="hidden md:block">
             <Button asChild variant="cta">
               <Link to="/apartments/contact">Book Now</Link>
             </Button>
           </div>
 
           {/* Mobile Menu Toggle */}
           <button
             className="md:hidden"
             onClick={() => setIsOpen(!isOpen)}
             aria-label={isOpen ? 'Close menu' : 'Open menu'}
           >
             {isOpen ? (
               <X className="h-6 w-6 text-foreground" />
             ) : (
               <Menu className="h-6 w-6 text-foreground" />
             )}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: 'auto' }}
             exit={{ opacity: 0, height: 0 }}
             className="border-t border-border bg-background md:hidden"
           >
             <div className="container mx-auto space-y-1 px-4 py-4">
               {navLinks.map((link) => (
                 <Link
                   key={link.href}
                   to={link.href}
                   onClick={() => setIsOpen(false)}
                   className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                     location.pathname === link.href
                       ? 'bg-accent text-accent-foreground'
                       : 'text-muted-foreground hover:bg-accent'
                   }`}
                 >
                   <link.icon className="h-5 w-5" />
                   {link.label}
                 </Link>
               ))}
               <div className="pt-2">
                 <Button asChild variant="cta" className="w-full">
                   <Link to="/apartments/contact" onClick={() => setIsOpen(false)}>
                     Book Now
                   </Link>
                 </Button>
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </nav>
   );
 }