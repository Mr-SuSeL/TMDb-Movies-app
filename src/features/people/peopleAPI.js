const TMDB_KEY = import.meta.env.VITE_TMDB_KEY || import.meta.env.REACT_APP_TMDB_API_KEY;
const API_BASE_URL = "https://api.themoviedb.org/3";

export const getPopularPeople = async (page) => {

    if (!TMDB_KEY) {
        throw new Error("TMDB API Key is missing. Check your .env file.");
    }

    const url = new URL(`${API_BASE_URL}/person/popular`);

    url.searchParams.set("api_key", TMDB_KEY);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};