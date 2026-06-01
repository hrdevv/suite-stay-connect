 import { motion } from 'framer-motion';
 import { MapPin, Phone, Mail, Clock } from 'lucide-react';
 import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
 import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
 import { ContactForm } from '@/components/apartments/ContactForm';
 import hero2 from '@/assets/apartments/hero-2.jpg';
 
 const contactInfo = [
   {
     icon: MapPin,
     title: 'Our Location',
     content: '7, Amikanle Road, off AIT Road, Kola Alagbado, Lagos State',
   },
   {
     icon: Phone,
     title: 'Phone Number',
     content: '+234 812 111 3281',
   },
   {
     icon: Mail,
     title: 'Email Address',
     content: 'info@suites.lifterscenter.org',
   },
   {
     icon: Clock,
     title: 'Working Hours',
     content: '24/7 Front Desk Support',
   },
 ];
 
 export default function ApartmentsContact() {
   return (
     <div className="min-h-screen bg-background">
       <ApartmentsNavigation />
       
       {/* Hero */}
       <section className="relative h-[40vh] min-h-[300px]">
         <img
           src={hero2}
           alt="Contact Us"
           className="absolute inset-0 h-full w-full object-cover"
         />
         <div className="hero-overlay absolute inset-0" />
         <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
           <motion.h1
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-stylish mb-4 text-4xl text-primary-foreground md:text-6xl"
           >
             Let's Plan Your Stay
           </motion.h1>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-2xl text-lg text-primary-foreground/90"
           >
             We're here to help you find the perfect space
           </motion.p>
         </div>
       </section>
 
       {/* Contact Section */}
       <section className="py-16 md:py-24">
         <div className="container mx-auto px-4">
           <div className="grid gap-12 lg:grid-cols-3">
             {/* Contact Info */}
             <div className="lg:col-span-1">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="mb-6 text-2xl font-bold text-foreground">
                   Get in Touch
                 </h2>
                 <p className="mb-8 text-muted-foreground">
                   Have questions about our apartments or services? We'd love to hear 
                   from you. Send us a message and we'll respond as soon as possible.
                 </p>
                 
                 <div className="space-y-6">
                   {contactInfo.map((info) => (
                     <div key={info.title} className="flex items-start gap-4">
                       <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                         <info.icon className="h-6 w-6" />
                       </div>
                       <div>
                         <h3 className="font-semibold text-foreground">{info.title}</h3>
                         <p className="text-muted-foreground">{info.content}</p>
                       </div>
                     </div>
                   ))}
                 </div>
               </motion.div>
             </div>
 
             {/* Contact Form */}
             <div className="lg:col-span-2">
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="rounded-2xl bg-card p-6 shadow-lg md:p-8"
               >
                 <h2 className="mb-6 text-2xl font-bold text-foreground">
                   Send Us a Message
                 </h2>
                 <ContactForm />
               </motion.div>
             </div>
           </div>
         </div>
       </section>
 
       {/* Map Placeholder */}
       <section className="bg-muted py-16">
         <div className="container mx-auto px-4">
           <div className="overflow-hidden rounded-2xl bg-accent">
             <div className="flex h-[300px] items-center justify-center">
               <div className="text-center">
                 <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                 <p className="text-muted-foreground">
                   7, Amikanle Road, off AIT Road, Kola Alagbado, Lagos State
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>
 
       <ApartmentsFooter />
     </div>
   );
 }