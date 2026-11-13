import type { Product } from '../types';
import belouranCaliforniaDreamingZipUp from '../assets/belouran-california-dreaming-zip-up.png';
import belouranDawgTee from '../assets/belouran-dawg-tee.png';
import belouranScaryfaceTee from '../assets/belouran-scaryface-tee.png';
import belouranPunkJacket from '../assets/belouran-punk-jacket.png';
import belouranBaggyMudJeans from '../assets/belouran-baggy-mud-jeans.png';
import belouranTieDyeTee from '../assets/belouran-tie-dye-tee.png';
import belouranAngelPoster from '../assets/belouran-angel-poster.png';
import greyVibesPoster from '../assets/grey-vibes-poster.png';

export const products: Product[] = [
  {
    id: '1',
    slug: 'belouran-california-dreaming-zip-up',
    name: 'BELOURAN CALIFORNIA DREAMING ZIP-UP',
    price: 40,
    currency: 'USD',
    image: belouranCaliforniaDreamingZipUp,
    images: [
      belouranCaliforniaDreamingZipUp,
    ],
    category: 'ZIP-UP',
    collection: 'FW26',
    sizes: ['M'],
    description: 'Distressed vintage zip-up hoodie with beautiful boro pockets, featuring studs on the hood.',
    emitterColor: '#5c5b52',
    accentColor: '#00ff88',
  },
  {
    id: '2',
    slug: 'belouran-dawg-tee',
    name: 'BELOURAN DAWG TEE',
    price: 75,
    currency: 'USD',
    image: belouranDawgTee,
    images: [
      belouranDawgTee,
    ],
    category: 'T-SHIRTS',
    collection: 'FW26',
    sizes: ['M'],
    description: 'Heavily distressed vintage cropped t-shirt with sigils and a bulldog print.',
    emitterColor: '#d6d2d7',
    accentColor: '#00ff88',
  },
  {
    id: '3',
    slug: 'belouran-scaryface-tee',
    name: 'BELOURAN SCARYFACE TEE',
    price: 75,
    currency: 'USD',
    image: belouranScaryfaceTee,
    images: [
      belouranScaryfaceTee,
    ],
    category: 'T-SHIRTS',
    collection: 'FW26',
    sizes: ['M'],
    description: 'Heavily distressed vintage Hard Rock Cafe Cleveland cropped t-shirt made in USA.',
    emitterColor: '#e0e0e0',
    accentColor: '#00ff88',
    soldOut: true,
  },
  {
    id: '4',
    slug: 'belouran-punk-jacket',
    name: 'BELOURAN PUNK JACKET',
    price: 275,
    currency: 'USD',
    image: belouranPunkJacket,
    images: [
      belouranPunkJacket,
    ],
    category: 'JACKETS',
    collection: 'FW26',
    sizes: ['L'],
    description: 'Workwear jacket with handmade graphics, studs and patches.',
    emitterColor: '#9e9d99',
    accentColor: '#00ff88',
  },
  {
    id: '5',
    slug: 'belouran-baggy-mud-jeans',
    name: 'BELOURAN BAGGY MUD JEANS',
    price: 195,
    currency: 'USD',
    image: belouranBaggyMudJeans,
    images: [
      belouranBaggyMudJeans,
    ],
    category: 'JEANS',
    collection: 'FW26',
    sizes: ['M'],
    description: `Awesome silhouette, super baggy, beautifully faded.
    Measurements (laid out):
    - waist: 42cm
    - length: 100cm
    - leg opening: 35cm`,
    emitterColor: '#5e391d',
    accentColor: '#00ff88',
    soldOut: true,
  },
  {
    id: '6',
    slug: 'belouran-tie-dye-tee',
    name: 'BELOURAN TIE DYE TEE',
    price: 110,
    currency: 'USD',
    image: belouranTieDyeTee,
    images: [
      belouranTieDyeTee,
    ],
    category: 'T-SHIRTS',
    collection: 'FW26',
    sizes: ['M'],
    description: 'distressed vintage tie-dye cropped t-shirt with cool details on the back',
    emitterColor: '#4f6c69',
    accentColor: '#00ff88',
  },
  {
    id: '7',
    slug: 'belouran-angel-poster',
    name: 'BELOURAN ANGEL POSTER',
    price: 35,
    currency: 'USD',
    image: belouranAngelPoster,
    images: [
      belouranAngelPoster,
    ],
    category: 'POSTERS',
    collection: 'ETERNAL',
    sizes: ['A4'],
    description: 'High quality print on glossy paper.',
    emitterColor: '#444444',
    accentColor: '#00ff88',
  },
  {
    id: '8',
    slug: 'grey-vibes-poster',
    name: 'BELOURAN GREY VIBES POSTER',
    price: 35,
    currency: 'USD',
    image: greyVibesPoster,
    images: [
      greyVibesPoster,
    ],
    category: 'POSTERS',
    collection: 'ETERNAL',
    sizes: ['A4'],
    description: 'High quality print on glossy paper.',
    emitterColor: '#3a3a3a',
    accentColor: '#00ff88',
    soldOut: false,
  },
];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);
