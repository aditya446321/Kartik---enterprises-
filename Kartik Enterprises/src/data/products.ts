export interface Product {
  id: string;
  title: string;
  category: 'safety' | 'mosquito' | 'blinds' | 'doors-windows';
  categoryLabel: string;
  tagline: string;
  desc: string;
  img: string;
  badge: string;
  specs: string[];
  idealFor: string;
  priceNote: string;
  popular?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'invisible',
    title: 'INVISIBLE GRILL',
    category: 'safety',
    categoryLabel: 'Safety & Grills',
    tagline: 'High-Tensile 316/304 Stainless Steel for Unobstructed Mumbai Sea Views',
    desc: 'Transparent, secure, minimalist, and modern, the invisible grill provides unobstructed views while ensuring safety and protection for homes and high-rise balconies. Tested to 400kg pull force.',
    img: '/images/invisible-grill.jpg',
    badge: '★ MUMBAI BESTSELLER',
    specs: ['316 Marine Grade SS Cables', 'Supports 400+ kg Pull Load', 'Zero Obstruction (Invisible from 3m)', 'Anti-Rust Coating for Coastal Air'],
    idealFor: 'Sea-facing Balconies, High-Rises, Open Windows',
    priceNote: 'Direct Factory Rate • Free Measurement',
    popular: true,
  },
  {
    id: 'pleated',
    title: 'PLEATED MOSQUITO NET',
    category: 'mosquito',
    categoryLabel: 'Mosquito Screens',
    tagline: 'Smooth Zig-Zag Folding Mesh for Large Balconies & French Doors',
    desc: 'Efficient pleated mosquito net: Foldable, durable, and sleek design, providing insect protection without compromising ventilation, ideal for a comfortable living space.',
    img: '/images/pleated-mosquito-net.jpg',
    badge: 'LUXURY ESSENTIAL',
    specs: ['German Technology Pleated Mesh', 'Smooth Trackless / Low-Profile Track', 'Waterproof & Dust Resistant', 'Magnetic Closure System'],
    idealFor: 'Balcony Sliding Doors, French Doors, Large Openings',
    priceNote: 'Custom Fabricated in 24 Hours',
    popular: true,
  },
  {
    id: 'roller',
    title: 'ROLLER BLINDS',
    category: 'blinds',
    categoryLabel: 'Designer Blinds',
    tagline: 'Clean Modern Lines with Precision Light & Heat Control',
    desc: 'Sleek window coverings, roller blinds offer adjustable privacy and light control with a simple, space-saving design for modern interiors.',
    img: '/images/roller-blinds.jpg',
    badge: 'SUN CONTROL',
    specs: ['Blackout & Translucent Fabrics', 'UV-Block Heat Reduction', 'Smooth Chain or Motorized Pull', 'Easy-Clean Wipeable Surface'],
    idealFor: 'Living Rooms, High-Rise Bedrooms, Office Spaces',
    priceNote: '100+ Designer Fabric Swatches',
  },
  {
    id: 'zebra',
    title: 'ZEBRA BLINDS',
    category: 'blinds',
    categoryLabel: 'Designer Blinds',
    tagline: 'Dual-Layer Sheer & Solid Stripes for Architectural Light Diffusion',
    desc: 'Zebra blinds: Stylish window coverings with alternating sheer and solid stripes, providing adjustable light control and modern aesthetics for homes.',
    img: '/images/zebra-blinds.jpg',
    badge: 'TRENDING INTERIOR',
    specs: ['Dual-Layer Day & Night Control', 'Modern Architectural Aesthetic', 'Durable Polyester Blend', 'Custom Fit to Millimeter'],
    idealFor: 'Bedrooms, Living Rooms, Luxury Apartments',
    priceNote: 'Custom Sized • Motorized Option',
    popular: true,
  },
  {
    id: 'wood',
    title: 'WOOD VENETIAN BLINDS',
    category: 'blinds',
    categoryLabel: 'Designer Blinds',
    tagline: 'Timeless Natural Wood Slats for Warmth, Privacy & Prestige',
    desc: 'Elegant wood venetian blinds: Natural, durable, adjustable slats for light control, adding warmth and style to any space effortlessly.',
    img: '/images/wood-venetian-blinds.jpg',
    badge: 'NATURAL TIMBER',
    specs: ['Premium Seasoned Hardwood Slats', 'Moisture & Warp Resistant Finish', 'Precision 180° Slat Tilt Control', 'Classic Cord Pull with Child Safety'],
    idealFor: 'Master Suites, Dining Areas, Executive Studies',
    priceNote: 'Rich Stain & Color Options',
  },
  {
    id: 'hanicom',
    title: 'HONEYCOMB BLINDS',
    category: 'blinds',
    categoryLabel: 'Designer Blinds',
    tagline: 'Cellular Thermal Insulation to Cut Mumbai AC Cooling Bills',
    desc: 'Hanicom Blinds: Stylish window solutions, combining innovative technology with elegant design for customizable light control, privacy, and aesthetic appeal.',
    img: '/images/honeycomb-blinds.jpg',
    badge: 'ENERGY SAVING',
    specs: ['Honeycomb Cellular Heat Barrier', 'Reduces AC Power Consumption', 'Sound Dampening Structure', 'Compact Fold Stacking'],
    idealFor: 'West-Facing Sun Exposed Rooms, Bedrooms',
    priceNote: 'Top-Down Bottom-Up Available',
  },
  {
    id: 'bird',
    title: 'BIRD PROTECTION NET',
    category: 'safety',
    categoryLabel: 'Safety & Grills',
    tagline: 'Heavy-Duty Garware UV Nylon Mesh for 100% Pigeon-Free Balconies',
    desc: 'Bird Net: Lightweight mesh for bird control, preventing birds from entering spaces, protecting crops, and ensuring a pest-free environment.',
    img: '/images/bird-net.jpg',
    badge: 'HYGIENE SHIELD',
    specs: ['High-Density UV Stabilized Nylon', 'Does Not Block Breeze or Sunlight', 'Weatherproof SS Hooks & Fasteners', 'Zero Harm to Birds'],
    idealFor: 'Balcony Ducts, AC Outdoor Units, High-Rise Railings',
    priceNote: 'Quick 2-Hour Installation',
  },
  {
    id: 'mosquito',
    title: 'BALCONY MOSQUITO NET',
    category: 'mosquito',
    categoryLabel: 'Mosquito Screens',
    tagline: 'Full-Span Insect Barrier for Uninterrupted Evening Balcony Breeze',
    desc: 'Fine mesh barrier, prevents mosquitoes, ensuring peaceful sleep, safeguarding against insect bites, promoting health and comfort.',
    img: '/images/mosquito-net.jpg',
    badge: 'HEALTH PROTECTION',
    specs: ['Micro-Weave Fiberglass Yarn', 'High Airflow Permeability', 'Non-Combustible Material', 'Sturdy Aluminum Sub-Frame'],
    idealFor: 'Balconies, Open Verandas, Utility Areas',
    priceNote: 'Heavy Duty Durability',
  },
  {
    id: 'velcro',
    title: 'VELCRO MOSQUITO NET',
    category: 'mosquito',
    categoryLabel: 'Mosquito Screens',
    tagline: 'Detachable & Washable Window Mesh with High-Strength 3M Adhesive',
    desc: 'Velcro Mosquito Net: Easy-to-install, adhesive-based mesh barrier for windows and doors, providing effective protection against mosquitoes while ensuring ventilation.',
    img: '/images/velcro-mosquito-net.jpg',
    badge: 'QUICK & DETACHABLE',
    specs: ['Super-Grip 3M Industrial Velcro', 'Machine-Washable Fiberglass Mesh', 'No Drilling Required on Frames', 'Cost-Effective Window Solution'],
    idealFor: 'Rented Homes, Sliding Windows, Bathroom Vents',
    priceNote: 'Economical & Portable',
  },
  {
    id: 'according',
    title: 'ACCORDION DOORS',
    category: 'doors-windows',
    categoryLabel: 'Doors & Windows',
    tagline: 'Smart Folding Space Dividers & Barrier Partitions',
    desc: 'Doors: Architectural openings for entry, exit, and privacy, facilitating transition between spaces; vital elements in buildings functionality and aesthetics.',
    img: '/images/accordion-doors.jpg',
    badge: 'SPACE OPTIMIZER',
    specs: ['Multi-Panel Folding Technology', 'Smooth Silent Overhead Track', 'Space-Saving 90% Opening Ratio', 'Durable Acrylic/Aluminum Build'],
    idealFor: 'Room Partitions, Balcony Enclosures, Walk-in Closets',
    priceNote: 'Custom Widths & Heights',
  },
  {
    id: 'sliding',
    title: 'SLIDING WINDOW & SYSTEMS',
    category: 'doors-windows',
    categoryLabel: 'Doors & Windows',
    tagline: 'Heavy-Duty Aluminum & Sound-Insulated Sliding Systems',
    desc: 'Sliding Window: Precision track systems engineered for effortless glide, weather sealing, and seamless integration with safety grills and mosquito screens.',
    img: '/images/sliding-window.jpg',
    badge: 'WEATHER SEALED',
    specs: ['Smooth Ball-Bearing Roller Glides', 'EPDM Weather Sealing Gaskets', 'Toughened Safety Glass Options', 'Compatible with Invisible Grills'],
    idealFor: 'High-Rise Windward Windows, Master Balconies',
    priceNote: 'Soundproof Double Glazing Available',
  },
];

export interface InstallationProject {
  id: string;
  img: string;
  label: string;
  location: string;
  tag: string;
  specs: string;
}

export const INSTALLATIONS: InstallationProject[] = [
  {
    id: 'bandra',
    img: '/images/gallery-bandra.jpg',
    label: 'Sea-Face Invisible Grill',
    location: 'Bandra West, Mumbai',
    tag: '24TH FLOOR • ARABIAN SEA VIEW',
    specs: '316 Marine Grade Cables • Complete Unobstructed Sea Panorama',
  },
  {
    id: 'vikhroli',
    img: '/images/gallery-vikhroli.jpg',
    label: 'Pleated Mosquito Net on Deck',
    location: 'Vikhroli East, Mumbai',
    tag: 'WOODEN DECK • ZERO TRACK TRIP',
    specs: 'German Pleated Mesh • Integrated seamlessly with wooden deck flooring',
  },
  {
    id: 'highrise',
    img: '/images/gallery-highrise.jpg',
    label: 'High-Rise Balcony Invisible Grill',
    location: 'Powai / Central Mumbai',
    tag: 'CHILD SAFE • 400KG CERTIFIED',
    specs: 'Full-height vertical span • Tested for high wind speeds and pet safety',
  },
];
