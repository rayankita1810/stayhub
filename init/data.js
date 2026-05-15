const sampleListings = [
  {
    title: "Beach Paradise Villa",
    description: "Luxury villa near the beach with sea view.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "listingimage",
    },
    price: 3200,
    location: "Goa",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.4989],
    },
    status: "pending",
  },
  {
    title: "Snow Mountain Cabin",
    description: "Wooden cabin surrounded by snowy mountains.",
    image: {
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
      filename: "listingimage",
    },
    price: 2100,
    location: "Manali",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432],
    },
    status: "pending",
  },
  {
    title: "Royal Heritage Palace",
    description: "Experience royal living in Rajasthan.",
    image: {
      url: "https://images.unsplash.com/photo-1599661046827-dacde6976548",
      filename: "listingimage",
    },
    price: 4500,
    location: "Jaipur",
    country: "India",
    category: "heritage",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
    status: "pending",
  },
  {
    title: "Island Retreat",
    description: "Private island stay with crystal clear water.",
    image: {
      url: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
      filename: "listingimage",
    },
    price: 5500,
    location: "Maldives",
    country: "Maldives",
    category: "island",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
    status: "pending",
  },
  {
    title: "Forest Tree House",
    description: "Peaceful stay inside a dense forest.",
    image: {
      url: "https://images.unsplash.com/photo-1448375240586-882707db888b",
      filename: "listingimage",
    },
    price: 1700,
    location: "Wayanad",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [76.132, 11.6854],
    },
    status: "pending",
  },
  {
    title: "Luxury Pool House",
    description: "Modern house with infinity swimming pool.",
    image: {
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6",
      filename: "listingimage",
    },
    price: 6200,
    location: "Dubai",
    country: "UAE",
    category: "amazing pools",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
    status: "pending",
  },
  {
    title: "Camping Under Stars",
    description: "Night camping experience in open desert.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "listingimage",
    },
    price: 1200,
    location: "Jaisalmer",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
    status: "pending",
  },
  {
    title: "Arctic Snow Dome",
    description: "Unique snow dome stay in arctic region.",
    image: {
      url: "https://images.unsplash.com/photo-1517821099601-8c8f1c4f0d1d",
      filename: "listingimage",
    },
    price: 7000,
    location: "Lapland",
    country: "Finland",
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [25.7482, 66.5039],
    },
    status: "pending",
  },
  {
    title: "River Side Cottage",
    description: "Beautiful cottage beside flowing river.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "listingimage",
    },
    price: 1800,
    location: "Rishikesh",
    country: "India",
    category: "river",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
    status: "pending",
  },
  {
    title: "City Lights Apartment",
    description: "Modern apartment in the city center.",
    image: {
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      filename: "listingimage",
    },
    price: 2800,
    location: "Mumbai",
    country: "India",
    category: "city",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
    status: "pending",
  },

  {
    title: "Desert Luxury Camp",
    description: "Premium desert tents with camel safari.",
    image: {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
      filename: "listingimage",
    },
    price: 2600,
    location: "Dubai",
    country: "UAE",
    category: "deserts",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
    status: "pending",
  },

  {
    title: "Castle View Stay",
    description: "Stay near ancient castles and forts.",
    image: {
      url: "https://images.unsplash.com/photo-1520637836862-4d197d17c55a",
      filename: "listingimage",
    },
    price: 3400,
    location: "Scotland",
    country: "UK",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    status: "pending",
  },

  {
    title: "Coastal Breeze Home",
    description: "Relaxing home near the coastline.",
    image: {
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
      filename: "listingimage",
    },
    price: 3100,
    location: "Kerala",
    country: "India",
    category: "coastal",
    geometry: {
      type: "Point",
      coordinates: [76.2673, 9.9312],
    },
    status: "pending",
  },

  {
    title: "Farm Fresh Retreat",
    description: "Farmhouse with greenery and fresh air.",
    image: {
      url: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
      filename: "listingimage",
    },
    price: 1500,
    location: "Punjab",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [75.3412, 31.1471],
    },
    status: "pending",
  },

  {
    title: "Houseboat Escape",
    description: "Luxury floating houseboat stay.",
    image: {
      url: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      filename: "listingimage",
    },
    price: 3900,
    location: "Alleppey",
    country: "India",
    category: "houseboats",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
    status: "pending",
  },

  {
    title: "Iconic Paris Apartment",
    description: "Apartment with Eiffel Tower view.",
    image: {
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
      filename: "listingimage",
    },
    price: 6800,
    location: "Paris",
    country: "France",
    category: "iconic cities",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
    status: "pending",
  },

  {
    title: "Trending Luxury Loft",
    description: "Highly rated modern luxury loft.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingimage",
    },
    price: 5000,
    location: "New York",
    country: "USA",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    status: "pending",
  },

  {
    title: "Beach Sunset Hut",
    description: "Affordable beach hut with sunset views.",
    image: {
      url: "https://images.unsplash.com/photo-1493558103817-58b2924bce98",
      filename: "listingimage",
    },
    price: 1400,
    location: "Bali",
    country: "Indonesia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
    status: "pending",
  },

  {
    title: "Snow Resort Stay",
    description: "Luxury ski resort in snowy region.",
    image: {
      url: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f",
      filename: "listingimage",
    },
    price: 7200,
    location: "Switzerland",
    country: "Switzerland",
    category: "snow",
    geometry: {
      type: "Point",
      coordinates: [8.2275, 46.8182],
    },
    status: "pending",
  },

  {
    title: "Forest Bamboo Cottage",
    description: "Eco-friendly bamboo forest cottage.",
    image: {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      filename: "listingimage",
    },
    price: 1600,
    location: "Assam",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [92.9376, 26.2006],
    },
    status: "pending",
  },

  // Add 10 more simple entries
  ...Array.from({ length: 10 }, (_, i) => ({
    title: `Luxury Room ${i + 1}`,
    description: "Comfortable luxury room with modern amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingimage",
    },
    price: 2000 + i * 200,
    location: "Bangalore",
    country: "India",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [77.5946, 12.9716],
    },
    status: "pending",
  })),
];

module.exports = { data: sampleListings };