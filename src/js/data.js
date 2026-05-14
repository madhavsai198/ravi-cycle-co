// ==========================================
// RAVI CYCLE COMPANY — Product Data
// ==========================================

export const products = [
  {
    id: 1,
    name: 'ROVE',
    slug: 'rove',
    category: 'Mountain',
    rating: 4.9,
    reviews: 127,
    image: '/images/mountain-bike-1.png',
    images: ['/images/mountain-bike-1.png'],
    tagline: 'Reliable and comfortable city commuter',
    badges: ['Best Seller', 'Sale'],
    specs: {
      brakes: 'V-Brakes',
      fork: 'Rigid Fork',
      frame: 'Steel Frame',
      geometry: 'Comfort Geometry',
      special: 'Inbuilt Carrier'
    },
    mrp: 7500,
    price: 5795,
    emi: 524,
    sizes: ['26T / 66CM', '27.5T / 70CM'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Orange', hex: '#FF6D00' },
      { name: 'Blue', hex: '#2979FF' }
    ],
    gears: ['Single Speed'],
    brakeType: ['V-Brake'],
    wheelSize: '26T',
    sku: 'RVC1026BK00001',
    inStock: true,
    description: 'The Rove is built for those who seek comfort and durability on every ride. Featuring a steel frame with comfort geometry, V-brakes, and an inbuilt carrier, it\'s perfect for daily commutes and weekend adventures.',
    fullSpecs: {
      'Frame': 'Hi-Tensile Steel',
      'Fork': 'Rigid Steel Fork',
      'Brakes': 'V-Brakes (Front & Rear)',
      'Gear System': 'Single Speed',
      'Wheel Size': '26 inches',
      'Tire Type': 'Semi-Slick',
      'Weight': '14.5 kg',
      'Max Rider Weight': '100 kg',
      'Recommended Height': '5\'4" - 5\'10"',
      'Warranty': '2 Years Frame'
    }
  },
  {
    id: 2,
    name: 'RIOT',
    slug: 'riot',
    category: 'Mountain',
    rating: 4.9,
    reviews: 234,
    image: '/images/mountain-bike-1.png',
    images: ['/images/mountain-bike-1.png'],
    tagline: 'Conquer any terrain with confidence',
    badges: ['Best Seller', 'Sale'],
    specs: {
      brakes: 'Double Disc Brakes',
      fork: 'Front Suspension',
      frame: 'Hi-Tensile Steel',
      geometry: 'Optimised Geometry',
      special: 'Multi-Speed Option'
    },
    mrp: 14062,
    price: 7599,
    emi: 687,
    sizes: ['26T / 66CM', '27.5T / 70CM'],
    colors: [
      { name: 'Brown', hex: '#8B4513' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Grey', hex: '#888888' },
      { name: 'Blue', hex: '#2979FF' },
      { name: 'Green', hex: '#00C853' }
    ],
    gears: ['Single Speed', '21 Speed'],
    brakeType: ['Double Disc Brake'],
    wheelSize: '26T',
    sku: 'BSR1026BW00002',
    inStock: true,
    description: 'The Riot is designed for thrill-seekers who want to conquer any terrain. With double disc brakes, front suspension, and 21-speed gearing, this mountain bike handles trails, hills, and city streets with equal confidence.',
    fullSpecs: {
      'Frame': 'Hi-Tensile Steel, Optimised Geometry',
      'Fork': 'Front Suspension (60mm Travel)',
      'Brakes': 'Mechanical Disc (Front & Rear)',
      'Gear System': '21 Speed Shimano',
      'Wheel Size': '26 inches',
      'Tire Type': 'Knobby MTB',
      'Weight': '15.8 kg',
      'Max Rider Weight': '110 kg',
      'Recommended Height': '5\'5" - 6\'0"',
      'Warranty': '2 Years Frame'
    }
  },
  {
    id: 3,
    name: 'EMERALD',
    slug: 'emerald',
    category: 'Hybrid',
    rating: 4.9,
    reviews: 89,
    image: '/images/hybrid-bike-1.png',
    images: ['/images/hybrid-bike-1.png'],
    tagline: 'The perfect companion for daily errands',
    badges: ['Best Seller', 'Sale'],
    specs: {
      brakes: 'V-Brakes',
      fork: 'Rigid Fork',
      frame: 'Single Speed',
      geometry: 'Carry Basket',
      special: 'Support Wheels'
    },
    mrp: 9050,
    price: 7294,
    emi: 659,
    sizes: ['26T / 66CM'],
    colors: [
      { name: 'Green', hex: '#00C853' },
      { name: 'Blue', hex: '#2979FF' },
      { name: 'Red', hex: '#FF1744' }
    ],
    gears: ['Single Speed'],
    brakeType: ['V-Brake'],
    wheelSize: '26T',
    sku: 'RVC3026GR00003',
    inStock: true,
    description: 'The Emerald is the perfect city companion. With its carry basket, support wheels, and comfortable geometry, it\'s ideal for grocery runs, daily commutes, and leisurely rides around town.',
    fullSpecs: {
      'Frame': 'Steel, City Comfort',
      'Fork': 'Rigid Steel Fork',
      'Brakes': 'V-Brakes (Front & Rear)',
      'Gear System': 'Single Speed',
      'Wheel Size': '26 inches',
      'Tire Type': 'Semi-Slick City',
      'Weight': '16 kg',
      'Max Rider Weight': '100 kg',
      'Recommended Height': '5\'2" - 5\'8"',
      'Warranty': '2 Years Frame'
    }
  },
  {
    id: 4,
    name: 'SPRINT PRO',
    slug: 'sprint-pro',
    category: 'Road',
    rating: 4.8,
    reviews: 156,
    image: '/images/road-bike-1.png',
    images: ['/images/road-bike-1.png'],
    tagline: 'Engineered for aerodynamic speed',
    badges: ['New Arrival'],
    specs: {
      brakes: 'Disc Brakes',
      fork: 'Carbon Fork',
      frame: 'Alloy Frame',
      geometry: 'Aero Geometry',
      special: 'Drop Handlebars'
    },
    mrp: 18999,
    price: 14999,
    emi: 1356,
    sizes: ['700C / S', '700C / M', '700C / L'],
    colors: [
      { name: 'Red', hex: '#D32F2F' },
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'White', hex: '#F5F5F5' }
    ],
    gears: ['21 Speed'],
    brakeType: ['Disc Brake'],
    wheelSize: '700C',
    sku: 'RVC4700RD00004',
    inStock: true,
    description: 'The Sprint Pro is engineered for speed enthusiasts. Featuring an alloy frame, carbon fork, and 21-speed Shimano gearing, it slices through wind resistance and delivers exhilarating performance on paved roads.',
    fullSpecs: {
      'Frame': 'Alloy 6061, Aero Geometry',
      'Fork': 'Carbon Fiber',
      'Brakes': 'Mechanical Disc',
      'Gear System': '21 Speed Shimano',
      'Wheel Size': '700C',
      'Tire Type': 'Slick Road 700x25C',
      'Weight': '10.5 kg',
      'Max Rider Weight': '100 kg',
      'Recommended Height': '5\'6" - 6\'2"',
      'Warranty': '3 Years Frame'
    }
  },
  {
    id: 5,
    name: 'CHAMP JR',
    slug: 'champ-jr',
    category: 'Kids',
    rating: 4.7,
    reviews: 312,
    image: '/images/kids-bike-1.png',
    images: ['/images/kids-bike-1.png'],
    tagline: 'Safe and fun first ride for kids',
    badges: ['Best Seller'],
    specs: {
      brakes: 'Caliper Brakes',
      fork: 'Rigid Fork',
      frame: 'Steel Frame',
      geometry: 'Kids Geometry',
      special: 'Training Wheels'
    },
    mrp: 5999,
    price: 4299,
    emi: 389,
    sizes: ['16T', '20T'],
    colors: [
      { name: 'Green', hex: '#4CAF50' },
      { name: 'Yellow', hex: '#FFD600' },
      { name: 'Red', hex: '#F44336' }
    ],
    gears: ['Single Speed'],
    brakeType: ['Caliper Brake'],
    wheelSize: '16T',
    sku: 'RVC5016GR00005',
    inStock: true,
    description: 'The Champ Jr is designed for young riders learning the joy of cycling. With training wheels, a chain guard, and fun colors, it combines safety with adventure for kids ages 5-10.',
    fullSpecs: {
      'Frame': 'Steel, Low Step-Through',
      'Fork': 'Rigid Steel',
      'Brakes': 'Caliper (Front & Rear)',
      'Gear System': 'Single Speed',
      'Wheel Size': '16 inches',
      'Tire Type': 'Knobby Kids',
      'Weight': '10 kg',
      'Max Rider Weight': '40 kg',
      'Recommended Age': '5 - 10 years',
      'Warranty': '1 Year Frame'
    }
  },
  {
    id: 6,
    name: 'VOLT E1',
    slug: 'volt-e1',
    category: 'Electric',
    rating: 4.8,
    reviews: 67,
    image: '/images/electric-bike-1.png',
    images: ['/images/electric-bike-1.png'],
    tagline: 'Effortless eco-friendly city commuting',
    badges: ['New Arrival', 'Sale'],
    specs: {
      brakes: 'Hydraulic Disc',
      fork: 'Front Suspension',
      frame: 'Alloy Frame',
      geometry: 'Comfort Geometry',
      special: '250W Motor'
    },
    mrp: 45000,
    price: 35999,
    emi: 3254,
    sizes: ['27.5T / M', '27.5T / L'],
    colors: [
      { name: 'Black', hex: '#1A1A1A' },
      { name: 'Green', hex: '#00C853' }
    ],
    gears: ['7 Speed'],
    brakeType: ['Hydraulic Disc'],
    wheelSize: '27.5T',
    sku: 'RVC6275BK00006',
    inStock: false,
    description: 'The Volt E1 represents the future of cycling. With a powerful 250W motor, integrated battery, LCD display, and hydraulic disc brakes, it makes every ride effortless and eco-friendly.',
    fullSpecs: {
      'Frame': 'Alloy 6061, Integrated Battery',
      'Fork': 'Front Suspension (80mm)',
      'Brakes': 'Hydraulic Disc (Front & Rear)',
      'Motor': '250W Mid-Drive',
      'Battery': '36V 10Ah Lithium-ion',
      'Range': '40-60 km per charge',
      'Gear System': '7 Speed Shimano',
      'Wheel Size': '27.5 inches',
      'Weight': '22 kg',
      'Max Rider Weight': '120 kg',
      'Warranty': '2 Years Frame, 1 Year Battery'
    }
  },
  {
    id: 7,
    name: 'TRAIL BLAZE',
    slug: 'trail-blaze',
    category: 'Mountain',
    rating: 4.6,
    reviews: 95,
    image: '/images/mountain-bike-1.png',
    images: ['/images/mountain-bike-1.png'],
    tagline: 'Built for serious off-road adventures',
    badges: ['Sale'],
    specs: {
      brakes: 'Disc Brakes',
      fork: 'Front Suspension',
      frame: 'Alloy Frame',
      geometry: 'Trail Geometry',
      special: 'Wide Tires'
    },
    mrp: 22000,
    price: 16999,
    emi: 1536,
    sizes: ['27.5T / 70CM', '29T / 74CM'],
    colors: [
      { name: 'Matte Black', hex: '#2D2D2D' },
      { name: 'Orange', hex: '#FF6D00' }
    ],
    gears: ['21 Speed'],
    brakeType: ['Disc Brake'],
    wheelSize: '27.5T',
    sku: 'RVC7275MB00007',
    inStock: true,
    description: 'The Trail Blaze is built for serious off-road adventures. Its alloy frame, 21-speed gearing, and wide tires give you the grip and control you need on the toughest trails.',
    fullSpecs: {
      'Frame': 'Alloy 6061, Trail Geometry',
      'Fork': 'Front Suspension (100mm)',
      'Brakes': 'Mechanical Disc',
      'Gear System': '21 Speed Shimano Tourney',
      'Wheel Size': '27.5 inches',
      'Tire Type': 'Wide Knobby 2.25"',
      'Weight': '14 kg',
      'Max Rider Weight': '110 kg',
      'Recommended Height': '5\'6" - 6\'1"',
      'Warranty': '3 Years Frame'
    }
  },
  {
    id: 8,
    name: 'GLIDE CITY',
    slug: 'glide-city',
    category: 'Hybrid',
    rating: 4.5,
    reviews: 203,
    image: '/images/hybrid-bike-1.png',
    images: ['/images/hybrid-bike-1.png'],
    tagline: 'Smooth rides with upright geometry',
    badges: [],
    specs: {
      brakes: 'V-Brakes',
      fork: 'Rigid Fork',
      frame: 'Steel Frame',
      geometry: 'Upright Geometry',
      special: 'Fenders Included'
    },
    mrp: 8500,
    price: 6999,
    emi: 633,
    sizes: ['26T / 66CM', '27.5T / 70CM'],
    colors: [
      { name: 'Silver', hex: '#C0C0C0' },
      { name: 'Navy', hex: '#1A237E' }
    ],
    gears: ['Single Speed', '7 Speed'],
    brakeType: ['V-Brake'],
    wheelSize: '26T',
    sku: 'RVC8026SL00008',
    inStock: true,
    description: 'The Glide City is your perfect urban companion. With fenders, upright geometry, and a smooth ride, it handles city streets with grace and style.',
    fullSpecs: {
      'Frame': 'Steel, Upright City',
      'Fork': 'Rigid Steel',
      'Brakes': 'V-Brakes',
      'Gear System': 'Single Speed / 7 Speed',
      'Wheel Size': '26 inches',
      'Tire Type': 'Puncture Resistant City',
      'Weight': '15.2 kg',
      'Max Rider Weight': '100 kg',
      'Recommended Height': '5\'3" - 5\'9"',
      'Warranty': '2 Years Frame'
    }
  }
];

