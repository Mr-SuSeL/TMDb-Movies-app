export const getPopularPeople = async (page) => {

    const TMDB_KEY = import.meta.env.REACT_APP_TMDB_API_KEY; 

    if (!TMDB_KEY) {
        console.error("BŁĄD: Klucz TMDB nie został odczytany! Sprawdź .env.");
        throw new Error("TMDB API Key is missing.");
    }

    const API_BASE_URL = "https://api.themoviedb.org/3";
    const url = new URL(`${API_BASE_URL}/person/popular`);

    url.searchParams.set("api_key", TMDB_KEY);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");

    const response = await fetch(url);

    if (!response.ok) {

        console.error(`BŁĄD API! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};