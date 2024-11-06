import React, { useEffect, useState } from 'react';
import FilmsToWatchList from '../components/FilmsToWatchList';
import type { Film } from '../utils/interfaces/Film.interface';

const WatchList = () => {
  const [filmsToWatch, setFilmsToWatch] = useState<Film[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent,
    currentlyOnWatchList: boolean,
    _: boolean, // Using underscore for unused parameter
    title: string
  ): void => {
    e.preventDefault();
    
    if (currentlyOnWatchList) {
      const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
      const parsedFilmsToWatch: Film[] = storedFilmsToWatch 
        ? JSON.parse(storedFilmsToWatch)
        : [];

      const updatedFilms = parsedFilmsToWatch.filter(
        (film: Film) => film.Title !== title
      );

      setFilmsToWatch(updatedFilms);
      localStorage.setItem('filmsToWatch', JSON.stringify(updatedFilms));
      window.dispatchEvent(new Event('storage'));
    }
  };

  useEffect(() => {
    const storedFilms = localStorage.getItem('filmsToWatch');
    if (storedFilms) {
      const parsedFilms = JSON.parse(storedFilms) as Film[];
      setFilmsToWatch(parsedFilms);
    }
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Watch List</h1>
      {!filmsToWatch?.length ? (
        <h1 style={{ margin: '16px 0' }}>Add films to your watchlist.</h1>
      ) : (
        <FilmsToWatchList
          filmsToWatch={filmsToWatch}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default WatchList;