export const categories = [
  { name: 'Mountain Bikes', icon: '⛰️', count: 24, description: 'Conquer any terrain', image: '/images/mountain-bike-1.png' },
  { name: 'Road Bikes', icon: '🏁', count: 18, description: 'Built for speed', image: '/images/road-bike-1.png' },
  { name: 'City & Hybrid', icon: '🚲', count: 32, description: 'Best of both worlds', image: '/images/hybrid-bike-1.png' },
  { name: 'Kids Cycles', icon: '🧒', count: 15, description: 'Fun & safe rides', image: '/images/kids-bike-1.png' },
  { name: 'Electric Bikes', icon: '⚡', count: 12, description: 'Powered by tomorrow', image: '/images/electric-bike-1.png' },
  { name: 'BMX & Sport', icon: '🛹', count: 8, description: 'For the thrill seekers', image: '/images/budget-10k.png' }
];

export const budgetRanges = [
  { label: 'Under ₹5,000', max: 5000, image: '/images/budget-5k.png' },
  { label: '₹5,000–₹15,000', max: 15000, image: '/images/budget-10k.png' },
  { label: '₹15,000–₹40,000', max: 40000, image: '/images/budget-15k.png' },
  { label: '₹40,000+', max: Infinity, image: '/images/budget-20k.png' }
];

