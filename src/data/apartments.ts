import apt1 from '@/assets/apartments/apt-1.jpg';
import apt2 from '@/assets/apartments/apt-2.jpg';
import apt3 from '@/assets/apartments/apt-3.jpg';
import apt4 from '@/assets/apartments/apt-4.jpg';
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

// Hero slider uses the new luxury suite images
export const heroImages = [suite1, suite3, suite4, suite6];

export const apartments: Apartment[] = [
  {
    id: 'serene-studio',
    name: 'Serene Studio',
    location: 'Ikeja, Lagos',
    pricePerNight: 25000,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ['WiFi', 'AC', 'TV', 'Kitchen'],
    description: 'A cozy and elegant studio apartment in the heart of Ikeja. Perfect for business travelers and solo adventurers seeking comfort and convenience. Features modern amenities and is close to shopping centers and restaurants.',
    images: [suite1, suite5, apt1],
    houseRules: ['No smoking', 'No parties', 'Check-in after 2 PM', 'Check-out before 12 PM'],
    featured: true,
  },
  {
    id: 'executive-suite',
    name: 'Executive Suite',
    location: 'Lekki, Lagos',
    pricePerNight: 45000,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ['WiFi', 'AC', 'Kitchen', 'Parking', 'Pool'],
    description: 'Luxurious executive suite in the upscale Lekki area. This spacious 2-bedroom apartment offers premium finishes, a fully equipped kitchen, and access to a swimming pool. Ideal for families and business executives.',
    images: [suite3, suite4, apt2],
    houseRules: ['No smoking', 'Pets allowed', 'Check-in after 3 PM', 'Check-out before 11 AM'],
    featured: true,
  },
  {
    id: 'family-comfort',
    name: 'Family Comfort',
    location: 'Abeokuta, Ogun',
    pricePerNight: 35000,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ['WiFi', 'AC', 'Garden', 'Security', 'Parking'],
    description: 'A spacious family apartment with a beautiful garden view in the serene city of Abeokuta. Features 3 bedrooms, modern amenities, and 24/7 security. Perfect for family gatherings and extended stays.',
    images: [suite6, suite7, apt3],
    houseRules: ['No smoking', 'Pets allowed', 'Quiet hours 10 PM - 7 AM', 'Check-in after 2 PM'],
    featured: true,
  },
  {
    id: 'premium-penthouse',
    name: 'Premium Penthouse',
    location: 'Victoria Island, Lagos',
    pricePerNight: 75000,
    bedrooms: 3,
    bathrooms: 3,
    amenities: ['WiFi', 'AC', 'Ocean View', 'Pool', 'Gym', 'Concierge'],
    description: 'Experience luxury living in this stunning penthouse overlooking the Lagos lagoon. Features panoramic ocean views, world-class amenities, private pool access, and 24/7 concierge service.',
    images: [suite2, suite1, apt4],
    houseRules: ['No smoking', 'No parties', 'Check-in after 3 PM', 'Check-out before 12 PM'],
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
