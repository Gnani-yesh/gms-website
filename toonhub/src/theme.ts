export const INK = '#17130E'
export const CREAM = '#F4EEE2'

// MELTD flavor accents: chocolate, strawberry, matcha, caramel
export const ACCENTS = ['#8A5A3E', '#E85E92', '#8FA84C', '#E0A04C'] as const

export const GRAIN_URI = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='tg'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(#tg)' opacity='0.08'/></svg>",
)}`
