import apt1 from '@/assets/apartments/apt-1.jpg';
import apt2 from '@/assets/apartments/apt-2.jpg';
import suite1 from '@/assets/apartments/suite-1.jpg';
import suite2 from '@/assets/apartments/suite-2.jpg';
import suite3 from '@/assets/apartments/suite-3.jpg';
import suite4 from '@/assets/apartments/suite-4.jpg';
import suite5 from '@/assets/apartments/suite-5.jpg';
import suite6 from '@/assets/apartments/suite-6.jpg';
import suite7 from '@/assets/apartments/suite-7.jpg';
import { business } from '@/config/business';

export interface Apartment {
  id: string;
  name: string;
  type: 'Standard Room' | 'Executive Suite';
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

export const LOCATION = business.location.address;

// Hero uses the strongest coastal-lit interiors
export const heroImages = [suite1, suite3, suite4, suite6];

const HOUSE_RULES = [
  'No smoking',
  'No parties',
  'Check-in after 2 PM',
  'Check-out before 12 PM',
];

const ROOM_AMENITIES = ['WiFi', 'AC', 'TV', 'Kitchenette'];
const SUITE_AMENITIES = ['WiFi', 'AC', 'Kitchen', 'Sitting Room', 'Parking'];

const ROOM_DESC =
  'A comfortable, fully furnished room designed for restful short stays. Includes modern amenities, en-suite bathroom, and 24/7 front-desk support — perfect for solo travellers and couples.';

const SUITE_DESC =
  'Spacious 2-bedroom suite featuring 2 toilets, a generous sitting room, and a fully equipped kitchen with all the necessities. Ideal for families, executives, and longer stays.';

export const apartments: Apartment[] = [
  {
    id: 'room-coastal',
    name: 'Coastal Room',
    type: 'Standard Room',
    location: LOCATION,
    pricePerNight: business.pricing.standardRoom,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ROOM_AMENITIES,
    description: `${ROOM_DESC} This unit is naturally lit and finished in soft coastal tones.`,
    images: [suite1, suite5, suite3, suite7, apt1],
    houseRules: HOUSE_RULES,
    featured: true,
  },
  {
    id: 'room-harbor',
    name: 'Harbor Room',
    type: 'Standard Room',
    location: LOCATION,
    pricePerNight: business.pricing.standardRoom,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ROOM_AMENITIES,
    description: `${ROOM_DESC} A quiet north-facing unit with a compact work nook.`,
    images: [suite2, suite7, suite1, apt2],
    houseRules: HOUSE_RULES,
  },
  {
    id: 'room-dune',
    name: 'Dune Room',
    type: 'Standard Room',
    location: LOCATION,
    pricePerNight: business.pricing.standardRoom,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ROOM_AMENITIES,
    description: `${ROOM_DESC} Top-floor unit with warm sand-toned interiors.`,
    images: [suite7, suite1, suite5, apt1],
    houseRules: HOUSE_RULES,
  },
  {
    id: 'suite-marina',
    name: 'Marina Suite',
    type: 'Executive Suite',
    location: LOCATION,
    pricePerNight: business.pricing.executiveSuite,
    bedrooms: 2,
    bathrooms: 2,
    amenities: SUITE_AMENITIES,
    description: `${SUITE_DESC} Signature suite with an oversized sitting room.`,
    images: [suite3, suite4, suite1, suite6, suite2, apt2],
    houseRules: HOUSE_RULES,
    featured: true,
  },
  {
    id: 'suite-lagoon',
    name: 'Lagoon Suite',
    type: 'Executive Suite',
    location: LOCATION,
    pricePerNight: business.pricing.executiveSuite,
    bedrooms: 2,
    bathrooms: 2,
    amenities: SUITE_AMENITIES,
    description: `${SUITE_DESC} Garden-view layout ideal for families.`,
    images: [suite4, suite6, suite3, suite2, apt2],
    houseRules: HOUSE_RULES,
  },
  {
    id: 'suite-azure',
    name: 'Azure Suite',
    type: 'Executive Suite',
    location: LOCATION,
    pricePerNight: business.pricing.executiveSuite,
    bedrooms: 2,
    bathrooms: 2,
    amenities: SUITE_AMENITIES,
    description: `${SUITE_DESC} Corner unit with dual aspect and executive desk.`,
    images: [suite6, suite2, suite4, suite3, apt2],
    houseRules: HOUSE_RULES,
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