export const stores = [
  {
    id: 1,
    name: 'Ravi Cycle Company — Main Showroom',
    address: '42, Gandhi Bazaar Main Road, Basavanagudi',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560004',
    country: 'India',
    phone: '+91 93939 34151',
    hours: 'Mon-Sat: 9AM - 8PM, Sun: 10AM - 6PM',
    lat: 12.9416,
    lng: 77.5712,
    distance: 2.1
  },
  {
    id: 2,
    name: 'Ravi Cycles — Jayanagar Branch',
    address: '156, 4th Block, Jayanagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560011',
    country: 'India',
    phone: '+91 98765 43211',
    hours: 'Mon-Sat: 9:30AM - 8PM, Sun: 10AM - 5PM',
    lat: 12.9250,
    lng: 77.5938,
    distance: 3.8
  },
  {
    id: 3,
    name: 'Ravi Cycles — Malleshwaram',
    address: '#279, 1st Floor, 18th Cross Road, Sampige Rd',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560003',
    country: 'India',
    phone: '+91 98765 43212',
    hours: 'Mon-Sat: 10AM - 8PM, Sun: 10AM - 6PM',
    lat: 12.9965,
    lng: 77.5700,
    distance: 5.2
  },
  {
    id: 4,
    name: 'Ravi Cycles — Whitefield',
    address: '88, ITPL Main Road, Whitefield',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560066',
    country: 'India',
    phone: '+91 98765 43213',
    hours: 'Mon-Sat: 10AM - 9PM, Sun: 10AM - 7PM',
    lat: 12.9698,
    lng: 77.7500,
    distance: 12.4
  },
  {
    id: 5,
    name: 'Ravi Cycles — Indiranagar',
    address: '12th Main, HAL 2nd Stage, Indiranagar',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560038',
    country: 'India',
    phone: '+91 98765 43214',
    hours: 'Mon-Sat: 10AM - 8:30PM, Sun: 10AM - 6PM',
    lat: 12.9784,
    lng: 77.6408,
    distance: 7.6
  }
];

