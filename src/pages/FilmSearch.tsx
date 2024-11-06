import { type FormEvent, useState } from 'react';
import { searchOMDB } from '../api/API';
import FilmCard from '../components/FilmCard';
import type { Film } from '../utils/interfaces/Film.interface';

const FilmSearch = () => {
  const [currentFilm, setCurrentFilm] = useState<Film | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const addToWatchList = () => {
    if (!currentFilm) return;
    
    const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
    const parsedFilmsToWatch: Film[] = storedFilmsToWatch 
      ? JSON.parse(storedFilmsToWatch)
      : [];

    if (!parsedFilmsToWatch.some(film => film.Title === currentFilm.Title)) {
      parsedFilmsToWatch.push(currentFilm);
      localStorage.setItem('filmsToWatch', JSON.stringify(parsedFilmsToWatch));
      window.dispatchEvent(new Event('storage'));
    }
  };

  const addToSeenItList = () => {
    if (!currentFilm) return;

    const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    const parsedAlreadySeenFilms: Film[] = storedAlreadySeenFilms 
      ? JSON.parse(storedAlreadySeenFilms)
      : [];

    if (!parsedAlreadySeenFilms.some(film => film.Title === currentFilm.Title)) {
      parsedAlreadySeenFilms.push(currentFilm);
      localStorage.setItem('alreadySeenFilms', JSON.stringify(parsedAlreadySeenFilms));
      window.dispatchEvent(new Event('storage'));
    }
  };

  const searchForFilmByTitle = async (event: FormEvent, filmTitle: string) => {
    event.preventDefault();
    setError(null);
    
    if (!filmTitle.trim()) {
      setError('Please enter a film title');
      return;
    }
    
    try {
      setIsLoading(true);
      const data = await searchOMDB(filmTitle);
      setCurrentFilm(data);
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred while searching for the film');
      setCurrentFilm(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section id='searchSection'>
        <form
          onSubmit={(event) => searchForFilmByTitle(event, searchInput)}
          className="flex flex-col gap-4 max-w-md mx-auto mb-8"
        >
          <input
            type='text'
            placeholder='Enter a Film Title'
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="px-4 py-2 border rounded"
          />
          <button 
            type='submit' 
            id='searchBtn'
            disabled={isLoading}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? 'Searching...' : 'Search'}
          </button>
          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
        </form>
      </section>
      {currentFilm && (
        <FilmCard
          currentFilm={currentFilm}
          addToWatchList={addToWatchList}
          addToSeenItList={addToSeenItList}
        />
      )}
    </>
  );
};

export default FilmSearch;