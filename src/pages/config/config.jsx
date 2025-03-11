// config.js
let BASE_URL;
const COMPANY_NAME = 'PawClix';
const APP_NAME = 'PawClix';
const EMAIL = 'info.pawclix@gmail.com';
const PHONE = '+37129771299';
const COUNTRY = 'Latvia';
const CITY = 'Riga';
const FACEBOOK = 'https://www.facebook.com/profile.php?id=61550040675884';
const INSTAGRAM = 'https://www.instagram.com/pawclix/';
// const DOMAIN_URL = 'https://pawclix.vercel.app';
const DOMAIN_URL = 'https://pawclix.com';

if (process.env.NODE_ENV === 'production') {
  // Set production API URL
  BASE_URL = 'https://petappbackend.vercel.app/api';
} else {
  // Set localhost API URL for development and test environments
  BASE_URL = 'http://localhost:5000/api';
}

export {
  BASE_URL,
  COMPANY_NAME,
  APP_NAME,
  EMAIL,
  PHONE,
  COUNTRY,
  CITY,
  FACEBOOK,
  INSTAGRAM,
  DOMAIN_URL,
};
