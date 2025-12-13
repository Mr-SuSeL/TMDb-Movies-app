import { TMDB_CONFIG } from '../../config/api';

export async function fetchPopularMovies(page = 1) {
	const url = `${TMDB_CONFIG.BASE_URL}/movie/popular?api_key=${TMDB_CONFIG.API_KEY}&language=${TMDB_CONFIG.LANGUAGE}&page=${page}`;
	const res = await fetch(url);
	if (!res.ok) throw new Error('Failed to fetch popular movies');
	const data = await res.json();
	return data;
}

export default { fetchPopularMovies };
