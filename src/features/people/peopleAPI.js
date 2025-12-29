const sanitize = (v) => (v ? v.replace(/['"]/g, "") : undefined);

export const getTrendingPeople = async (page, timeWindow = "day") => {
    const V4_BEARER = sanitize(process.env.REACT_APP_TMDB_BEARER);
    const V3_KEY = sanitize(process.env.REACT_APP_TMDB_API_KEY);
    const BASE_URL = sanitize(process.env.BASE_URL) || "https://api.themoviedb.org/3";

    const trendingUrl = new URL(`${BASE_URL}/trending/person/${timeWindow}`);
    trendingUrl.searchParams.set("page", page);
    trendingUrl.searchParams.set("language", "pl-PL");

    let response;
    if (V4_BEARER) {
        response = await fetch(trendingUrl, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${V4_BEARER}`,
            },
        });
    } else if (V3_KEY) {
        trendingUrl.searchParams.set("api_key", V3_KEY);
        response = await fetch(trendingUrl);
    } else {
        console.error("BŁĄD: Brak REACT_APP_TMDB_BEARER oraz REACT_APP_TMDB_API_KEY w .env");
        throw new Error("Missing TMDB credentials");
    }

    if (!response.ok) {
        console.error(`BŁĄD API! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};

export const getPopularPeople = async (page) => {
    const V3_KEY = sanitize(process.env.REACT_APP_TMDB_API_KEY);
    const BASE_URL = sanitize(process.env.BASE_URL) || "https://api.themoviedb.org/3";

    if (!V3_KEY) {
        console.error("BŁĄD: Klucz TMDB nie został odczytany! Sprawdź .env.");
        throw new Error("TMDB API Key is missing.");
    }

    const url = new URL(`${BASE_URL}/person/popular`);
    url.searchParams.set("api_key", V3_KEY);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");

    const response = await fetch(url);
    if (!response.ok) {
        console.error(`BŁĄD API! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
};

export const searchPeople = async ({ page = 1, query }) => {
    const V3_KEY = sanitize(process.env.REACT_APP_TMDB_API_KEY);
    const BASE_URL = sanitize(process.env.BASE_URL) || "https://api.themoviedb.org/3";

    if (!V3_KEY) {
        console.error("BŁĄD: Klucz TMDB nie został odczytany! Sprawdź .env.");
        throw new Error("TMDB API Key is missing.");
    }

    const safeQuery = (query || "").trim();
    if (!safeQuery) {
        return getPopularPeople(page);
    }

    const url = new URL(`${BASE_URL}/search/person`);
    url.searchParams.set("api_key", V3_KEY);
    url.searchParams.set("query", safeQuery);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");
    url.searchParams.set("include_adult", "false");

    const response = await fetch(url);
    if (!response.ok) {
        console.error(`BŁĄD API! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
};