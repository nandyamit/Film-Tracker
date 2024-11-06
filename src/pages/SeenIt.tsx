import React, { useEffect, useState } from 'react';
import FilmsAlreadySeen from '../components/FilmsAlreadySeen';
import type { Film } from '../utils/interfaces/Film.interface';

const SeenIt = () => {
  const [alreadyWatchedFilms, setAlreadyWatchedFilms] = useState<Film[]>([]);

  const removeFromStorage = (
    e: React.MouseEvent,
    _: boolean, // Using underscore for unused parameter
    currentlyOnSeenItList: boolean,
    title: string
  ): void => {
    e.preventDefault();
    
    if (currentlyOnSeenItList) {
      const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
      const parsedAlreadySeenFilms: Film[] = storedAlreadySeenFilms 
        ? JSON.parse(storedAlreadySeenFilms)
        : [];

      const updatedFilms = parsedAlreadySeenFilms.filter(
        (film: Film) => film.Title !== title
      );

      setAlreadyWatchedFilms(updatedFilms);
      localStorage.setItem('alreadySeenFilms', JSON.stringify(updatedFilms));
      window.dispatchEvent(new Event('storage'));
    }
  };

  useEffect(() => {
    const storedFilms = localStorage.getItem('alreadySeenFilms');
    if (storedFilms) {
      const parsedFilms = JSON.parse(storedFilms) as Film[];
      setAlreadyWatchedFilms(parsedFilms);
    }
  }, []);

  return (
    <>
      <h1 className='pageHeader'>Seen It</h1>
      {!alreadyWatchedFilms?.length ? (
        <h1 style={{ margin: '16px 0' }}>
          Add films you've already seen here.
        </h1>
      ) : (
        <FilmsAlreadySeen
          alreadyWatchedFilms={alreadyWatchedFilms}
          removeFromStorage={removeFromStorage}
        />
      )}
    </>
  );
};

export default SeenIt;