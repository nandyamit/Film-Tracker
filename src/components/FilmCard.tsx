import React from 'react';
import type { Film } from '../utils/interfaces/Film.interface';
import { IoEyeOutline } from 'react-icons/io5';
import { ImCross } from 'react-icons/im';
import { CgPlayListAdd } from 'react-icons/cg';

type FilmCardProps = {
  currentFilm: Film;
  onWatchList?: boolean;
  onSeenItList?: boolean;
  addToWatchList?: () => void;
  addToSeenItList?: () => void;
  removeFromStorage?: (
    e: React.MouseEvent,
    onWatchList: boolean,
    onSeenItList: boolean,
    title: string
  ) => void;
};

const FilmCard = ({ 
  currentFilm, 
  onWatchList = false, 
  onSeenItList = false,
  addToWatchList,
  addToSeenItList,
  removeFromStorage
}: FilmCardProps) => {
  return (
    <>
      {currentFilm?.Title ? (
        <section className='filmCard'>
          <figure>
            <img 
              src={currentFilm.Poster} 
              alt={`${currentFilm.Title} poster`}
              onError={(e) => {
                e.currentTarget.src = 'https://via.placeholder.com/300x450?text=No+Poster+Available';
              }}
            />
          </figure>
          <article className='details'>
            <h2>{currentFilm.Title}</h2>
            <p><strong>Director:</strong> {currentFilm.Director}</p>
            <p><strong>Actors:</strong> {currentFilm.Actors}</p>
            <p><strong>Released:</strong> {currentFilm.Released}</p>
            <p><strong>Genre:</strong> {currentFilm.Genre}</p>
          </article>
          <article className='plot'>{currentFilm.Plot}</article>
          {onWatchList || onSeenItList ? (
            <aside className='icons'>
              <ImCross 
                style={{ fontSize: '40px', cursor: 'pointer' }}
                onClick={(e) => removeFromStorage?.(e, onWatchList, onSeenItList, currentFilm.Title)}
                title="Remove from list"
              />
            </aside>
          ) : (
            <aside className='icons'>
              <CgPlayListAdd 
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={addToWatchList}
                title="Add to Watch List"
              />
              <IoEyeOutline 
                style={{ fontSize: '50px', cursor: 'pointer' }}
                onClick={addToSeenItList}
                title="Add to Seen It List"
              />
            </aside>
          )}
        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a film.</h1>
      )}
    </>
  );
};

export default FilmCard;