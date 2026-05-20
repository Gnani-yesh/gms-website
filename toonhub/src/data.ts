export interface Shake {
  id: string
  name: string
  tag: string
  blurb: string
  src: string
  bg: string
  note: string
  price: string
}

export const SHAKES: Shake[] = [
  {
    id: 'velvet-chocolate',
    name: 'Velvet Chocolate',
    tag: 'Bestseller',
    blurb: 'Dark Belgian chocolate, brownie chunks, and a heavy chocolate drizzle.',
    src: '/velvet-chocolate.png',
    bg: '#9A6638',
    note: 'Hand-blended · 475 ml',
    price: '₹289',
  },
  {
    id: 'pink-static',
    name: 'Pink Static',
    tag: 'New Drop',
    blurb: 'Strawberry cream, marshmallow fluff, and a wild berry syrup swirl.',
    src: '/pink-static.png',
    bg: '#E85E92',
    note: 'Hand-blended · 475 ml',
    price: '₹279',
  },
  {
    id: 'matcha-melt',
    name: 'Matcha Melt',
    tag: 'Studio Pick',
    blurb: 'Japanese matcha, vanilla cream, and a toasted matcha sponge crumble.',
    src: '/matcha-melt.png',
    bg: '#8FA84C',
    note: 'Hand-blended · 475 ml',
    price: '₹319',
  },
  {
    id: 'caramel-riot',
    name: 'Caramel Riot',
    tag: 'Signature',
    blurb: 'Salted caramel, cookie crunch, and a glossy caramel glaze.',
    src: '/caramel-riot.png',
    bg: '#E0A04C',
    note: 'Hand-blended · 475 ml',
    price: '₹299',
  },
]
