// IDAGDAG MO ITO SA ITAAS
export type Sponsor = {
  name: string;
  logo: string;
};

// I-keep mo ang Concert type mo (ngayon, alam na ni TS kung ano ang Sponsor)
export type Concert = {
  id: string;
  title: string;
  date: string;
  venue: string;
  status: string;
  cardImage: string;    
  bannerImage: string;  
  posterImage: string;
  description: string;
  sponsors: Sponsor[]; 
};

export const concerts: Concert[] = [
  { id: '1', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN BACOLOD', date: 'July 11, 2026', venue: 'SMX Convention Center Bacolod', status: '20 Days to go', cardImage:'/CARDS/[1]/IB CARDS.jpg', bannerImage:'/BANNERS/[1]/IB BANNER.jpg', posterImage: '/POSTERS/[1]/IB BACOLOD PRICES & QR POSTER.jpg', description:'Get ready for a night of pure musical magic! Witness the undeniable chemistry and powerhouse vocals of OPM’s favorite couple, TJ Monterde and KZ Tandingan, in their collaborative concert, "IN BETWEEN." Under the visionary direction of John Prats, this show promises more than just a performance—it’s an intimate journey through music, love, and the beautiful space they share. Don’t miss out on this unforgettable celebration of artistry and connection!', sponsors: [
      { name: 'Cornerstone', logo: '/SPONSORS/[1]/CS LOGO.jpg' },
      { name: 'TRS', logo: '/SPONSORS/[1]/TRS LOGO.jpg' },
      { name: 'SMX', logo: '/SPONSORS/[1]/SMX BACOlOD LOGO.jpg' },
      { name: 'SM BACOLOD', logo: '/SPONSORS/[1]/SM BACOLOD HORIZONTAL LOCKUP REVERSE.png' },
      { name: 'ROYS HOTEL', logo: '/SPONSORS/[1]/ROYS HOTEL LOGO.jpg' },
      { name: 'BONGBONGS', logo: '/SPONSORS/[1]/BONGBONGS LOGO.jpg' },
      { name: 'kkc', logo: '/SPONSORS/[1]/KKC LOGO.jpg' },
      { name: 'BOKNOYS', logo: '/SPONSORS/[1]/BOKNOYS LOGO.jpg' },
      { name: 'RED BLACKSCORP', logo: '/SPONSORS/[1]/RED BLACKSCORP LOGO.jpg' },
      { name: 'NENE & JOEL', logo: '/SPONSORS/[1]/NENE & JOEL LOGO.jpg' },
      { name: 'HOME FURNITURES ESSENTIALS', logo: '/SPONSORS/[1]/HOME FURNITURES ESSENTIALS LOGO.jpg' },
    ]},
  { id: '2', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN CDO', date: 'August 08, 2026', venue: 'The Atrium Limketkai Mall', status: 'Up Coming', cardImage:'/CARDS/[2]/IB CARDS.jpg', bannerImage:'/BANNERS/[2]/IB BANNER.jpg', posterImage: '/POSTERS/[2]/IB CDO PRICES & QR POSTER.jpg', description:'DESCRIPTIONS', sponsors: [
      { name: 'LOGO', logo: '/sponsors/smart-logo.png' },
      { name: 'LOGO', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '3', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN CEBU', date: 'September 05, 2026', venue: 'SM Seaside Cebu', status: 'Up Coming', cardImage:'/CARDS/[3]/IB CARDS.jpg', bannerImage:'/BANNERS/[3]/IB BANNER.jpg', posterImage: '/POSTERS/[3]/IB CEBU POSTER.jpg', description:'DESCRIPTIONS', sponsors: [
      { name: 'LOGO', logo: '/sponsors/smart-logo.png' },
      { name: 'LOGO', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '4', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN LAGUNA', date: 'September 12, 2026', venue: 'St. Rosa Multi-purpose Center', status: 'Up Coming', cardImage:'/CARDS/[4]/IB CARDS.jpg', bannerImage:'/BANNERS/[4]/IB BANNER.jpg', posterImage: '/POSTERS/[4]/IB LAGUNA PRICES & QR POSTER.jpg', description:'DESCRIPTIONS', sponsors: [
      { name: 'LOGO', logo: '/sponsors/smart-logo.png' },
      { name: 'LOGO', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '5', title: 'GET GET AWW! SEXBOMB IN DAVAO', date: 'November 20, 2026', venue: 'USeP', status: 'Up Coming', cardImage:'/CARDS/[5]/SB DAVAO.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/POSTERS/[5]/SB DAVAO GROUP POSTER.jpg', description:'DESCRIPTIONS', sponsors: [
      { name: 'LOGO', logo: '/sponsors/smart-logo.png' },
      { name: 'LOGO', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '12', title: 'WILBERT ROSS LIVE IN DAVAO', date: 'Dec 20, 2026', venue: 'SM Seaside Cebu', status: 'Up Coming', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'DESCRIPTIONS', sponsors: [
      { name: 'LOGO', logo: '/sponsors/smart-logo.png' },
      { name: 'LOGO', logo: '/sponsors/coke-logo.png' }
    ]},


];