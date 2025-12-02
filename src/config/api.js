const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const TMDB_CONFIG = {
  API_KEY,
  BASE_URL: 'https://api.themoviedb.org/3',
  IMAGE_BASE_URL: 'https://image.tmdb.org/t/p',
  LANGUAGE: 'pl-PL',
};

export const createTMDBUrl = (endpoint) => 
  `${TMDB_CONFIG.BASE_URL}/${endpoint}?api_key=${TMDB_CONFIG.API_KEY}&language=${TMDB_CONFIG.LANGUAGE}`;
