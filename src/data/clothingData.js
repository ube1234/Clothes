export const clothingData = {
  women: [
    {
      id: 1,
      name: "Elegant Summer Dress",
      price: 7499,
      originalPrice: 9999,
      discount: 25,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
      category: "Dresses",
      color: "Floral Print",
      isNew: true,
      isHot: false
    },
    {
      id: 2,
      name: "Classic White Blazer",
      price: 10899,
      originalPrice: 12999,
      discount: 16,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=500&fit=crop",
      category: "Blazers",
      color: "White",
      isNew: false,
      isHot: true
    },
    {
      id: 3,
      name: "Designer Jeans",
      price: 6699,
      originalPrice: 7999,
      discount: 16,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      category: "Jeans",
      color: "Blue",
      isNew: true,
      isHot: false
    },
    {
      id: 4,
      name: "Silk Evening Gown",
      price: 16999,
      originalPrice: 19999,
      discount: 15,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=500&fit=crop",
      category: "Dresses",
      color: "Navy Blue",
      isNew: false,
      isHot: true
    },
    {
      id: 5,
      name: "Casual T-Shirt",
      price: 2499,
      originalPrice: 2999,
      discount: 17,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      category: "Tops",
      color: "Pink",
      isNew: true,
      isHot: false
    },
    {
      id: 6,
      name: "Leather Jacket",
      price: 20999,
      originalPrice: 24999,
      discount: 16,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      category: "Jackets",
      color: "Black",
      isNew: false,
      isHot: true
    }
  ],
  men: [
    {
      id: 7,
      name: "Classic Suit",
      price: 24999,
      originalPrice: 29999,
      discount: 17,
      image: "https://images.unsplash.com/photo-1594938291221-94f18cbb708b?w=400&h=500&fit=crop",
      category: "Suits",
      color: "Navy",
      isNew: false,
      isHot: true
    },
    {
      id: 8,
      name: "Casual Polo Shirt",
      price: 4199,
      originalPrice: 4999,
      discount: 16,
      image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400&h=500&fit=crop",
      category: "Shirts",
      color: "Blue",
      isNew: true,
      isHot: false
    },
    {
      id: 9,
      name: "Denim Jacket",
      price: 7499,
      originalPrice: 8999,
      discount: 17,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      category: "Jackets",
      color: "Blue",
      isNew: true,
      isHot: false
    },
    {
      id: 10,
      name: "Slim Fit Jeans",
      price: 5899,
      originalPrice: 6999,
      discount: 16,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      category: "Jeans",
      color: "Dark Blue",
      isNew: false,
      isHot: true
    },
    {
      id: 11,
      name: "Formal Dress Shirt",
      price: 4999,
      originalPrice: 5999,
      discount: 17,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=500&fit=crop",
      category: "Shirts",
      color: "White",
      isNew: true,
      isHot: false
    },
    {
      id: 12,
      name: "Hooded Sweatshirt",
      price: 5499,
      originalPrice: 6499,
      discount: 15,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      category: "Sweatshirts",
      color: "Gray",
      isNew: false,
      isHot: true
    }
  ]
};

// Special deals and offers
export const specialDeals = [
  {
    id: 1,
    title: "Flash Sale",
    description: "Upto 50% OFF on Selected Items",
    discount: 50,
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours from now
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Weekend Special",
    description: "Buy 2 Get 1 Free",
    discount: 33,
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000), // 48 hours from now
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "New Arrivals",
    description: "Extra 10% OFF on New Collection",
    discount: 10,
    endTime: new Date(Date.now() + 72 * 60 * 60 * 1000), // 72 hours from now
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=400&fit=crop"
  }
];
