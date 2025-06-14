import { FullOffer } from '../types/offer'

const offers: FullOffer[] = [
  {
    id: 'bub@abc-3f92-446d-8a88-cbc0b5d38c2b',
    title: 'Wood and stone place',
    description: 'A new spacious villa, one floor. All commodities, jacuzzi and beautiful scenery. Ideal for families',
    type: 'apartment',
    price: 370,
    images: [
      '20.jpg',
      '17.jpg',
      '16.jpg',
      '13.jpg',
      '2.jpg',
      '7.jpg'
    ],
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868618000000084,
      longitude: 2.342499,
      zoom: 16
    },
    goods: [
      'Heating',
      'Wi-Fi',
      'Fridge',
      'Laptop friendly workspace',
      'Baby seat',
      'Air conditioning',
      'Washer',
      'Towels',
      'Dishwasher',
      'Kitchen',
      'Washing machine',
      'Breakfast',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 2,
    maxAdults: 3
  }
];

export {offers}