import { fetch } from "expo/fetch";

export const TMDB_CONFIG = {
    baseUrl: 'https://api.themoviedb.org/3',
    // Regular API key for URL parameters (v3 auth)
    API_KEY: '68c97b440a0364b9a6e4cb60e174debb',
    // JWT token for bearer authentication (v4 auth)
    ACCESS_TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGM5N2I0NDBhMDM2NGI5YTZlNGNiNjBlMTc0ZGViYiIsIm5iZiI6MTc0NzEzOTQ4NC40MjksInN1YiI6IjY4MjMzYjljMjE5YjhlOWE3YjczOTdlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Umur0wZyKeCEv62D1wsH5sYmnGdDIWNG-kBN2E24Pzo',
    headers: {
        accept: 'application/json',
        authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OGM5N2I0NDBhMDM2NGI5YTZlNGNiNjBlMTc0ZGViYiIsIm5iZiI6MTc0NzEzOTQ4NC40MjksInN1YiI6IjY4MjMzYjljMjE5YjhlOWE3YjczOTdlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Umur0wZyKeCEv62D1wsH5sYmnGdDIWNG-kBN2E24Pzo`
    }
}

export const fetchMovies = async ({query}: {query: string}) => {
    try {
    const endpoint = query
            ? `${TMDB_CONFIG.baseUrl}/search/movie?api_key=${TMDB_CONFIG.API_KEY}&query=${encodeURIComponent(query)}`
            : `${TMDB_CONFIG.baseUrl}/discover/movie?api_key=${TMDB_CONFIG.API_KEY}&sort_by=popularity.desc`;

        console.log('Fetching from endpoint:', endpoint);

        const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers,
    });
        
        if(!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            throw new Error(`Failed to fetch movies: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    return data.results;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
}

export const fetchMovieDetails = async (movieId: string): Promise<MovieDetails> => {
    try{
        const endpoint = `${TMDB_CONFIG.baseUrl}/movie/${movieId}?api_key=${TMDB_CONFIG.API_KEY}`;
        console.log('Fetching movie details from:', endpoint);
        
        const response = await fetch(endpoint, {
            method: 'GET',
            headers: TMDB_CONFIG.headers,
        });

        if(!response.ok) {
            const errorText = await response.text();
            console.error('API Error:', response.status, errorText);
            throw new Error(`Failed to fetch movie details: ${response.status} ${errorText}`);
        }

        const data = await response.json();
        return data;
    } catch(error){
        console.error('Fetch error:', error);
        throw error;
    }
}