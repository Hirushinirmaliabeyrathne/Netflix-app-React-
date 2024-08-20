import React, { useEffect, useRef, useState } from 'react';
import './Title.css';
import { Link } from 'react-router-dom';

const Title = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjUxZjY1NTMyNGU3ZDVkODYwYjI4ZWM3ZTgyNzQ5YyIsIm5iZiI6MTcyMTkwMjA2OC41NjQ1MjMsInN1YiI6IjY2YTIyMWIwYzRlNjNiZGI3NGUwZmU1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.x97svbH7UHzeNO4YOwJEXF8gp_ITPoW6TKLj8fkKKK0'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += event.deltaY;
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => setApiData(response.results))
      .catch(err => console.error(err));

    const currentCardsRef = cardsRef.current;
    if (currentCardsRef) {
      currentCardsRef.addEventListener('wheel', handleWheel);
    }

    return () => {
      if (currentCardsRef) {
        currentCardsRef.removeEventListener('wheel', handleWheel);
      }
    };
  }, [category]);

  return (
    <div className='title'>
      <h2>{title ? title : 'Popular On Netflix'}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData && apiData.length > 0 && apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.name} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Title;
