import React from 'react';
import type { Film } from '../utils/interfaces/Film.interface';
import FilmCard from './FilmCard';

type FilmsToWatchListProps = {
  filmsToWatch: Film[];
  removeFromStorage: (
    e: React.MouseEvent,
    onWatchList: boolean,
    onSeenItList: boolean,
    title: string
  ) => void;
};

const FilmsToWatchList = ({ 
  filmsToWatch, 
  removeFromStorage 
}: FilmsToWatchListProps) => {
  return (
    <ul>
      {filmsToWatch.map((film) => (
        <FilmCard
          currentFilm={film}
          key={film.Title}
          onWatchList={true}
          removeFromStorage={removeFromStorage}
        />
      ))}
    </ul>
  );
};

export default FilmsToWatchList;