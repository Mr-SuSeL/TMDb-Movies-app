const sanitize = (v) => (v ? v.replace(/['"]/g, "") : undefined);

const V3_KEY = sanitize(process.env.REACT_APP_TMDB_API_KEY);
const V4_BEARER = sanitize(process.env.REACT_APP_TMDB_BEARER);
const BASE_URL = sanitize(process.env.BASE_URL) || "https://api.themoviedb.org/3";

// Wspólna funkcja pomocnicza do wykonywania zapytań (dla zachowania czystości kodu)
const fetchTMDB = async (url) => {
    let response;
    if (V4_BEARER) {
        response = await fetch(url, {
            headers: {
                accept: "application/json",
                Authorization: `Bearer ${V4_BEARER}`,
            },
        });
    } else if (V3_KEY) {
        url.searchParams.set("api_key", V3_KEY);
        response = await fetch(url);
    } else {
        console.error("BŁĄD: Brak kluczy TMDB w .env");
        throw new Error("Missing TMDB credentials");
    }

    if (!response.ok) {
        console.error(`BŁĄD API! Status: ${response.status}`);
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
};

export const getTrendingPeople = async (page, timeWindow = "day") => {
    const url = new URL(`${BASE_URL}/trending/person/${timeWindow}`);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");
    return await fetchTMDB(url);
};

export const getPopularPeople = async (page) => {
    const url = new URL(`${BASE_URL}/person/popular`);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");
    return await fetchTMDB(url);
};

// NOWA FUNKCJA DO WYSZUKIWANIA LUDZI
export const searchPeople = async (query, page) => {
    if (!query) return; // Zabezpieczenie przed pustym zapytaniem

    const url = new URL(`${BASE_URL}/search/person`);
    url.searchParams.set("query", query);
    url.searchParams.set("page", page);
    url.searchParams.set("language", "pl-PL");
    
    return await fetchTMDB(url);
};