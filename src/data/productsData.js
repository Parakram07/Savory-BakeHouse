/* ==========================================================================
   SAVORY BAKEHOUSE - Products Mock Data
   ========================================================================== */

export const productCategories = [
  { id: 'all', label: 'All Delights' },
  { id: 'cakes', label: 'Artisanal Cakes' },
  { id: 'pastries', label: 'French Pastries' },
  { id: 'breads', label: 'Rustic Breads' },
  { id: 'cookies', label: 'Cookies & Cupcakes' },
  { id: 'celebration', label: 'Custom Celebration Cakes' }
];

export const products = [
  // Cakes
  {
    id: 'c1',
    name: 'Himalayan Black Forest Cake',
    category: 'cakes',
    price: 'Rs. 1,200',
    originalPrice: 'Rs. 1,400',
    description: 'Layers of rich chocolate sponge soaked in cherry liqueur syrup, filled with fresh whipped cream and sour cherries, topped with premium chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80',
    badge: 'Signature',
    badgeType: 'purple', // purple, gold, green
    isPopular: true
  },
  {
    id: 'c2',
    name: 'Red Velvet Royale',
    category: 'cakes',
    price: 'Rs. 1,400',
    description: 'Beautiful deep red vanilla cake with a hint of cocoa, layered with our signature smooth cream cheese frosting and decorated with velvet crumbs.',
    image: 'https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=600&auto=format&fit=crop&q=80',
    badge: 'Best Seller',
    badgeType: 'gold',
    isPopular: true
  },
  {
    id: 'c3',
    name: 'Pokhara Sunrise Lemon Tart Cake',
    category: 'cakes',
    price: 'Rs. 1,100',
    description: 'A light, refreshing sponge infused with organic Pokhara lemons, layered with a tangy lemon curd and topped with toasted meringue spikes.',
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?w=600&auto=format&fit=crop&q=80',
    badge: 'Fresh Fruit',
    badgeType: 'green',
    isPopular: false
  },

  // Pastries
  {
    id: 'p1',
    name: 'Butter Croissant Royale',
    category: 'pastries',
    price: 'Rs. 180',
    description: 'Classic French flaky pastry layered with pure premium butter, baked golden brown with a crispy exterior and soft, pillowy interior.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80',
    badge: 'Baked Fresh Daily',
    badgeType: 'green',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Belgian Chocolate Éclair',
    category: 'pastries',
    price: 'Rs. 220',
    description: 'Choux pastry shell filled with rich Bourbon vanilla pastry cream, glazed with a sleek, glossy dark Belgian chocolate ganache.',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?w=600&auto=format&fit=crop&q=80',
    badge: 'Chef Special',
    badgeType: 'gold',
    isPopular: false
  },
  {
    id: 'p3',
    name: 'Almond & Pistachio Danish',
    category: 'pastries',
    price: 'Rs. 240',
    description: 'Crispy laminated pastry filled with sweet almond frangipane, topped with sliced roasted almonds and crushed local pistachios.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    badge: 'Nuts Delight',
    badgeType: 'purple',
    isPopular: false
  },

  // Rustic Breads
  {
    id: 'b1',
    name: 'Artisanal Sourdough Boule',
    category: 'breads',
    price: 'Rs. 350',
    description: 'Naturally leavened wild yeast bread with a deep, crackly crust and an open, chewy crumb. Crafted over 36 hours of slow fermentation.',
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80',
    badge: '100% Organic',
    badgeType: 'green',
    isPopular: true
  },
  {
    id: 'b2',
    name: 'Nadipur Honey & Oat Bread',
    category: 'breads',
    price: 'Rs. 280',
    description: 'Soft and wholesome sandwich loaf baked with local Pokhara honey, organic whole wheat flour, and rolled oats for a sweet, textured crust.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&auto=format&fit=crop&q=80',
    badge: 'Local Honey',
    badgeType: 'gold',
    isPopular: false
  },

  // Cookies & Cupcakes
  {
    id: 'ck1',
    name: 'Chunky Double Chocolate Cookie',
    category: 'cookies',
    price: 'Rs. 120',
    description: 'Thick and chewy cookies loaded with pockets of melted dark and milk chocolate chunks, finished with a sprinkle of Maldon sea salt.',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&auto=format&fit=crop&q=80',
    badge: 'Kids Favorite',
    badgeType: 'purple',
    isPopular: true
  },
  {
    id: 'ck2',
    name: 'Salted Caramel Cupcake',
    category: 'cookies',
    price: 'Rs. 150',
    description: 'Fluffy brown-sugar cupcake with a liquid salted caramel center, topped with a luscious swirls of caramel buttercream frosting.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=600&auto=format&fit=crop&q=80',
    badge: 'Sweet & Salty',
    badgeType: 'gold',
    isPopular: false
  },

  // Custom Celebrations
  {
    id: 's1',
    name: 'Fishtail Peak Wedding Cake',
    category: 'celebration',
    price: 'On Request',
    description: 'A multi-tier masterpiece decorated with custom hand-carved sugar flowers and gold foil elements, capturing the majesty of the Annapurna range.',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=600&auto=format&fit=crop&q=80',
    badge: 'Custom Order',
    badgeType: 'purple',
    isPopular: true
  },
  {
    id: 's2',
    name: 'Dreamy Birthday Wonderland Cake',
    category: 'celebration',
    price: 'Rs. 2,200 / Kg',
    description: 'Choose your custom base flavor and themes! We bring cartoon characters, floral fantasy, or minimalist modern designs to life.',
    image: 'https://images.unsplash.com/photo-1558961309-dbdf000a1291?w=600&auto=format&fit=crop&q=80',
    badge: 'Handcrafted',
    badgeType: 'gold',
    isPopular: true
  }
];
