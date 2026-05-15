export const products = [
  {
    id: 1,
    name: 'Mid-Century Velvet Sofa',
    slug: 'mid-century-velvet-sofa',
    category: 'furniture',
    subcategory: 'sofas',
    featured: true,
    price: '49,999',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/sofa-main.jpg',
      '/src/assets/images/products/sofa-main.jpg',
      '/src/assets/images/products/sofa-main.jpg'
    ],
    thumbnail: '/src/assets/images/products/sofa-main.jpg',
    dimensions: '78" W x 35" D x 32" H',
    material: 'Solid Wood Frame, Velvet Upholstery',
    colors: ['Emerald Green', 'Navy Blue', 'Charcoal Grey'],
    description: 'Inspired by 1950s design, this velvet sofa combines clean lines with sumptuous comfort. The solid wood frame ensures durability, while the high-density foam cushions provide exceptional support.',
    highlights: [
      'Handcrafted by skilled artisans',
      'Stain-resistant velvet fabric',
      'Removable cushion covers',
      'Available in custom sizes'
    ],
    tags: ['bestseller', 'living-room', 'statement-piece'],
    relatedProductIds: [2, 5, 8]
  },
  {
    id: 2,
    name: 'Art Deco Floor Lamp',
    slug: 'art-deco-floor-lamp',
    category: 'lighting',
    subcategory: 'floor-lamps',
    featured: true,
    price: '12,499',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/lamp.jpg',
      '/src/assets/images/products/lamp.jpg',
      '/src/assets/images/products/lamp.jpg'
    ],
    thumbnail: '/src/assets/images/products/lamp.jpg',
    dimensions: '65" H x 18" W (Base)',
    material: 'Brass-plated Steel, Frosted Glass Shade',
    colors: ['Brass', 'Matte Black'],
    description: 'Make a dramatic statement with this Art Deco-inspired floor lamp. The geometric brass body and frosted glass shade create a warm, diffused glow perfect for reading nooks or living room corners.',
    highlights: [
      'Dimmable LED compatible',
      'Heavy base for stability',
      '6-foot fabric cord',
      'Foot pedal switch'
    ],
    tags: ['new-arrival', 'living-room', 'reading-corner'],
    relatedProductIds: [1, 6, 9]
  },
  {
    id: 3,
    name: 'Handwoven Macramé Wall Hanging',
    slug: 'handwoven-macrame-wall-hanging',
    category: 'home-decor',
    subcategory: 'wall-art',
    featured: false,
    price: '3,999',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/macrame.jpg',
      '/src/assets/images/products/macrame.jpg'
    ],
    thumbnail: '/src/assets/images/products/macrame.jpg',
    dimensions: '36" W x 48" H',
    material: '100% Cotton Cord, Wooden Dowel',
    colors: ['Natural', 'Ivory'],
    description: 'Add bohemian charm to your walls with this intricately handwoven macramé piece. Each knot is tied by skilled artisans, making every piece unique.',
    highlights: [
      'Fair trade certified',
      'Lightweight and easy to hang',
      'Each piece is unique',
      'Indoor use recommended'
    ],
    tags: ['boho', 'bedroom', 'living-room'],
    relatedProductIds: [7, 10, 4]
  },
  {
    id: 4,
    name: 'Terrazzo Coffee Table',
    slug: 'terrazzo-coffee-table',
    category: 'furniture',
    subcategory: 'tables',
    featured: true,
    price: '28,999',
    displayPrice: true,
    stock: 'made-to-order',
    images: [
      '/src/assets/images/products/table.jpg',
      '/src/assets/images/products/table.jpg',
      '/src/assets/images/products/table.jpg'
    ],
    thumbnail: '/src/assets/images/products/table.jpg',
    dimensions: '48" W x 24" D x 16" H',
    material: 'Terrazzo Top, Powder-coated Steel Legs',
    colors: ['White Terrazzo', 'Grey Terrazzo', 'Pink Terrazzo'],
    description: 'A contemporary showstopper. The terrazzo tabletop is cast in small batches using traditional Italian techniques, supported by sleek, minimalist steel legs.',
    highlights: [
      'Each terrazzo pattern is unique',
      'Sealed for stain resistance',
      'Felt pads on legs to protect floors',
      'Made to order: 3-4 week lead time'
    ],
    tags: ['bestseller', 'living-room', 'modern'],
    relatedProductIds: [1, 6, 11]
  },
  {
    id: 5,
    name: 'Linen Cushion Collection',
    slug: 'linen-cushion-collection',
    category: 'textiles',
    subcategory: 'cushions',
    featured: false,
    price: '1,299',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/cushions.jpg',
      '/src/assets/images/products/cushions.jpg',
      '/src/assets/images/products/cushions.jpg'
    ],
    thumbnail: '/src/assets/images/products/cushions.jpg',
    dimensions: '18" x 18"',
    material: '100% European Linen, Feather Insert',
    colors: ['Sand', 'Dusty Blue', 'Sage Green', 'Terracotta'],
    description: 'Layer texture and comfort with our pure linen cushions. The stonewashed finish gives them a relaxed, lived-in look from day one.',
    highlights: [
      'OEKO-TEX certified fabric',
      'Invisible zipper closure',
      'Includes premium feather insert',
      'Machine washable cover'
    ],
    tags: ['essential', 'living-room', 'bedroom'],
    relatedProductIds: [1, 3, 7]
  },
  {
    id: 6,
    name: 'Pendant Light - Rattan Dome',
    slug: 'pendant-light-rattan-dome',
    category: 'lighting',
    subcategory: 'pendant-lights',
    featured: true,
    price: '6,499',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/pendant.jpg',
      '/src/assets/images/products/pendant.jpg'
    ],
    thumbnail: '/src/assets/images/products/pendant.jpg',
    dimensions: '18" Diameter x 14" H',
    material: 'Natural Rattan, Metal Fittings',
    colors: ['Natural Rattan'],
    description: 'Bring warmth and texture to your dining area or kitchen island with this handwoven rattan pendant light. The open weave casts beautiful shadow patterns.',
    highlights: [
      'Adjustable cord length (up to 6ft)',
      'Compatible with E27 bulbs',
      'Handwoven by artisans',
      'Suitable for damp locations'
    ],
    tags: ['dining-room', 'kitchen', 'coastal-style'],
    relatedProductIds: [2, 4, 9]
  },
  {
    id: 7,
    name: 'Ceramic Vase Set',
    slug: 'ceramic-vase-set',
    category: 'home-decor',
    subcategory: 'vases',
    featured: false,
    price: '2,799',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/vases.jpg',
      '/src/assets/images/products/vases.jpg',
      '/src/assets/images/products/vases.jpg'
    ],
    thumbnail: '/src/assets/images/products/vases.jpg',
    dimensions: 'Large: 12" H, Small: 8" H',
    material: 'Stoneware Ceramic, Reactive Glaze',
    colors: ['Matte White', 'Speckled Beige', 'Charcoal'],
    description: 'A versatile trio of ceramic vases with a beautiful reactive glaze finish. Each piece has subtle variations that make it one of a kind.',
    highlights: [
      'Set of 3 vases',
      'Watertight for fresh flowers',
      'Reactive glaze - each piece unique',
      'Gift box available'
    ],
    tags: ['gift-idea', 'shelf-decor', 'centerpiece'],
    relatedProductIds: [3, 5, 10]
  },
  {
    id: 8,
    name: 'Industrial Bookshelf',
    slug: 'industrial-bookshelf',
    category: 'furniture',
    subcategory: 'shelving',
    featured: false,
    price: '35,000',
    displayPrice: true,
    stock: 'limited-stock',
    images: [
      '/src/assets/images/products/bookshelf.jpg',
      '/src/assets/images/products/bookshelf.jpg'
    ],
    thumbnail: '/src/assets/images/products/bookshelf.jpg',
    dimensions: '60" W x 16" D x 72" H',
    material: 'Reclaimed Teak Wood, Black Iron Frame',
    colors: ['Natural Teak / Black'],
    description: 'A striking blend of reclaimed wood and industrial metalwork. Five spacious shelves provide ample display and storage space.',
    highlights: [
      'Reclaimed teak - eco-friendly',
      'Each shelf holds up to 50 kg',
      'Adjustable shelf heights',
      'Wall anchor included'
    ],
    tags: ['home-office', 'living-room', 'industrial-style'],
    relatedProductIds: [4, 1, 11]
  },
  {
    id: 9,
    name: 'Brass Wall Sconce',
    slug: 'brass-wall-sconce',
    category: 'lighting',
    subcategory: 'wall-lights',
    featured: false,
    price: '4,200',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/sconce.jpg',
      '/src/assets/images/products/sconce.jpg'
    ],
    thumbnail: '/src/assets/images/products/sconce.jpg',
    dimensions: '8" H x 6" W x 4" D',
    material: 'Solid Brass, Opal Glass Globe',
    colors: ['Polished Brass', 'Antique Brass'],
    description: 'Elegant and understated, this brass wall sconce adds a warm glow to hallways, bedrooms, or beside mirrors.',
    highlights: [
      'Hardwired installation',
      'Dimmable with compatible switch',
      'G9 LED bulb included',
      'UL certified'
    ],
    tags: ['bedroom', 'hallway', 'bathroom-vanity'],
    relatedProductIds: [2, 6, 4]
  },
  {
    id: 10,
    name: 'Boho Jute Rug',
    slug: 'boho-jute-rug',
    category: 'textiles',
    subcategory: 'rugs',
    featured: false,
    price: '8,999',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/rug.jpg',
      '/src/assets/images/products/rug.jpg',
      '/src/assets/images/products/rug.jpg'
    ],
    thumbnail: '/src/assets/images/products/rug.jpg',
    dimensions: '5\' x 8\' (also available in 4\'x6\', 6\'x9\')',
    material: 'Hand-braided Jute, Cotton Border',
    colors: ['Natural Jute', 'Charcoal Border'],
    description: 'Bring organic texture underfoot with this hand-braided jute rug. Durable enough for high-traffic areas, soft enough for bare feet.',
    highlights: [
      'Reversible - double the life',
      'Suitable for high-traffic areas',
      'Non-shedding natural fiber',
      'Rug pad recommended'
    ],
    tags: ['living-room', 'dining-room', 'natural-materials'],
    relatedProductIds: [3, 5, 7]
  },
  {
    id: 11,
    name: 'Minimalist Console Table',
    slug: 'minimalist-console-table',
    category: 'furniture',
    subcategory: 'tables',
    featured: false,
    price: '18,500',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/console.jpg',
      '/src/assets/images/products/console.jpg'
    ],
    thumbnail: '/src/assets/images/products/console.jpg',
    dimensions: '48" W x 14" D x 32" H',
    material: 'Solid Mango Wood, Hairpin Legs',
    colors: ['Natural Wood', 'Walnut Stain', 'Black Stain'],
    description: 'Sleek and versatile, this console table fits perfectly in entryways, behind sofas, or as a hallway statement piece.',
    highlights: [
      'Solid wood - no veneer',
      'Easy 15-minute assembly',
      'Available in 3 finishes',
      'Anti-tip kit included'
    ],
    tags: ['entryway', 'hallway', 'scandinavian-style'],
    relatedProductIds: [4, 8, 1]
  },
  {
    id: 12,
    name: 'Scented Soy Candle Collection',
    slug: 'scented-soy-candle-collection',
    category: 'home-decor',
    subcategory: 'candles',
    featured: false,
    price: '899',
    displayPrice: true,
    stock: 'in-stock',
    images: [
      '/src/assets/images/products/candles.jpg',
      '/src/assets/images/products/candles.jpg'
    ],
    thumbnail: '/src/assets/images/products/candles.jpg',
    dimensions: '8 oz, 50-hour burn time',
    material: '100% Soy Wax, Cotton Wick, Glass Jar',
    colors: ['Clear Glass'],
    description: 'Fill your home with our signature fragrances. Hand-poured soy candles in reusable glass vessels.',
    highlights: [
      'Phthalate-free fragrances',
      '50+ hour burn time',
      'Reusable glass jar',
      'Scents: Vanilla & Sandalwood, Lavender & Sage, Citrus & Mint'
    ],
    tags: ['gift-idea', 'self-care', 'aromatherapy'],
    relatedProductIds: [7, 3, 5]
  }
];

export const categories = [
  { 
    id: 'furniture', 
    label: 'Furniture', 
    icon: '🪑',
    subcategories: ['sofas', 'tables', 'shelving', 'seating']
  },
  { 
    id: 'lighting', 
    label: 'Lighting', 
    icon: '💡',
    subcategories: ['floor-lamps', 'pendant-lights', 'wall-lights', 'table-lamps']
  },
  { 
    id: 'home-decor', 
    label: 'Home Decor', 
    icon: '🏺',
    subcategories: ['wall-art', 'vases', 'candles', 'mirrors']
  },
  { 
    id: 'textiles', 
    label: 'Textiles', 
    icon: '🧶',
    subcategories: ['cushions', 'rugs', 'throws', 'curtains']
  }
];