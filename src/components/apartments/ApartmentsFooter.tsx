import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { business } from '@/config/business';

const quickLinks = [
  { href: '/apartments', label: 'Home' },
  { href: '/apartments/about', label: 'About Us' },
  { href: '/apartments/services', label: 'Services' },
  { href: '/apartments/listings', label: 'Apartments' },
  { href: '/apartments/contact', label: 'Contact' },
];

const services = [
  'Short-Stay Apartments',
  'Banquet Hall',
  'Corporate Housing',
  'Event Space Rental',
];

const socialLinks = [
  { href: business.social.facebook, icon: Facebook, label: 'Facebook' },
  { href: business.social.instagram, icon: Instagram, label: 'Instagram' },
  { href: business.social.twitter, icon: Twitter, label: 'Twitter' },
];

export function ApartmentsFooter() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="font-stylish mb-4 text-2xl">{business.name}</h3>
            <p className="mb-4 text-sm text-background/70">
              A social enterprise initiative supporting the mission of {business.parent}.
              Your stay supports community empowerment.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full bg-background/10 p-2 transition-colors hover:bg-background/20"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-semibold">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-background/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 font-semibold">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-background/70">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>{business.location.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`tel:${business.contact.phoneTel}`}
                  className="hover:text-background transition-colors break-all"
                >
                  {business.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-background/70">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a
                  href={`mailto:${business.contact.email}`}
                  className="hover:text-background transition-colors break-all"
                >
                  {business.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} {business.name}. All rights reserved.</p>
          <p className="mt-1">
            A project of{' '}
            <a href="#" className="text-secondary hover:underline">
              {business.parent}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
