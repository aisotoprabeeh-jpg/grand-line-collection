const mockProducts = [
  // GAMING
  {
    id: 1,
    title: "PlayStation 5 Console",
    price: 49990.00,
    category: "Game",
    rating: 4.9,
    reviews: 12450,
    image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback."
  },
  {
    id: 2,
    title: "Razer DeathAdder V2 Gaming Mouse",
    price: 6500.00,
    category: "Game",
    rating: 4.7,
    reviews: 3200,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Ergonomic wired gaming mouse with best-in-class sensor."
  },
  {
    id: 3,
    title: "Mechanical Gaming Keyboard RGB",
    price: 8999.00,
    category: "Game",
    rating: 4.8,
    reviews: 4100,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Tactile mechanical switches with customizable RGB backlighting."
  },

  // GYM & FITNESS
  {
    id: 4,
    title: "Adjustable Dumbbells Set",
    price: 15500.00,
    category: "Sport",
    rating: 4.8,
    reviews: 800,
    image: "https://images.unsplash.com/photo-1586401700818-192e9eb38e0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Space-saving adjustable dumbbells up to 24kg each."
  },
  {
    id: 5,
    title: "Yoga Mat with Alignment Lines",
    price: 1999.00,
    category: "Sport",
    rating: 4.5,
    reviews: 2150,
    image: "https://images.unsplash.com/photo-1599447421416-3414500d18a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Eco-friendly, non-slip yoga mat perfect for all exercises."
  },
  {
    id: 6,
    title: "Whey Protein Isolate - 2kg",
    price: 6499.00,
    category: "Sport",
    rating: 4.6,
    reviews: 5400,
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "High-quality fast-absorbing protein for muscle recovery. Chocolate flavor."
  },

  // PHONES & TECH
  {
    id: 7,
    title: "Apple iPhone 15 Pro Max",
    price: 159900.00,
    category: "Phones",
    rating: 4.9,
    reviews: 8520,
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Titanium design, A17 Pro chip, and the most advanced Pro camera system ever."
  },
  {
    id: 8,
    title: "Samsung Galaxy S24 Ultra",
    price: 129999.00,
    category: "Phones",
    rating: 4.8,
    reviews: 4200,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "AI-powered, titanium built, with a revolutionary 200MP camera system."
  },
  {
    id: 9,
    title: "Sony Wireless Earbuds",
    price: 14990.00,
    category: "Phones",
    rating: 4.5,
    reviews: 3100,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Premium noise isolating true wireless earbuds."
  },

  // FOOD
  {
    id: 10,
    title: "Organic Arabica Coffee Beans - 1kg",
    price: 1250.00,
    category: "Food",
    rating: 4.7,
    reviews: 1420,
    image: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Freshly roasted, premium arabica whole coffee beans."
  },
  {
    id: 11,
    title: "Gourmet Dark Chocolate Assortment",
    price: 899.00,
    category: "Food",
    rating: 4.8,
    reviews: 950,
    image: "https://images.unsplash.com/photo-1548883354-94bcfe321cfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Handcrafted 70% dark chocolate truffles."
  },
  {
    id: 12,
    title: "Premium Oolong Tea Box",
    price: 550.00,
    category: "Food",
    rating: 4.6,
    reviews: 620,
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    description: "Aromatic and smooth oolong tea leaves sourced directly from high-altitude farms."
  }
];

const categories = [
  "Game",
  "Sport",
  "Phones",
  "Food"
];
