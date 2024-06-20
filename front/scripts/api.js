import axios from 'axios';

export async function fetchMovies() {
    const url = 'http://localhost:3000/api/movies';

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
}
