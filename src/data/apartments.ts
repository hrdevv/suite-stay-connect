import apt1 from '@/assets/apartments/apt-1.jpg';
import apt2 from '@/assets/apartments/apt-2.jpg';
// New suite images
import suite1 from '@/assets/apartments/suite-1.jpg';
import suite2 from '@/assets/apartments/suite-2.jpg';
import suite3 from '@/assets/apartments/suite-3.jpg';
import suite4 from '@/assets/apartments/suite-4.jpg';
import suite5 from '@/assets/apartments/suite-5.jpg';
import suite6 from '@/assets/apartments/suite-6.jpg';
import suite7 from '@/assets/apartments/suite-7.jpg';

export interface Apartment {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  amenities: string[];
  description: string;
  images: string[];
  houseRules: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

// Single location — matches Contact page
export const LOCATION = '7, Amikanle Road, off AIT Road, Kola Alagbado, Lagos State';

// Hero slider uses the new luxury suite images
export const heroImages = [suite1, suite3, suite4, suite6];

export const apartments: Apartment[] = [
  {
    id: 'standard-room',
    name: 'Standard Room',
    location: LOCATION,
    pricePerNight: 99999,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'AC', 'TV', 'Kitchenette'],
    description:
      'A comfortable, fully furnished room designed for restful short stays. Includes modern amenities, en-suite bathroom, and 24/7 front-desk support — perfect for solo travellers and couples.',
    images: [suite1, suite5, suite3, suite7, apt1],
    houseRules: ['No smoking', 'No parties', 'Check-in after 2 PM', 'Check-out before 12 PM'],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    location: LOCATION,
    pricePerNight: 119999,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'AC', 'Kitchen', 'Sitting Room', 'Parking'],
    description:
      'Spacious 2-bedroom suite featuring 2 toilets, a generous sitting room, and a fully equipped kitchen with all the necessities. Ideal for families, executives, and longer stays.',
    images: [suite3, suite4, suite1, suite6, suite2, apt2],
    houseRules: ['No smoking', 'No parties', 'Check-in after 2 PM', 'Check-out before 12 PM'],
    featured: true,
  },
];

export const services: Service[] = [
  {
    id: 'short-stay',
    title: 'Short-Stay Apartments',
    description: 'Fully furnished apartments for daily, weekly, or monthly stays. Self-catering options with airport pickup available.',
    features: ['Fully furnished', 'Flexible booking', 'Self-catering', 'Airport pickup'],
    image: suite1,
  },
  {
    id: 'banquet-hall',
    title: 'Banquet Hall',
    description: 'Elegant event space for up to 200 guests. Perfect for weddings, birthdays, corporate events, and conferences.',
    features: ['Up to 200 guests', 'Sound system', 'Catering options', 'Ample parking'],
    image: suite5,
  },
  {
    id: 'corporate-housing',
    title: 'Corporate Housing',
    description: 'Extended stay solutions for business professionals. Discounted monthly rates with business-friendly amenities.',
    features: ['Monthly discounts', 'Work-friendly setup', 'High-speed WiFi', 'Cleaning service'],
    image: suite3,
  },
  {
    id: 'event-space',
    title: 'Event Space Rental',
    description: 'Versatile spaces for meetings, workshops, and photo/video shoots. Modern equipment and professional setup.',
    features: ['Meeting rooms', 'Workshop venues', 'Photo studio', 'Video production'],
    image: suite6,
  },
];
