import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { business } from '@/config/business';

const inquiryTypes = business.inquiryTypes;
 
 export function ContactForm() {
   const [isSubmitting, setIsSubmitting] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     // Simulate form submission
     await new Promise((resolve) => setTimeout(resolve, 1000));
     
     toast.success('Thank you for your inquiry! We will get back to you soon.');
     setIsSubmitting(false);
     (e.target as HTMLFormElement).reset();
   };
 
   return (
     <motion.form
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5 }}
       onSubmit={handleSubmit}
       className="space-y-6"
     >
       <div className="grid gap-4 md:grid-cols-2">
         <div>
           <label htmlFor="name" className="mb-2 block text-sm font-medium">
             Full Name *
           </label>
           <Input
             id="name"
             name="name"
             required
             placeholder="John Doe"
             className="bg-background"
           />
         </div>
         <div>
           <label htmlFor="email" className="mb-2 block text-sm font-medium">
             Email Address *
           </label>
           <Input
             id="email"
             name="email"
             type="email"
             required
             placeholder="john@example.com"
             className="bg-background"
           />
         </div>
       </div>
 
       <div className="grid gap-4 md:grid-cols-2">
         <div>
           <label htmlFor="phone" className="mb-2 block text-sm font-medium">
             Phone Number *
           </label>
           <Input
             id="phone"
             name="phone"
             type="tel"
            required
            placeholder={business.contact.phoneDisplay}
            className="bg-background"
           />
         </div>
         <div>
           <label htmlFor="inquiryType" className="mb-2 block text-sm font-medium">
             Inquiry Type *
           </label>
           <Select name="inquiryType" required>
             <SelectTrigger className="bg-background">
               <SelectValue placeholder="Select inquiry type" />
             </SelectTrigger>
             <SelectContent>
               {inquiryTypes.map((type) => (
                 <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                   {type}
                 </SelectItem>
               ))}
             </SelectContent>
           </Select>
         </div>
       </div>
 
       <div>
         <label htmlFor="dates" className="mb-2 block text-sm font-medium">
           Preferred Dates
         </label>
         <Input
           id="dates"
           name="dates"
           placeholder="e.g., Jan 15-20, 2025"
           className="bg-background"
         />
       </div>
 
       <div>
         <label htmlFor="message" className="mb-2 block text-sm font-medium">
           Message *
         </label>
         <Textarea
           id="message"
           name="message"
           required
           rows={5}
           placeholder="Tell us about your requirements..."
           className="bg-background resize-none"
         />
       </div>
 
       <Button type="submit" variant="cta" size="lg" disabled={isSubmitting} className="w-full">
         {isSubmitting ? 'Sending...' : 'Send Inquiry'}
       </Button>
     </motion.form>
   );
 }