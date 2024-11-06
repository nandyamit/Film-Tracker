import React from 'react';
import type { Film } from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

type FilmsAlreadySeenProps = {
  alreadyWatchedFilms: Film[];
  removeFromStorage: (
    e: React.MouseEvent,
    onWatchList: boolean,
    onSeenItList: boolean,
    title: string
  ) => void;
};

const FilmsAlreadySeen = ({ 
  alreadyWatchedFilms, 
  removeFromStorage 
}: FilmsAlreadySeenProps) => {
  return (
    <ul>
      {alreadyWatchedFilms.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onSeenItList={true}
          removeFromStorage={removeFromStorage}
        />
      ))}
    </ul>
  );
};

export default FilmsAlreadySeen;