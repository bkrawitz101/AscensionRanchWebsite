const stays = [
  {
    slug: 'eagles-nest',
    name: `Eagle's Nest`,
    tag: 'Perched',
    desc: `High above the meadow on a gently sloping ridge, Eagle's Nest offers panoramic views across the property and the nearby lake. A private platform and sheltered fire circle make evenings unforgettable. Ideal for couples or solo travelers seeking quiet and wide skies.`,
    price: 'From $85/night',
    images: [
      `${import.meta.env.BASE_URL}images/eaglesnest1.jpg`,
      `${import.meta.env.BASE_URL}images/eaglesnest2.jpg`
    ],
    details: {
      capacity: '2 guests',
      vehicle: 'Small to mid-size vehicles recommended; short unpaved drive',
      facilities: ['Private fire circle', 'Platform sleeping area', 'Basic composting loo nearby']
    }
  },
  {
    slug: 'hold-your-horses',
    name: 'Hold Your Horses',
    tag: 'Hands-On',
    desc: `A spacious, horse-adjacent site designed for guests who want to be close to the herd. Mornings are filled with soft nickers and the option to join light stewardship tasks. Perfect for families and equine lovers wanting an immersive stay.`,
    price: 'From $95/night',
    images: [
      `${import.meta.env.BASE_URL}images/holdyourhorses1.jpg`,
      `${import.meta.env.BASE_URL}images/holdyourhorses2.jpg`
    ],
    details: {
      capacity: '4 guests',
      vehicle: 'Vehicle height limit applies near pasture gate',
      facilities: ['Shared wash station', 'Nearby herd viewing', 'Optional morning stewardship activities']
    }
  },
  {
    slug: 'meadow-view-equestrian',
    name: 'Meadow View Equestrian',
    tag: 'Scenic',
    desc: `Nestled on the edge of a wildflower meadow, this site blends comfortable camping with open pasture views. Wide sightlines and easy access to walking trails make it a peaceful base for morning coffee and sunset watching.`,
    price: 'From $72/night',
    images: [
      `${import.meta.env.BASE_URL}images/meadowview1.jpg`,
      `${import.meta.env.BASE_URL}images/meadowview2.jpg`
    ],
    details: {
      capacity: '3 guests',
      vehicle: 'Accessible with most vehicles',
      facilities: ['Trail access', 'Meadow views', 'Portable shade structure pad']
    }
  }
];

export default stays;
