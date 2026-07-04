export type Product = {
  id: string
  name: string
  description: string
  category: string
  price: number
  rating: number
  reviews: Review[]
  image: string
  available: boolean
  tags: string[]
}

type Review = {
  id: string
  author: string
  rating: number
  message: string
  date: string
}

export const products: Product[] = [
  {
    id: 'classic-hoodie',
    name: 'Classic Hoodie',
    description: 'Soft cotton blend hoodie with a relaxed fit and modern silhouette.',
    category: 'Apparel',
    price: 54,
    rating: 4.8,
    available: true,
    image: "/images/hoodie.jfif",
    tags: ['hoodie', 'cozy', 'winter'],
    reviews: [
      {
        id: 'r1',
        author: 'Avery',
        rating: 5,
        message: 'Super comfortable and high quality.',
        date: '2025-06-14',
      },
      {
        id: 'r2',
        author: 'Jordan',
        rating: 4,
        message: 'Great hoodie, just wish it had more colors.',
        date: '2025-05-22',
      },
    ],
  },
  {
    id: 'minimalist-backpack',
    name: 'Minimalist Backpack',
    description: 'Lightweight pack with durable water-resistant fabric and padded straps.',
    category: 'Accessories',
    price: 72,
    rating: 4.6,
    available: true,
    image: '/images/backpack.png',
    tags: ['backpack', 'travel', 'daily'],
    reviews: [
      {
        id: 'r3',
        author: 'Taylor',
        rating: 5,
        message: 'Perfect for daily commuting and work.',
        date: '2025-04-30',
      },
    ],
  },
  {
    id: 'noise-cancelling-headphones',
    name: 'Noise Cancelling Headphones',
    description: 'Wireless over-ear headphones with premium audio and adaptive noise cancellation.',
    category: 'Electronics',
    price: 199,
    rating: 4.9,
    available: true,
    image: '/images/headphones.jfif',
    tags: ['audio', 'wireless', 'tech'],
    reviews: [
      {
        id: 'r4',
        author: 'Morgan',
        rating: 5,
        message: 'Audio quality is excellent, battery lasts all week.',
        date: '2025-06-02',
      },
    ],
  },
  {
    id: 'everyday-sneakers',
    name: 'Everyday Sneakers',
    description: 'Classic silhouette sneakers with breathable knit upper and cushioned sole.',
    category: 'Footwear',
    price: 89,
    rating: 4.5,
    available: false,
    image: '/images/sneakers.jpg',
    tags: ['sneakers', 'comfort', 'running'],
    reviews: [
      {
        id: 'r5',
        author: 'Casey',
        rating: 4,
        message: 'Very comfortable, but sizing runs slightly small.',
        date: '2025-05-10',
      },
    ],
  },
]

export const categories = ['All', 'Apparel', 'Accessories', 'Electronics', 'Footwear']
