const sampleListing = [
  {
    title: "Seaside Serenity Villa",
    description:
      "Beautiful villa facing the Arabian Sea with a private beach and infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingImage",
    },
    price: 12000,
    location: "Goa",
    country: "India",
    category: "deserts",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.2993],
    },
  },
  {
    title: "Mountain Escape Cabin",
    description: "Cozy wooden cabin surrounded by pine trees in the Himalayas.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "listingImage",
    },
    price: 8500,
    location: "Manali",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2396],
    },
  },
  {
    title: "Desert Mirage Camp",
    description:
      "Luxury tents in the Thar desert with camel safaris and bonfire nights.",
    image: {
      url: "https://images.unsplash.com/photo-1549887534-5a24e238db1c",
      filename: "listingImage",
    },
    price: 7000,
    location: "Jaisalmer",
    country: "India",
    category: "deserts",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
  },
  {
    title: "Urban Chic Apartment",
    description: "Modern apartment in the heart of Mumbai with skyline views.",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      filename: "listingImage",
    },
    price: 9500,
    location: "Mumbai",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [72.8777, 19.076],
    },
  },
  {
    title: "Heritage Haveli",
    description:
      "Experience royal living in this restored 18th-century haveli.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      filename: "listingImage",
    },
    price: 11000,
    location: "Jaipur",
    country: "India",
    category: "deserts",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },
  {
    title: "Backwater Bliss Houseboat",
    description:
      "Stay afloat in Kerala’s peaceful backwaters on a luxury houseboat.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "listingImage",
    },
    price: 9500,
    location: "Alleppey",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
  },
  {
    title: "Forest Hideaway Cottage",
    description: "Rustic eco-cottage deep in the forests of Wayanad.",
    image: {
      url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      filename: "listingImage",
    },
    price: 6800,
    location: "Wayanad",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [76.132, 11.6854],
    },
  },
  {
    title: "Arctic Glass Igloo",
    description: "Sleep under the northern lights in a heated glass igloo.",
    image: {
      url: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66",
      filename: "listingImage",
    },
    price: 15000,
    location: "Lapland",
    country: "Finland",
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [25.7482, 67.9222],
    },
  },
  {
    title: "Desert Mirage Camp",
    description:
      "Luxury tents in the Thar desert with camel safaris and bonfire nights.",
    image: {
      url: "https://images.unsplash.com/photo-1549887534-5a24e238db1c",
      filename: "listingImage",
    },
    price: 7000,
    location: "Jaisalmer",
    country: "India",
    category: "deserts",
    geometry: { type: "Point", coordinates: [70.9083, 26.9157] },
  },

  {
    title: "Royal Heritage Haveli",
    description: "Live like royalty in this 200-year-old haveli.",
    image: {
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      filename: "listingImage",
    },
    price: 11000,
    location: "Jaipur",
    country: "India",
    category: "heritage",
    geometry: { type: "Point", coordinates: [75.7873, 26.9124] },
  },

  {
    title: "Lake Palace Castle",
    description: "A majestic castle stay overlooking a serene lake.",
    image: {
      url: "https://images.unsplash.com/photo-1548013146-72479768bada",
      filename: "listingImage",
    },
    price: 15000,
    location: "Udaipur",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [73.7125, 24.5854] },
  },

  {
    title: "Backwater Bliss Houseboat",
    description: "Luxury houseboat stay in peaceful Kerala backwaters.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      filename: "listingImage",
    },
    price: 9500,
    location: "Alleppey",
    country: "India",
    category: "houseboats",
    geometry: { type: "Point", coordinates: [76.3388, 9.4981] },
  },

  {
    title: "Urban Comfort Room",
    description: "Private room in the heart of the city.",
    image: {
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      filename: "listingImage",
    },
    price: 3500,
    location: "Delhi",
    country: "India",
    category: "rooms",
    geometry: { type: "Point", coordinates: [77.209, 28.6139] },
  },

  {
    title: "Infinity Pool Villa",
    description: "Luxury villa with a private infinity pool.",
    image: {
      url: "https://images.unsplash.com/photo-1501117716987-c8e1ecb2102c",
      filename: "listingImage",
    },
    price: 18000,
    location: "Goa",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.8567, 15.2993] },
  },

  {
    title: "Himalayan Camping Retreat",
    description: "Camping experience under the stars in the Himalayas.",
    image: {
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      filename: "listingImage",
    },
    price: 4500,
    location: "Manali",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [77.1892, 32.2396] },
  },

  {
    title: "Iconic City Apartment",
    description: "Modern apartment near iconic landmarks.",
    image: {
      url: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
      filename: "listingImage",
    },
    price: 9000,
    location: "Mumbai",
    country: "India",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [72.8777, 19.076] },
  },

  {
    title: "Trending Beachside Stay",
    description: "Most booked beachfront property this season.",
    image: {
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      filename: "listingImage",
    },
    price: 13000,
    location: "Varkala",
    country: "India",
    category: "trending",
    geometry: { type: "Point", coordinates: [76.7163, 8.7379] },
  },

  {
    title: "Rann Desert Tent",
    description: "White desert tent stay during Rann Utsav.",
    image: {
      url: "https://images.unsplash.com/photo-1583301286816-f4f05e1e8a10",
      filename: "listingImage",
    },
    price: 6000,
    location: "Kutch",
    country: "India",
    category: "deserts",
    geometry: { type: "Point", coordinates: [69.8597, 23.7337] },
  },

  {
    title: "Palace Heritage Stay",
    description: "Authentic palace stay with cultural experiences.",
    image: {
      url: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
      filename: "listingImage",
    },
    price: 14000,
    location: "Jodhpur",
    country: "India",
    category: "heritage",
    geometry: { type: "Point", coordinates: [73.0243, 26.2389] },
  },

  {
    title: "Hilltop Castle View",
    description: "Castle stay with panoramic hill views.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154208-43c92b8d6c8c",
      filename: "listingImage",
    },
    price: 16000,
    location: "Mount Abu",
    country: "India",
    category: "castles",
    geometry: { type: "Point", coordinates: [72.7156, 24.5926] },
  },

  {
    title: "Luxury Pool Retreat",
    description: "Private pool retreat for couples.",
    image: {
      url: "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
      filename: "listingImage",
    },
    price: 20000,
    location: "Lonavala",
    country: "India",
    category: "amazing pools",
    geometry: { type: "Point", coordinates: [73.4072, 18.7557] },
  },

  {
    title: "Forest Camping Pods",
    description: "Eco-friendly forest camping experience.",
    image: {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      filename: "listingImage",
    },
    price: 5000,
    location: "Wayanad",
    country: "India",
    category: "camping",
    geometry: { type: "Point", coordinates: [76.132, 11.6854] },
  },

  {
    title: "City Budget Room",
    description: "Affordable stay for city travelers.",
    image: {
      url: "https://images.unsplash.com/photo-1554995207-c18c203602cb",
      filename: "listingImage",
    },
    price: 2500,
    location: "Bangalore",
    country: "India",
    category: "rooms",
    geometry: { type: "Point", coordinates: [77.5946, 12.9716] },
  },

  {
    title: "Iconic Skyline View",
    description: "High-rise apartment with city skyline view.",
    image: {
      url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
      filename: "listingImage",
    },
    price: 10000,
    location: "Hyderabad",
    country: "India",
    category: "iconic cities",
    geometry: { type: "Point", coordinates: [78.4867, 17.385] },
  },

  {
    title: "Trending Mountain Stay",
    description: "Trending hill stay with valley views.",
    image: {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      filename: "listingImage",
    },
    price: 8000,
    location: "Mussoorie",
    country: "India",
    category: "trending",
    geometry: { type: "Point", coordinates: [78.0644, 30.4598] },
  },

  {
    title: "Kerala Heritage Home",
    description: "Traditional Kerala home with cultural charm.",
    image: {
      url: "https://images.unsplash.com/photo-1600585154065-31f1a1b44c5e",
      filename: "listingImage",
    },
    price: 6500,
    location: "Kochi",
    country: "India",
    category: "heritage",
    geometry: { type: "Point", coordinates: [76.2673, 9.9312] },
  },

  {
    title: "Luxury Houseboat Premium",
    description: "Premium houseboat with full amenities.",
    image: {
      url: "https://images.unsplash.com/photo-1615873968403-89e068629265",
      filename: "listingImage",
    },
    price: 14000,
    location: "Kumarakom",
    country: "India",
    category: "houseboats",
    geometry: { type: "Point", coordinates: [76.428, 9.6175] },
  },

  {
    title: "Desert Night Camp",
    description: "Enjoy desert nights with cultural performances.",
    image: {
      url: "https://images.unsplash.com/photo-1582582494700-76b6a8e96c8c",
      filename: "listingImage",
    },
    price: 5500,
    location: "Bikaner",
    country: "India",
    category: "deserts",
    geometry: { type: "Point", coordinates: [73.3119, 28.0229] },
  },

  {
    title: "Trending Lake View Stay",
    description: "Trending stay with beautiful lake views.",
    image: {
      url: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
      filename: "listingImage",
    },
    price: 9000,
    location: "Nainital",
    country: "India",
    category: "trending",
    geometry: { type: "Point", coordinates: [79.4636, 29.3919] },
  },
];

module.exports = { data: sampleListing };