export const testimonials = [
  {
    quote: 'Bought the Riot for my daily commute and weekend trails. The dual disc brakes are amazing, and the 21-speed gearing handles hills effortlessly. Best investment for my health!',
    author: 'Rajesh Kumar',
    location: 'Bengaluru',
    initial: 'R'
  },
  {
    quote: 'My son loves his Champ Jr! The training wheels gave him confidence, and the build quality is fantastic. He rides it every evening in our community. Great value for money.',
    author: 'Priya Sharma',
    location: 'Hyderabad',
    initial: 'P'
  },
  {
    quote: 'The Sprint Pro is a beast on the road. Light, fast, and the disc brakes give you total control. I\'ve done 500km in a month and the performance is still like day one.',
    author: 'Arjun Mehta',
    location: 'Mumbai',
    initial: 'A'
  }
];

export const chatbotResponses = {
  greetings: [
    'Hi! 👋 How can I help you today?',
    'Hello! Welcome to Ravi Cycle Company. How can I assist you?',
    'Hey there! 🚲 Looking for the perfect cycle? I\'m here to help!'
  ],
  products: 'We have a wide range of cycles including Mountain bikes (Rove, Riot, Trail Blaze), Road bikes (Sprint Pro), Hybrid bikes (Emerald, Glide City), Kids bikes (Champ Jr), and Electric bikes (Volt E1). What type interests you?',
  price: 'Our cycles start from ₹4,299 for kids bikes and go up to ₹35,999 for electric bikes. We also offer EMI options starting from ₹389/month! 💰',
  kids: 'Yes, gear cycles are available for kids in the 10 years age group! 🚴 The gear cycle price starts from ₹6,999. Prices may vary based on brand, features, and design.',
  emi: 'We offer easy EMI options through UPI and Pay Later services! You can get EMI starting from ₹389/month on 3/6/9 month tenures. No extra charges! 📱',
  stores: 'We have 5 stores across Bengaluru — Gandhi Bazaar, Jayanagar, Malleshwaram, Whitefield, and Indiranagar. Visit our Store Locator page to find the nearest one! 📍',
  warranty: 'All our cycles come with a frame warranty ranging from 1 to 3 years depending on the model. Our premium cycles have a 3-year frame warranty. 🛡️',
  delivery: 'We offer free delivery across India for all orders above ₹5,000! Standard delivery takes 3-5 business days. Express delivery available in Bengaluru. 🚚',
  default: 'I\'m sorry, I didn\'t quite understand that. You can ask me about:\n• Our cycles and prices\n• EMI options\n• Store locations\n• Warranty & delivery\n• Kids cycles\n\nOr type "help" for more options!'
};
