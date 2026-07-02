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
  { id: '1', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN BACOLOD', date: 'July 11, 2026', venue: 'SMX Convention Center Bacolod', status: '20 Days to go', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'ETO ANG DESCRIPTIONS DITO NATIN ILALAGAY NAG MALULUPET NA DETAILS NG CONCERTS PARA SA MGA USERS', sponsors: [
      { name: 'Cornerstone', logo: '/CS LOGO.png' },
      { name: 'Berce', logo: '/BERCE LOGO.png' }
    ]},
  { id: '2', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN CDO', date: 'November 05, 2026', venue: 'The Atrium Limketkai Mall', status: 'Up Coming', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'ETO ANG DESCRIPTIONS DITO NATIN ILALAGAY NAG MALULUPET NA DETAILS NG CONCERTS PARA SA MGA USERS', sponsors: [
      { name: 'Smart', logo: '/sponsors/smart-logo.png' },
      { name: 'Coke', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '3', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN CEBU', date: 'December 20, 2026', venue: 'SM Seaside Cebu', status: 'Up Coming', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'ETO ANG DESCRIPTIONS DITO NATIN ILALAGAY NAG MALULUPET NA DETAILS NG CONCERTS PARA SA MGA USERS', sponsors: [
      { name: 'Smart', logo: '/sponsors/smart-logo.png' },
      { name: 'Coke', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '4', title: 'TJ MONTERDE & KZ TANDINGAN | IN BETWEEN LIVE IN LAGUNA', date: 'September 20, 2026', venue: 'St. Rosa Multi-purpose Center', status: 'Up Coming', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'ETO ANG DESCRIPTIONS DITO NATIN ILALAGAY NAG MALULUPET NA DETAILS NG CONCERTS PARA SA MGA USERS', sponsors: [
      { name: 'Smart', logo: '/sponsors/smart-logo.png' },
      { name: 'Coke', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '5', title: 'GET GET AWW! SEXBOMB IN DAVAO', date: 'November 20, 2026', venue: 'USeP', status: 'Up Coming', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'ETO ANG DESCRIPTIONS DITO NATIN ILALAGAY NAG MALULUPET NA DETAILS NG CONCERTS PARA SA MGA USERS', sponsors: [
      { name: 'Smart', logo: '/sponsors/smart-logo.png' },
      { name: 'Coke', logo: '/sponsors/coke-logo.png' }
    ]},
  { id: '12', title: 'WILBERT ROSS LIVE IN DAVAO', date: 'Dec 20, 2026', venue: 'SM Seaside Cebu', status: 'Up Coming', cardImage:'/CEBU DAVAO POSTER.jpg', bannerImage:'/CEBU DAVAO POSTER.jpg', posterImage: '/CEBU DAVAO POSTER.jpg', description:'ETO ANG DESCRIPTIONS DITO NATIN ILALAGAY NAG MALULUPET NA DETAILS NG CONCERTS PARA SA MGA USERS', sponsors: [
      { name: 'Smart', logo: '/sponsors/smart-logo.png' },
      { name: 'Coke', logo: '/sponsors/coke-logo.png' }
    ]},


];