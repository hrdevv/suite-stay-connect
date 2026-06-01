import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { ApartmentsNavigation } from '@/components/apartments/ApartmentsNavigation';
import { ApartmentsFooter } from '@/components/apartments/ApartmentsFooter';
import { ContactForm } from '@/components/apartments/ContactForm';
import { Button } from '@/components/ui/button';
import hero2 from '@/assets/apartments/hero-2.jpg';

const ADDRESS = '7, Amikanle Road, off AIT Road, Kola Alagbado, Lagos State';
const PHONE_DISPLAY = '+234 812 111 3281';
const PHONE_TEL = '+2348121113281';
const EMAIL = 'info@suites.lifterscenter.org';
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  'Amikanle Road, Kola Alagbado, Lagos, Nigeria'
)}&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  'Amikanle Road, Kola Alagbado, Lagos, Nigeria'
)}`;

const contactInfo = [
  { icon: MapPin, title: 'Our Location', content: ADDRESS },
  { icon: Phone, title: 'Phone Number', content: PHONE_DISPLAY },
  { icon: Mail, title: 'Email Address', content: EMAIL },
  { icon: Clock, title: 'Working Hours', content: '24/7 Front Desk Support' },
];

export default function ApartmentsContact() {
  return (
    <div className="min-h-screen bg-background">
      <ApartmentsNavigation />

      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px]">
        <img src={hero2} alt="Contact Us" className="absolute inset-0 h-full w-full object-cover" />
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
            className="max-w-2xl text-base text-primary-foreground/90 md:text-lg"
          >
            We're here to help you find the perfect space
          </motion.p>
        </div>
      </section>

      {/* Quick Action Buttons (mobile-first tap targets) */}
      <section className="border-b border-border bg-muted/40 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            <Button asChild variant="cta" size="lg" className="w-full">
              <a href={`tel:${PHONE_TEL}`} aria-label={`Call ${PHONE_DISPLAY}`}>
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </Button>
            <Button asChild variant="default" size="lg" className="w-full">
              <a href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`}>
                <Mail className="h-4 w-4" /> Email Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full">
              <a
                href={`https://wa.me/${PHONE_TEL.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-3 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-4 text-2xl font-bold text-foreground md:mb-6">Get in Touch</h2>
                <p className="mb-6 text-muted-foreground md:mb-8">
                  Our team is available 24/7 to assist you. Reach out anytime — we'll respond
                  promptly and help you plan the perfect stay or event.
                </p>

                <ul className="space-y-5">
                  {contactInfo.map((info) => {
                    const isPhone = info.title === 'Phone Number';
                    const isEmail = info.title === 'Email Address';
                    const isAddress = info.title === 'Our Location';
                    const inner = (
                      <p className="break-words text-muted-foreground">{info.content}</p>
                    );
                    return (
                      <li key={info.title} className="flex items-start gap-4">
                        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <info.icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="mb-0.5 font-semibold text-foreground">{info.title}</h3>
                          {isPhone ? (
                            <a
                              href={`tel:${PHONE_TEL}`}
                              className="break-words text-muted-foreground transition-colors hover:text-primary"
                            >
                              {info.content}
                            </a>
                          ) : isEmail ? (
                            <a
                              href={`mailto:${EMAIL}`}
                              className="break-all text-muted-foreground transition-colors hover:text-primary"
                            >
                              {info.content}
                            </a>
                          ) : isAddress ? (
                            <a
                              href={MAP_LINK}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="break-words text-muted-foreground transition-colors hover:text-primary"
                            >
                              {info.content}
                            </a>
                          ) : (
                            inner
                          )}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-card p-5 shadow-lg sm:p-6 md:p-8"
              >
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="bg-muted py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6 text-center">
            <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">Find Us</h2>
            <p className="text-muted-foreground">{ADDRESS}</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
            <div className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
              <iframe
                title="Lifters' Suites location map"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </div>
          <div className="mt-4 text-center">
            <Button asChild variant="outline" size="sm">
              <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                <MapPin className="h-4 w-4" /> Open in Google Maps
              </a>
            </Button>
          </div>
        </div>
      </section>

      <ApartmentsFooter />
    </div>
  );
}
