// src/api/API.tsx
const searchOMDB = async (query: string) => {
  try {
    // Using only import.meta.env for Vite
    const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
    
    if (!API_KEY) {
      throw new Error('OMDB API key not found. Please check your environment/.env file');
    }

    console.log('Using API key:', API_KEY); // Temporary log to verify key

    const response = await fetch(
      `https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.Response === 'False') {
      throw new Error(data.Error || 'Film not found');
    }

    return data;
  } catch (err) {
    console.error('An error occurred while searching for the film:', err);
    throw err;
  }
};

export { searchOMDB };